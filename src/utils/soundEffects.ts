// Procedural shutter sound effect using Web Audio API (no external MP3/WAV files needed)
let audioCtx: AudioContext | null = null;
let soundEnabled = true;

export const isSoundEnabled = () => soundEnabled;

export const toggleSound = (): boolean => {
  soundEnabled = !soundEnabled;
  return soundEnabled;
};

export const playShutterSound = () => {
  if (!soundEnabled) return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // First shutter curtain click (quick white noise burst with bandpass)
    const bufferSize = audioCtx.sampleRate * 0.04;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(3, now);

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.35, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.04);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    whiteNoise.start(now);

    // Second curtain mirror/shutter return click ~65ms later
    const returnNoise = audioCtx.createBufferSource();
    returnNoise.buffer = noiseBuffer;

    const returnFilter = audioCtx.createBiquadFilter();
    returnFilter.type = 'highpass';
    returnFilter.frequency.setValueAtTime(2200, now + 0.065);

    const returnGain = audioCtx.createGain();
    returnGain.gain.setValueAtTime(0, now);
    returnGain.gain.setValueAtTime(0.28, now + 0.065);
    returnGain.gain.exponentialRampToValueAtTime(0.01, now + 0.11);

    returnNoise.connect(returnFilter);
    returnFilter.connect(returnGain);
    returnGain.connect(audioCtx.destination);

    returnNoise.start(now + 0.065);
  } catch {
    // Graceful fallback if audio context blocked or not supported
  }
};
