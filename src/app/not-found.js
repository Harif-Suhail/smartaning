import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg-primary px-4 pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-2xl border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.22)]">
            <div className="relative min-h-[300px] lg:min-h-[560px]">
              <Image
                src="/images/outdoor-space-home.jpg"
                alt="Luxury outdoor terrace installation"
                fill
                className="product-img"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#150615]/75 via-[#150615]/20 to-transparent" />
              <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 rounded-xl border border-white/30 bg-white/15 px-4 py-3 backdrop-blur-sm">
                <p className="mb-0 text-[0.72rem] tracking-[0.14em] uppercase text-white/90">
                  Smart Awnings & Canopies
                </p>
              </div>
            </div>

            <div
              className="relative p-7 md:p-10 lg:p-12 text-white"
              style={{ background: "linear-gradient(145deg, #2e0d2e 0%, #1a081a 55%, #120512 100%)" }}
            >
              <p className="absolute right-6 top-5 md:right-8 md:top-6 font-heading text-[4.6rem] leading-none text-white/10">
                404
              </p>

              <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-white/70">
                Page not found
              </p>
              <h1 className="mb-4 text-white max-w-[560px]">This page has moved or no longer exists</h1>
              <p className="mb-4 text-white/85">
                The link may be outdated, but we can still guide you quickly to the right product, survey option, or support route.
              </p>
              <p className="mb-8 text-white/75">
                Choose an option below and we&apos;ll get you back on track.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/" className="btn text-center">
                  Back to homepage
                </Link>
                <Link
                  href="/contact"
                  className="btn text-center"
                  style={{ backgroundColor: "#ffffff", color: "#280028" }}
                >
                  Contact our team
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/#products" className="rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white/90 hover:text-white">
                  Browse products
                </Link>
                <Link href="/#faqs" className="rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white/90 hover:text-white">
                  Read FAQs
                </Link>
                <Link href="/contact" className="rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white/90 hover:text-white">
                  Request a quote
                </Link>
                <Link href="tel:07971917201" className="rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white/90 hover:text-white">
                  Call 07971 917201
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
