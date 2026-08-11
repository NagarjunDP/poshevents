import React, { useState } from 'react';

const SIZES_LIST = [320, 480, 640, 768, 1024, 1280, 1600];

export const getOptimizedMediaPaths = (src) => {
  if (!src || typeof src !== 'string') return null;

  // Handle URL encoded paths or plain paths
  const decodedSrc = decodeURIComponent(src);
  const lastDot = decodedSrc.lastIndexOf('.');
  if (lastDot === -1) return null;

  const basePath = decodedSrc.substring(0, lastDot);
  const ext = decodedSrc.substring(lastDot).toLowerCase();

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return null;
  }

  // Construct srcset strings
  const avifSrcset = SIZES_LIST.map((w) => `${encodeURI(basePath)}_w${w}.avif ${w}w`)
    .concat(`${encodeURI(basePath)}.avif 1920w`)
    .join(', ');

  const webpSrcset = SIZES_LIST.map((w) => `${encodeURI(basePath)}_w${w}.webp ${w}w`)
    .concat(`${encodeURI(basePath)}.webp 1920w`)
    .join(', ');

  return {
    avifSrcset,
    webpSrcset,
    avifSrc: `${encodeURI(basePath)}.avif`,
    webpSrc: `${encodeURI(basePath)}.webp`,
    fallbackSrc: encodeURI(decodedSrc)
  };
};

export function OptimizedImage({
  src,
  alt = '',
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  decoding = 'async',
  fetchpriority = 'low',
  onError,
  ...props
}) {
  const [imgError, setImgError] = useState(false);
  const media = getOptimizedMediaPaths(src);

  const handleError = (e) => {
    if (!imgError) {
      setImgError(true);
    }
    if (onError) onError(e);
  };

  if (!media || imgError) {
    let fallbackPath = src;
    if (imgError && typeof src === 'string' && src.includes('cdn.jsdelivr.net')) {
      const parts = src.split('/public');
      if (parts.length > 1) {
        fallbackPath = parts[1];
      }
    }
    return (
      <img
        src={fallbackPath}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchpriority}
        onError={onError}
        {...props}
      />
    );
  }

  return (
    <picture className="w-full h-full block">
      <source type="image/avif" srcSet={media.avifSrcset} sizes={sizes} />
      <source type="image/webp" srcSet={media.webpSrcset} sizes={sizes} />
      <img
        src={media.fallbackSrc}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchpriority}
        onError={handleError}
        {...props}
      />
    </picture>
  );
}

export default OptimizedImage;
