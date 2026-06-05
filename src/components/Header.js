'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productNavItems } from '@/data/products';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-black/5 bg-bg-primary shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:fixed lg:top-0">
      <div className="bg-linear-to-r from-[#3c113b] via-[#6b2e6b] to-[#3c113b] text-white">
        <div className="container py-1.5 text-center text-[0.78rem] md:text-[0.86rem]">
          <Link href="/contact" className="inline-block text-white/90 underline-offset-4 hover:text-white hover:underline">
            Finance options available with authorised UK partners
          </Link>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-3 py-1.5 lg:grid-cols-[1fr_auto_1fr] lg:gap-0 lg:py-2">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-black/10 text-text-primary transition-colors lg:hidden"
        >
          <span className="text-xl leading-none">{isMobileMenuOpen ? '✕' : '☰'}</span>
        </button>

        <nav className="hidden items-center justify-start gap-8 lg:flex xl:gap-10">
          <Link href="/#expertise" className="nav-link text-[0.84rem] font-light tracking-[0.02em] text-text-secondary transition-colors duration-300 hover:text-accent">
            About
          </Link>
          <Link href="/services.html" className="nav-link text-[0.84rem] font-light tracking-[0.02em] text-text-secondary transition-colors duration-300 hover:text-accent">
            Services
          </Link>
          <div className="group relative inline-block -mb-4 pb-4">
            <Link href="/products" className="nav-link text-[0.84rem] font-light tracking-[0.02em] text-text-secondary transition-colors duration-300 hover:text-accent">
              Products ▾
            </Link>
            <div className="invisible absolute top-full left-0 z-10 flex min-w-[220px] translate-y-[10px] flex-col gap-4 rounded bg-bg-primary p-4 opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {productNavItems.map((item) => (
                <Link key={item.href} href={item.href} className="whitespace-nowrap text-[0.9rem] font-normal text-text-primary transition-colors duration-300 hover:text-accent">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/projects" className="nav-link text-[0.84rem] font-light tracking-[0.02em] text-text-secondary transition-colors duration-300 hover:text-accent">
            Projects
          </Link>
        </nav>

        <Link href="/" className="flex items-center justify-center transition-all duration-300 lg:justify-center">
          <Image
            src="/images/smart_awnings_and_canopies_logo-1-1.png"
            alt="Smart Awnings & Canopies"
            width={108}
            height={40}
            style={{ objectFit: 'contain' }}
            className="transition-all duration-300"
            priority
          />
        </Link>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          <Link href="/contact" className="btn px-6 py-3 text-xs font-medium tracking-wider">
            Request a Quote
          </Link>
        </div>

        <Link
          href="tel:07971917201"
          aria-label="Call 07971 917201"
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-accent/25 bg-accent/15 text-accent lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8 9.99a16 16 0 0 0 6 6l1.53-1.29a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" />
          </svg>
        </Link>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-black/10 bg-bg-primary lg:hidden">
          <nav className="container flex flex-col gap-2.5 py-3">
            <Link href="/#expertise" className="py-0.5 text-[0.95rem] text-text-secondary" onClick={closeMobileMenu}>
              About
            </Link>
            <Link href="/services.html" className="py-0.5 text-[0.95rem] text-text-secondary" onClick={closeMobileMenu}>
              Services
            </Link>
            <button
              type="button"
              className="flex items-center justify-between py-0.5 text-left text-[0.95rem] text-text-secondary"
              onClick={() => setIsMobileProductsOpen((prev) => !prev)}
              aria-expanded={isMobileProductsOpen}
            >
              <span>Products</span>
              <span>{isMobileProductsOpen ? '▴' : '▾'}</span>
            </button>
            {isMobileProductsOpen && (
              <div className="flex flex-col gap-2 pb-1 pl-3">
                {productNavItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[0.88rem] text-text-secondary" onClick={closeMobileMenu}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/projects" className="py-0.5 text-[0.95rem] text-text-secondary" onClick={closeMobileMenu}>
              Projects
            </Link>
            <Link href="/contact" className="btn mt-1 w-full text-center" onClick={closeMobileMenu}>
              Request a Quote
            </Link>
            <Link href="/#survey" className="btn w-full text-center" style={{ backgroundColor: '#ffffff', color: '#280028' }} onClick={closeMobileMenu}>
              Book a Site Survey
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
