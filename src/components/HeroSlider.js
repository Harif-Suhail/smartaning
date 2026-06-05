'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/images/outdoor-space-home.jpg',
    alt: 'Luxury outdoor space with premium shelter',
    eyebrow: 'Premium Shading & Shelter',
    title: 'Timeless Elegance For Your Outdoor Space',
    description: 'Bespoke systems designed, surveyed and installed for homes and hospitality venues across the UK.',
    primaryCta: { href: '/contact', label: 'Request a Quote' },
    secondaryCta: { href: '#survey', label: 'Book a Site Survey' },
  },
  {
    image: '/images/retractable-roof-2 (1).jpg',
    alt: 'Retractable roof installation in modern outdoor area',
    eyebrow: 'Retractable Roof Systems',
    title: 'Flexible cover with a premium finish',
    description: 'Open for light and air, close for dependable weather protection with elegant integrated design.',
    primaryCta: { href: '#products', label: 'Explore Products' },
    secondaryCta: { href: '/contact', label: 'Discuss Your Project' },
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 xl:pt-48">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-overlay pointer-events-none absolute inset-0 z-1 transition-opacity duration-700 ${index === active ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="hero-image"
          />
        </div>
      ))}

      <div className="container relative z-3 mx-auto w-full max-w-[1000px] px-4 text-center text-white">
        {/* Same grid cell for every slide: height = tallest slide so layout does not jump */}
        <div className="grid grid-cols-1">
          {slides.map((slide, index) => {
            const isActive = index === active;
            return (
              <div
                key={slide.image}
                className={`col-start-1 row-start-1 flex flex-col items-center ${isActive ? 'relative z-10' : 'invisible pointer-events-none'}`}
                aria-hidden={!isActive}
              >
                <p className="font-body text-base md:text-[1.125rem] tracking-[0.12em] md:tracking-[0.15em] uppercase mb-4 md:mb-6 text-[#e0d0df] fade-in delay-1">
                  {slide.eyebrow}
                </p>

                {index === 0 ? (
                  <h1 className="text-[clamp(2.75rem,6.8vw,5rem)] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 text-white fade-in delay-2">
                    {slide.title}
                  </h1>
                ) : (
                  <h2 className="text-[clamp(2.2rem,6vw,4.2rem)] leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 text-white fade-in delay-2">
                    {slide.title}
                  </h2>
                )}

                <p className="mb-6 max-w-[720px] text-white/85 fade-in delay-2 md:mb-8">{slide.description}</p>

                <div className="fade-in delay-3 mt-2 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
                  <Link href={slide.primaryCta.href} className="btn text-center" tabIndex={isActive ? 0 : -1}>
                    {slide.primaryCta.label}
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="btn text-center"
                    style={{ backgroundColor: '#ffffff', color: '#280028' }}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={`dot-${slide.image}`}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${active === index ? 'w-7 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'}`}
              aria-label={`Show slide ${index + 1}`}
              aria-current={active === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
