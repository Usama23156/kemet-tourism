export type EscapePackage = {
  id: number;
  name: string;
  details: string;
};

export type EscapeCategory = {
  id: number;
  name: string;
  discrption: string;
  img: string;
  packages: EscapePackage[];
};

export type EscapeItem = {
  id: number;
  img: string[];
  name: string;
  price: string;
  features: string[];
  discrption: string;
};

export function normalizeImageSrc(src: string): string {
  return src.startsWith("/") ? src : `/${src}`;
}
