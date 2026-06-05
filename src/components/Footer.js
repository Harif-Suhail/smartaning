import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { productNavItems } from '@/data/products';

const accordionChevron = (
  <span className="text-white/55 transition-transform duration-300 group-open:rotate-180" aria-hidden>
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </span>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`mx-auto w-full max-w-7xl px-4 ${styles.footerContainer}`}>
        <div className={`${styles.footerBrand} flex flex-col items-center text-center lg:items-start lg:text-left`}>
          <div className={`${styles.logo} flex justify-center lg:justify-start`}>
            <Image
              src="/images/smart_awnings_and_canopies_logo-1-1.png"
              alt="Smart Awnings & Canopies"
              width={200}
              height={75}
              style={{ objectFit: 'contain' }}
              className={styles.footerLogoImage}
            />
          </div>
          <p className={`${styles.tagline} mx-auto lg:mx-0`}>
            Premium outdoor shading and shelter systems for homes and commercial spaces across the UK.
          </p>
        </div>

        <div className="min-w-0">
          <div className="overflow-hidden rounded-xl border border-white/12 bg-white/4 lg:hidden">
            <details name="footer-nav" className="group border-b border-white/10 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-heading text-[1.15rem] text-white [&::-webkit-details-marker]:hidden">
                Products
                {accordionChevron}
              </summary>
              <div className="flex flex-col gap-0.5 border-t border-white/10 px-4 py-3">
                {productNavItems.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <details name="footer-nav" className="group border-b border-white/10 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-heading text-[1.15rem] text-white [&::-webkit-details-marker]:hidden">
                Company
                {accordionChevron}
              </summary>
              <div className="flex flex-col gap-0.5 border-t border-white/10 px-4 py-3">
                <Link href="/services.html" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  Services
                </Link>
                <Link href="/#expertise" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  Expertise
                </Link>
                <Link href="/#works" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  Works
                </Link>
                <Link href="/projects" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  Projects
                </Link>
                <Link href="/#faqs" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  FAQs
                </Link>
              </div>
            </details>

            <details name="footer-nav" className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 font-heading text-[1.15rem] text-white [&::-webkit-details-marker]:hidden">
                Contact
                {accordionChevron}
              </summary>
              <div className="flex flex-col gap-0.5 border-t border-white/10 px-4 py-3">
                <Link href="/contact" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  Contact us
                </Link>
                <p className="rounded-md py-2.5 text-[0.95rem] text-white/78">
                  Tel:{' '}
                  <a href="tel:07971917201" className="hover:text-[#dca5de]">
                    07971917201
                  </a>
                </p>
                <Link href="/contact" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  Request a Quote
                </Link>
                <Link href="/#survey" className="rounded-md py-2.5 text-[0.95rem] text-white/78 hover:bg-white/5 hover:text-[#dca5de]">
                  Book a Site Survey
                </Link>
              </div>
            </details>
          </div>

          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0">
            <div className={styles.linkGroup}>
              <h3>Products</h3>
              {productNavItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <Link href="/services.html">Services</Link>
              <Link href="/#expertise">Expertise</Link>
              <Link href="/#works">Works</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/#faqs">FAQs</Link>
            </div>
            <div className={styles.linkGroup}>
              <h3>Contact</h3>
              <Link href="/contact">Contact us</Link>
              <p>
                Tel: <a href="tel:07971917201">07971917201</a>
              </p>
              <Link href="/contact">Request a Quote</Link>
              <Link href="/#survey">Book a Site Survey</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="mx-auto w-full max-w-7xl px-4">
          <p>&copy; {new Date().getFullYear()} Smart Awnings & Canopies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
