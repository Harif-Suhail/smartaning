'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/**
 * @param {{ src: string; alt: string }[]} images
 */
export default function ProjectGallery({ images }) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeBtnRef = useRef(null);

  const count = images.length;
  const safeIndex = count ? ((index % count) + count) % count : 0;

  const go = useCallback(
    (delta) => {
      if (!count) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count]
  );

  const openLightbox = useCallback((at) => {
    setIndex(at);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen, closeLightbox, go]);

  useEffect(() => {
    if (lightboxOpen) closeBtnRef.current?.focus();
  }, [lightboxOpen]);

  if (!count) return null;

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-xl border border-white/15 bg-white/5 shadow-[0_24px_55px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${safeIndex * 100}%)` }}
            >
              {images.map((img, i) => (
                <div
                  key={`slide-${i}`}
                  className="min-w-full shrink-0 basis-full relative h-[240px] sm:h-[320px] md:h-[420px] lg:h-[460px]"
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(i)}
                    className="absolute inset-0 z-1 cursor-zoom-in group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a081a]"
                    aria-label={`Open image ${i + 1} of ${count} in lightbox`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority={i === 0}
                    />
                    <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-black/45 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/95 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Enlarge
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55 md:left-4 md:h-11 md:w-11"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/55 md:right-4 md:h-11 md:w-11"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 flex-wrap" aria-hidden="true">
          {images.map((_, i) => (
            <button
              key={`dot-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === safeIndex ? 'w-7 bg-accent' : 'w-2 bg-white/35 hover:bg-white/55'}`}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === safeIndex}
            />
          ))}
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory">
          {images.map((img, i) => (
            <button
              key={`thumb-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative h-14 w-20 shrink-0 snap-start overflow-hidden rounded-lg border-2 transition-colors ${
                i === safeIndex ? 'border-accent ring-2 ring-accent/35' : 'border-white/20 opacity-80 hover:opacity-100'
              }`}
              aria-label={`Show image ${i + 1}`}
            >
              <Image src={img.src} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>

        <p className="mt-3 text-center text-[0.8rem] text-white/65">
          {safeIndex + 1} of {count}. Click the main image to view full size.
        </p>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-200 flex flex-col bg-[#0a050a]/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-6">
            <p className="text-[0.8rem] uppercase tracking-[0.14em] text-white/75">
              {safeIndex + 1} <span className="text-white/40">/</span> {count}
            </p>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeLightbox}
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
              aria-label="Close lightbox"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 py-3 md:px-8">
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 z-2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 md:left-6"
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="relative mx-auto h-[min(72vh,calc(100dvh-10rem))] w-full max-w-[1400px]">
              <Image
                src={images[safeIndex].src}
                alt={images[safeIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={90}
                priority
              />
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 z-2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50 md:right-6"
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="shrink-0 border-t border-white/10 px-3 py-3">
            <div className="mx-auto flex max-w-4xl gap-1.5 overflow-x-auto pb-1 snap-x">
              {images.map((img, i) => (
                <button
                  key={`lb-thumb-${i}`}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`relative h-12 w-16 shrink-0 snap-start overflow-hidden rounded-md border-2 ${
                    i === safeIndex ? 'border-white' : 'border-transparent opacity-55 hover:opacity-100'
                  }`}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image src={img.src} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
