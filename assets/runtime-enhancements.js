const modules = [
  './diputacion-tracking.js',
  './study-progress.js',
  './test-history.js',
  './error-review.js',
  './theme-test-link.js',
  './test-answer-fix.js'
];

function loadEnhancements() {
  Promise.allSettled(modules.map(module => import(module)));
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(loadEnhancements, { timeout: 1800 });
} else {
  window.addEventListener('load', () => setTimeout(loadEnhancements, 250), { once: true });
}
