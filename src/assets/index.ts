// Main assets module - consolidates common assets
import aboutMeJournalPng from './journal.PNG';
import aboutMeJournalWebp800 from './journal.PNG';
import aboutMeJournalWebp400 from './journal.PNG';
// Add your profile images here
import profile1 from './profile1.jpg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import photo8 from './photo8.jpg';
import photo9 from './photo9.jpg';
import photo10 from './photo10.jpg';
import photo11 from './photo11.jpg';
import photo12 from './photo12.jpg';
import photo13 from './photo13.jpg';
import photo14 from './photo14.jpg';
import comingSoon from './coming_soon.png';
import dividerPng from './divider.PNG';
import dividerWebp from './divider-original.webp';
import divider from './divider-original.webp';

// For backward compatibility
const aboutMeJournal = aboutMeJournalPng;

// Re-export all asset modules
export * from './stars';
export * from './stickers';
export * from './project_icons';
export * from './techstack';

// Export main assets
export const mainAssets = {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export {
  aboutMeJournal,
  aboutMeJournalPng,
  aboutMeJournalWebp800,
  aboutMeJournalWebp400,
  profile1,
  profile2,
  profile3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  comingSoon,
  divider,
  dividerPng,
  dividerWebp,
};

export default {
  mainAssets,
};
