import About from '../sections/About.astro';
import Experience from '../sections/Experience.astro';
import Contact from '../sections/Contact.astro';

// Sections built as components. `command` is the nav label, the command-bar command and the #anchor.
// Plain-Markdown sections in src/content/sections are added automatically; use `order` to place them.
export const componentSections = [
  { command: 'about', title: 'About', order: 10, component: About },
  { command: 'experience', title: 'Experience', order: 20, component: Experience },
  { command: 'contact', title: 'Contact', order: 90, component: Contact },
];
