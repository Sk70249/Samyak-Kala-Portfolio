// Enhanced lazy loading utility with IntersectionObserver
export const lazyLoadImage = (target) => {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;

        // Preload image
        const preloadImg = new Image();
        preloadImg.src = src;
        preloadImg.onload = () => {
          img.src = src;
          img.classList.remove('lazy-image');
          img.classList.add('loaded');
        };

        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

// Cache management
export const clearImageCache = () => {
  if ('caches' in window) {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        if (cacheName.startsWith('img-cache')) {
          caches.delete(cacheName);
        }
      });
    });
  }
};