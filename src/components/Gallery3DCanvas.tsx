import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PhotoItem } from '../types';
import { playShutterSound } from '../utils/soundEffects';
import { Sparkles, RotateCcw, Play, Pause, Maximize2, Move } from 'lucide-react';

interface Gallery3DCanvasProps {
  photos: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const Gallery3DCanvas: React.FC<Gallery3DCanvasProps> = ({ photos, onSelectPhoto }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const cardMeshesRef = useRef<THREE.Mesh[]>([]);
  const isDraggingRef = useRef(false);
  const previousPointerPositionRef = useRef({ x: 0, y: 0 });
  const targetRotationYRef = useRef(0);
  const currentRotationYRef = useRef(0);
  const isRotatingStateRef = useRef(true);

  useEffect(() => {
    isRotatingStateRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0c0c0e, 0.045);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 11.5);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xfff3e0, 1.2);
    scene.add(ambientLight);

    const warmSpotLight = new THREE.SpotLight(0xffb74d, 3, 30, Math.PI / 4, 0.5, 1);
    warmSpotLight.position.set(0, 8, 10);
    scene.add(warmSpotLight);

    const rimLight = new THREE.DirectionalLight(0xe0e7ff, 1);
    rimLight.position.set(-6, -4, -5);
    scene.add(rimLight);

    // Group for the 3D rotating cylinder of photos
    const photoGroup = new THREE.Group();
    scene.add(photoGroup);
    groupRef.current = photoGroup;

    // Bokeh / Dust Particles floating in 3D space
    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      particleScales[i] = Math.random() * 0.08 + 0.02;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.12,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Helper to generate a stylized fallback canvas texture
    const createPlaceholderTexture = (title: string, category: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 680;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Gradient background
        const grad = ctx.createLinearGradient(0, 0, 512, 680);
        grad.addColorStop(0, '#1c1917');
        grad.addColorStop(1, '#0c0a09');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 680);

        // Border accent
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 4;
        ctx.strokeRect(16, 16, 480, 648);

        // Text
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 24px sans-serif';
        ctx.fillText(category.toUpperCase(), 36, 80);

        ctx.fillStyle = '#fafaf9';
        ctx.font = 'bold 36px serif';
        ctx.fillText(title, 36, 140);

        ctx.fillStyle = '#a8a29e';
        ctx.font = '20px sans-serif';
        ctx.fillText('Jean Nascimento Fotografia', 36, 620);
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Build photo cards on a cylinder layout
    const displayPhotos = photos.slice(0, 9);
    const radius = 7.0;
    const cardWidth = 2.4;
    const cardHeight = 3.3;
    const meshes: THREE.Mesh[] = [];

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin('anonymous');

    displayPhotos.forEach((photo, index) => {
      const angle = (index / displayPhotos.length) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight, 4, 4);

      // Frame backing
      const frameMat = new THREE.MeshStandardMaterial({
        color: 0x18181b,
        roughness: 0.3,
        metalness: 0.8,
        side: THREE.DoubleSide,
      });

      // Front photo material
      const fallbackTex = createPlaceholderTexture(photo.title, photo.categoryLabel);
      const photoMat = new THREE.MeshStandardMaterial({
        map: fallbackTex,
        roughness: 0.4,
        metalness: 0.1,
        side: THREE.FrontSide,
      });

      // Load actual image texture with crossOrigin
      textureLoader.load(
        photo.thumbnailUrl,
        (loadedTex) => {
          loadedTex.colorSpace = THREE.SRGBColorSpace;
          photoMat.map = loadedTex;
          photoMat.needsUpdate = true;
        },
        undefined,
        () => {
          // Keep fallback
        }
      );

      const mesh = new THREE.Mesh(geometry, photoMat);
      mesh.position.set(x, 0, z);
      // Face inward to center (or outward depending on camera)
      mesh.lookAt(0, 0, 0);
      mesh.rotateY(Math.PI); // Face towards camera outside
      mesh.userData = { photo, index };

      // Add a subtle golden border mesh
      const borderGeo = new THREE.BufferGeometry();
      const hw = cardWidth / 2 + 0.03;
      const hh = cardHeight / 2 + 0.03;
      const points = [
        new THREE.Vector3(-hw, -hh, 0.01),
        new THREE.Vector3(hw, -hh, 0.01),
        new THREE.Vector3(hw, hh, 0.01),
        new THREE.Vector3(-hw, hh, 0.01),
        new THREE.Vector3(-hw, -hh, 0.01),
      ];
      borderGeo.setFromPoints(points);
      const borderLine = new THREE.Line(
        borderGeo,
        new THREE.LineBasicMaterial({ color: 0xd97706, transparent: true, opacity: 0.4 })
      );
      mesh.add(borderLine);

      // Backplate
      const backMesh = new THREE.Mesh(geometry, frameMat);
      backMesh.position.set(0, 0, -0.01);
      backMesh.rotation.y = Math.PI;
      mesh.add(backMesh);

      photoGroup.add(mesh);
      meshes.push(mesh);
    });

    cardMeshesRef.current = meshes;

    // Raycaster for clicking cards
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const getPointerPos = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1,
        rawX: clientX,
        rawY: clientY,
      };
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      const pos = getPointerPos(e);
      previousPointerPositionRef.current = { x: pos.rawX, y: pos.rawY };
    };

    let hasDraggedSignificantly = false;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const pos = getPointerPos(e);

      if (isDraggingRef.current) {
        const deltaX = pos.rawX - previousPointerPositionRef.current.x;
        if (Math.abs(deltaX) > 4) {
          hasDraggedSignificantly = true;
        }
        targetRotationYRef.current += deltaX * 0.0055;
        previousPointerPositionRef.current = { x: pos.rawX, y: pos.rawY };
      }

      // Raycast for hover state
      mouse.x = pos.x;
      mouse.y = pos.y;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        container.style.cursor = 'pointer';
        const hitMesh = intersects[0].object as THREE.Mesh;
        const p = hitMesh.userData.photo as PhotoItem;
        if (p) {
          setHoveredTitle(p.title);
        }
      } else {
        container.style.cursor = isDraggingRef.current ? 'grabbing' : 'grab';
        setHoveredTitle(null);
      }
    };

    const handlePointerUp = (e: MouseEvent | TouchEvent) => {
      if (!hasDraggedSignificantly && !('touches' in e)) {
        // Was a clean click, check intersection
        const pos = getPointerPos(e);
        mouse.x = pos.x;
        mouse.y = pos.y;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(meshes);
        if (intersects.length > 0) {
          const hitMesh = intersects[0].object as THREE.Mesh;
          const photo = hitMesh.userData.photo as PhotoItem;
          if (photo) {
            playShutterSound();
            onSelectPhoto(photo);
          }
        }
      }

      isDraggingRef.current = false;
      hasDraggedSignificantly = false;
      container.style.cursor = 'grab';
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Auto rotation if enabled and not dragging
      if (isRotatingStateRef.current && !isDraggingRef.current) {
        targetRotationYRef.current += 0.22 * delta;
      }

      // Smooth lerp rotation
      currentRotationYRef.current += (targetRotationYRef.current - currentRotationYRef.current) * 0.08;
      photoGroup.rotation.y = currentRotationYRef.current;

      // Particle floating animation
      particles.rotation.y += 0.03 * delta;
      particles.rotation.x += 0.015 * delta;

      // Calculate nearest card facing camera
      const normalizedAngle = ((currentRotationYRef.current % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      const cardStep = (Math.PI * 2) / displayPhotos.length;
      const facingIndex = Math.round(normalizedAngle / cardStep) % displayPhotos.length;
      setActiveIndex(facingIndex);

      // Tilt slightly on mouse Y
      camera.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [photos, onSelectPhoto]);

  const rotateTo = (direction: 'left' | 'right') => {
    playShutterSound();
    const step = (Math.PI * 2) / Math.min(photos.length, 8);
    targetRotationYRef.current += direction === 'left' ? step : -step;
  };

  const handleInspectActive = () => {
    const activePhoto = photos[activeIndex % photos.length];
    if (activePhoto) {
      playShutterSound();
      onSelectPhoto(activePhoto);
    }
  };

  return (
    <div id="gallery-3d-section" className="relative w-full h-[520px] md:h-[620px] lg:h-[680px] bg-gradient-to-b from-[#09090b] via-[#100f13] to-[#0c0c0e] rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl">
      {/* 3D Canvas Mount */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      />

      {/* Ambient Lens Vignette & Flares */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#09090b] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent pointer-events-none" />

      {/* Top Header Floating Badge */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md border border-amber-500/30 px-4 py-2 rounded-full pointer-events-auto shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-200">
            Galeria 3D Espacial Interativa
          </span>
          <span className="hidden sm:inline-block text-zinc-500 text-xs">|</span>
          <span className="hidden sm:inline-block text-xs text-zinc-400">
            Gire, arraste e selecione obras
          </span>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-full text-xs text-zinc-400 pointer-events-auto">
          <Move className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">Arraste para rotacionar em 360°</span>
        </div>
      </div>

      {/* Hovered Photo Tooltip Overlay */}
      {hoveredTitle && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-amber-950/80 backdrop-blur-md border border-amber-500/40 text-amber-200 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full pointer-events-none transition-all duration-200 shadow-xl flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{hoveredTitle} (Clique para ampliar)</span>
        </div>
      )}

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 p-2 md:p-2.5 rounded-2xl shadow-2xl z-20">
        <button
          id="btn-3d-rotate-left"
          type="button"
          onClick={() => rotateTo('left')}
          title="Girar para esquerda"
          className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-zinc-700/50 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          id="btn-3d-toggle-spin"
          type="button"
          onClick={() => {
            playShutterSound();
            setIsRotating(!isRotating);
          }}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
            isRotating
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
          }`}
        >
          {isRotating ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pausar Giro</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Giro Automático</span>
            </>
          )}
        </button>

        <button
          id="btn-3d-rotate-right"
          type="button"
          onClick={() => rotateTo('right')}
          title="Girar para direita"
          className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-300 border border-zinc-700/50 transition-colors scale-x-[-1]"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div className="h-6 w-px bg-zinc-800 mx-1" />

        <button
          id="btn-3d-inspect-active"
          type="button"
          onClick={handleInspectActive}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-zinc-950 font-bold text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-transform active:scale-95"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>Ver Detalhes & EXIF</span>
        </button>
      </div>
    </div>
  );
};
