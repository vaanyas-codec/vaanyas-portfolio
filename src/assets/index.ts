// Main assets module - consolidates common assets
import aboutPhoto from './about-photo.webp';
import comingSoon from './coming_soon.png';
import dividerPng from './divider.PNG';
import dividerWebp from './divider-original.webp';
import divider from './divider-original.webp';

// Re-export all asset modules
export * from './stars';
export * from './stickers';
export * from './techstack';

export const mainAssets = {
  aboutPhoto,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export { aboutPhoto, comingSoon, divider, dividerPng, dividerWebp };

export default {
  mainAssets,
};
