import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts, getProduct, getProductSlugs } from "@/data/products";

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product | Smart Awnings & Canopies" };
  }

  return {
    title: `${product.title} | Smart Awnings & Canopies`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const moreProducts = getAllProducts().filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-bg-primary">
        <section className="relative flex min-h-[60vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={product.heroImage}
              alt={product.heroAlt}
              fill
              priority
              className="product-img"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-[#160616]/94 via-[#160616]/48 to-[#160616]/18" />
          <div className="container relative z-1 max-w-5xl px-4 pb-12 pt-36 text-white md:pb-16 md:pt-42">
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.16em] text-white/74">{product.category}</p>
            <h1 className="mb-4 max-w-4xl text-white">{product.title}</h1>
            <p className="mb-6 max-w-3xl text-lg text-white/88 md:text-xl">{product.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn text-center">
                Request a quote
              </Link>
              <Link
                href="#product-gallery"
                className="inline-flex items-center justify-center rounded border border-white/65 px-5 py-3 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              >
                View gallery
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="relative h-[320px] overflow-hidden rounded-2xl border border-black/10 shadow-[0_20px_50px_rgba(20,10,20,0.12)] sm:h-[420px] lg:h-[540px]">
                <Image
                  src={product.overviewImage}
                  alt={product.overviewAlt}
                  fill
                  className="product-img"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div>
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Overview</p>
                <h2 className="mb-4">Designed around your space</h2>
                {product.intro.map((paragraph) => (
                  <p key={paragraph} className="text-text-secondary">
                    {paragraph}
                  </p>
                ))}
                <Link href="/contact" className="btn mt-2">
                  Book a free site survey
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary/45 py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="mb-10 max-w-[680px]">
              <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Applications</p>
              <h2 className="mb-3">Suitable for homes, hospitality and commercial work</h2>
              <p className="mb-0 text-text-secondary">
                Each installation is tailored to the site, how the space is used and the finish the project needs to achieve.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.suitableFor.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-black/10 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(24,10,24,0.06)]"
                >
                  <p className="mb-0 text-[0.95rem] text-text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Key features</p>
                <h2 className="mb-4">Performance, detailing and flexibility built in</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.features.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-black/10 bg-bg-secondary/55 px-4 py-3 text-[0.94rem] text-text-secondary"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_18px_42px_rgba(28,15,28,0.08)] md:p-7">
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-text-secondary">Available systems</p>
                <h3 className="mb-4 text-[1.7rem] md:text-[2rem]">Configuration options</h3>
                <div className="flex flex-wrap gap-2.5">
                  {product.systemTypes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent/18 bg-accent/8 px-3 py-2 text-[0.8rem] text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t border-black/8 pt-6">
                  <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-text-secondary">Popular additions</p>
                  <div className="grid grid-cols-1 gap-3">
                    {product.options.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m5 13 4 4L19 7" />
                          </svg>
                        </span>
                        <p className="mb-0 text-[0.95rem] text-text-secondary">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="product-gallery"
          className="relative overflow-hidden py-16 md:py-24"
          style={{ background: "radial-gradient(120% 120% at 0% 0%, #3d0d3d 0%, #1a081a 55%, #120412 100%)" }}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#80387f]/20 blur-[130px]" />
          <div className="container relative z-1 max-w-7xl">
            <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
              <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Gallery</p>
              <h2 className="mb-3 text-white">Recent visual references</h2>
              <p className="mb-0 text-white/75">
                Supplied photography from recent residential and commercial installations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {product.gallery.map((image, index) => (
                <article
                  key={`${image.src}-${index}`}
                  className="group overflow-hidden rounded-xl border border-white/12 bg-white/6 shadow-[0_18px_42px_rgba(0,0,0,0.18)]"
                >
                  <div className="relative h-[260px]">
                    <Image src={image.src} alt={image.alt} fill className="product-img transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 1280px) 50vw, 33vw" />
                  </div>
                  <div className="border-t border-white/12 px-4 py-3">
                    <p className="mb-0 text-[0.84rem] text-white/78">{image.alt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Why choose us</p>
                <h2 className="mb-4">A measured approach from survey to aftercare</h2>
                <p className="mb-0 text-text-secondary">
                  Smart Awnings pairs bespoke product selection with practical site knowledge, clear design guidance and careful installation delivery.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {product.reasons.map((item) => (
                  <div
                    key={item}
                    className="elevate-card rounded-xl border border-black/10 bg-white p-5 shadow-[0_14px_34px_rgba(20,10,20,0.07)]"
                  >
                    <p className="mb-0 text-[0.95rem] text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bg-secondary/45 py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[680px]">
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-text-secondary">Explore more</p>
                <h2 className="mb-3">Compare other product families</h2>
                <p className="mb-0 text-text-secondary">
                  If this is close but not quite the right fit, explore the rest of the range and compare shelter, control and enclosure options.
                </p>
              </div>
              <Link href="/products" className="btn w-full text-center md:w-auto">
                View all products
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {moreProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="elevate-card group overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_18px_42px_rgba(20,10,20,0.08)]"
                >
                  <div className="relative h-[220px]">
                    <Image src={item.cardImage} alt={item.cardAlt} fill className="product-img transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-[1.35rem]">{item.title}</h3>
                    <p className="mb-0 text-[0.92rem] text-text-secondary">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div
              className="rounded-2xl border border-white/20 p-8 text-center text-white shadow-[0_24px_55px_rgba(0,0,0,0.25)] md:p-12"
              style={{ background: "linear-gradient(125deg, #2e0d2e 0%, #190819 60%, #130613 100%)" }}
            >
              <h2 className="mx-auto mb-4 max-w-[680px] text-white">Book a free site survey and shape the right solution</h2>
              <p className="mx-auto mb-8 max-w-[620px] text-white/82">
                Tell us about the site, how you want to use the space and the level of shelter or control you need. We will guide you toward the best-fit system.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn text-center">
                  Request a quote
                </Link>
                <Link href="tel:07971917201" className="btn text-center" style={{ backgroundColor: "#ffffff", color: "#280028" }}>
                  Call 07971 917201
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
