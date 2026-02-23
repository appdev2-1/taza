const IMAGE_CACHE_KEY = 'tazalin_image_cache';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000;

export const getCachedImage = (fileName) => {
  if (typeof window === 'undefined') return null;
  try {
    const cache = JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY) || '{}');
    const cached = cache[fileName];
    if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
      return cached.url;
    }
    return null;
  } catch {
    return null;
  }
};

export const setCachedImage = (fileName, url) => {
  if (typeof window === 'undefined') return;
  try {
    const cache = JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY) || '{}');
    cache[fileName] = { url, timestamp: Date.now() };
    localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(cache));
  } catch (e) {
    console.warn('Cache failed:', e);
  }
};

export const preloadImages = (urls) => {
  if (typeof window === 'undefined') return;
  urls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};
