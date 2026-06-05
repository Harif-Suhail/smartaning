import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/data/products";

export const metadata = {
  title: "Products | Smart Awnings & Canopies",
  description:
    "Explore retractable roofs, bioclimatic louvre pergolas, awnings, large umbrellas and glass roof systems from Smart Awnings & Canopies.",
};

export default function ProductsIndexPage() {
  const products = getAllProducts();

  return (
    <>
      <Header />
      <main className="bg-bg-primary pt-28 md:pt-36">
        <section className="relative overflow-hidden py-18 md:py-24">
          <div
            className="absolute inset-0"
            aria-hidden
            style={{ background: "radial-gradient(120% 120% at 0% 0%, #3d0d3d 0%, #1a081a 55%, #120412 100%)" }}
          />
          <div className="pointer-events-none absolute -top-20 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#80387f]/22 blur-[120px]" />
          <div className="container relative z-1 max-w-6xl text-center text-white">
            <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-white/72">Product collection</p>
            <h1 className="mb-4 text-white">Outdoor systems designed around real spaces</h1>
            <p className="mx-auto mb-0 max-w-3xl text-white/80">
              Browse our current product range, from fully automated roof systems to refined awnings, large umbrellas and glass roof structures for homes, hospitality venues and commercial projects.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="elevate-card group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(20,10,20,0.08)]"
                >
                  <div className="relative h-[260px]">
                    <Image
                      src={product.cardImage}
                      alt={product.cardAlt}
                      fill
                      className="product-img transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#170717]/82 via-[#170717]/18 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-6">
                      <p className="mb-1 text-[0.66rem] uppercase tracking-[0.14em] text-white/74">{product.category}</p>
                      <p className="mb-0 font-heading text-[1.55rem] leading-[1.1]">{product.title}</p>
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="mb-4 text-[0.95rem] text-text-secondary">{product.description}</p>
                    <span className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">
                      View product
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
