export type PhotoCategory =
  | 'todos'
  | 'casamento'
  | 'individual'
  | 'casal'
  | 'natureza'
  | 'video'
  | 'feminino'
  | 'casamentos'
  | 'eventos'
  | 'editorial'
  | 'esportivo';

export interface PhotoItem {
  id: string;
  title: string;
  category: PhotoCategory;
  categoryLabel: string;
  imageUrl: string;
  thumbnailUrl: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  location: string;
  featured?: boolean;
  isVideo?: boolean;
  googleMapsUrl?: string;
  exif: {
    camera: string;
    lens: string;
    aperture: string;
    shutter: string;
    iso: string;
    focalLength: string;
  };
  story: string;
  mood: string[];
  likes: number;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  retouchHighlights: string[];
}

export interface PhotographyPackage {
  id: string;
  name: string;
  tagline: string;
  category: PhotoCategory;
  estimatedPrice: string;
  duration: string;
  deliverables: string[];
  popular?: boolean;
  badge?: string;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  roleOrEvent: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  sessionType: string;
}
