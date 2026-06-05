import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { featuredWorks } from "@/data/featuredWorks";
import { getAllProducts } from "@/data/products";

export default function Home() {
  const products = getAllProducts();

  const galleryImages = [
    { src: "/images/retractable-roof (1).jpg", alt: "Retractable roof installation with sky view", size: "large" },
    { src: "/images/lourve-roof.JPG", alt: "Bioclimatic louvre roof detail", size: "medium" },
    { src: "/images/awning-home.jpg", alt: "Modern awning over patio seating", size: "medium" },
    { src: "/images/glass-room (1).jpg", alt: "Framed glass room extension", size: "large" },
    { src: "/images/about.jpg", alt: "Outdoor living space with premium cover", size: "medium" },
    { src: "/images/outdoor-space-home.jpg", alt: "Luxury landscaped terrace with shelter", size: "medium" },
    { src: "/images/retractable-roof (1).jpg", alt: "Premium retractable roof with evening ambience", size: "medium" },
  ];

  const faqs = [
    {
      question: "Do you cover the whole UK?",
      answer: "Yes. We are based in the South West and install nationwide.",
    },
    {
      question: "Can you help me choose the right system?",
      answer: "Yes. We start with a consultation and a site survey, then recommend the best-fit solution and provide a clear quote.",
    },
    {
      question: "Is planning permission required?",
      answer: "It depends on the product and location. We provide guidance and recommend checking with your local council for larger structures.",
    },
    {
      question: "Do you offer repairs and maintenance?",
      answer: "Yes. We can repair and refurbish many products and source parts for a wide range of systems.",
    },
  ];

  const stats = [
    { value: "2600+", label: "Projects Delivered" },
    { value: "137", label: "Commercial Sites" },
    { value: "09", label: "Specialist Teams" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const trustMarks = [
    "Homes & Estates",
    "Hospitality Venues",
    "Independent Retail",
    "Architects & Designers",
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSlider />

        {/* About / Intro Section */}
        <section id="expertise" className="py-20 md:py-32">
          <div className="container max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <div className="font-heading text-[5rem] md:text-[8rem] leading-none text-accent opacity-20 -mb-10 md:-mb-16">05+</div>
              <h2 className="relative z-2">Years Experienced<br />About Us</h2>
              <p>
                We help you get the right level of shade, shelter and privacy so your patio or terrace works in sun, wind and rain. Every project starts with a proper site survey and clear recommendations, then we install to a high standard with aftercare available.
              </p>
              <p>
                Not sure what you need? Visit our services to see how we work.
              </p>
              <Link href="/services.html" className="btn btn-outline">Our Services</Link>
            </div>
            <div className="relative h-[320px] sm:h-[400px] lg:h-[600px] rounded overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Our Expertise"
                fill
                className="product-img"
              />
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="relative overflow-hidden py-20 md:py-32 text-bg-secondary"
          style={{ background: "radial-gradient(120% 120% at 0% 0%, #3d0d3d 0%, #1a081a 55%, #120412 100%)" }}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#80387f]/20 blur-[130px]" />
          <div className="container max-w-7xl">
            <div className="section-animate text-center max-w-[760px] mx-auto mb-10 md:mb-16">
              <p className="mb-4 tracking-[0.18em] uppercase text-xs md:text-sm text-white/70">Curated Product Collection</p>
              <h2 className="text-white">Crafted systems for timeless outdoor living</h2>
              <p className="mb-0 text-white/75">Designed, surveyed and installed by specialists with a focus on clean detailing and long-term reliability.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 xl:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="product-card group relative min-h-[370px] md:min-h-[460px] overflow-hidden rounded-2xl border border-white/15 shadow-[0_24px_55px_rgba(0,0,0,0.35)]"
                >
                  <Image
                    src={product.cardImage}
                    alt={product.cardAlt}
                    fill
                    className="product-img"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#160616]/95 via-[#160616]/40 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.65rem] tracking-[0.16em] uppercase text-white/90 backdrop-blur-sm md:left-6 md:top-6">
                    Bespoke system
                  </span>

                  <div className="absolute left-3 right-3 bottom-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:left-6 md:right-6 md:bottom-6 md:p-6">
                    <h3 className="mb-2 text-[1.35rem] md:text-[1.55rem] text-white">{product.title}</h3>
                    <p className="product-desc mb-5 text-white/80 text-[0.92rem] md:text-[1rem]">{product.description}</p>
                    <span className="inline-flex items-center gap-2 text-[0.72rem] md:text-[0.78rem] tracking-[0.14em] uppercase text-white/90">
                      Explore collection
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-30 bg-bg-secondary/35">
          <div className="container max-w-7xl grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
            <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-[0_18px_42px_rgba(28,15,28,0.08)]">
              <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-text-secondary">Our Process</p>
              <h2 className="mb-4">How it works</h2>
              <p>Every installation follows a clear route from concept to handover, so you always know what happens next.</p>
              <p className="mb-6">We keep updates transparent, timings realistic and finish quality exceptionally high.</p>
              <Link href="/contact" className="btn w-full sm:w-auto text-center">Start Your Project</Link>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                {
                  step: "01",
                  title: "Consultation & Advice",
                  description: "We review your space, priorities and style direction, then recommend the right system and options.",
                },
                {
                  step: "02",
                  title: "Site Survey & Design",
                  description: "A full technical survey confirms measurements, fixing points and finish choices before manufacture.",
                },
                {
                  step: "03",
                  title: "Precision Installation",
                  description: "Specialist teams install and test the system carefully, with clean detailing and minimal disruption.",
                },
                {
                  step: "04",
                  title: "Handover & Aftercare",
                  description: "We walk you through operation and provide ongoing support to maintain long-term performance.",
                },
              ].map((item) => (
                <article key={item.step} className="relative overflow-hidden rounded-xl border border-black/10 bg-bg-primary p-5 md:p-6 shadow-[0_12px_30px_rgba(24,10,24,0.08)]">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white text-[0.75rem] tracking-[0.12em]">{item.step}</span>
                  <h3 className="mb-3 text-[1.28rem]">{item.title}</h3>
                  <p className="mb-0 text-text-secondary text-[0.95rem]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-7xl">
            <div className="section-animate text-center max-w-[860px] mx-auto mb-10 md:mb-14">
              <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-accent">Gallery</p>
              <h2 className="mb-4">Inspiration from recent installations</h2>
              <p className="mb-0">A curated look at projects delivered for homes, terraces and commercial venues across the UK.</p>
            </div>

            <div className="md:hidden overflow-x-auto snap-x snap-mandatory pl-2 pr-1">
              <div className="flex gap-4 w-max pb-2">
                {galleryImages.map((image, index) => (
                  <article
                    key={`mobile-${image.src}-${index}`}
                    className="elevate-card snap-start relative h-[250px] w-[84vw] max-w-[360px] overflow-hidden rounded-xl border border-black/10 shadow-[0_18px_40px_rgba(20,10,20,0.12)]"
                  >
                    <div className="relative h-full">
                      <Image src={image.src} alt={image.alt} fill className="product-img" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-70" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-start">
              {galleryImages.map((image, index) => (
                <article
                  key={`${image.src}-${index}`}
                  className={`elevate-card group relative self-start h-[240px] md:h-[270px] overflow-hidden rounded-xl border border-black/10 shadow-[0_18px_40px_rgba(20,10,20,0.12)] ${
                    image.size === "large" ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="relative h-full">
                    <Image src={image.src} alt={image.alt} fill className="product-img" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-70" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          className="relative overflow-hidden py-12 md:py-16 text-white"
          style={{ background: "linear-gradient(120deg, #5f2a6a 0%, #80387f 50%, #9a54a0 100%)" }}
        >
          <div className="pointer-events-none absolute -top-16 right-8 h-44 w-44 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-6 h-48 w-48 rounded-full bg-[#f0c4f2]/20 blur-3xl" />

          <div className="container max-w-7xl">
            <div className="text-center mb-8 md:mb-10">
              <p className="mb-2 text-[0.68rem] md:text-[0.75rem] tracking-[0.16em] uppercase text-white/80">Why clients choose us</p>
              <h3 className="mb-0 text-white text-[1.65rem] md:text-[2.1rem]">Proven expertise with premium delivery</h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-xl border border-white/25 bg-white/12 backdrop-blur-sm p-4 md:p-5 text-center shadow-[0_12px_25px_rgba(26,8,26,0.2)]"
                >
                  <p className="mb-1 font-heading text-[2.1rem] md:text-[2.6rem] leading-none text-white">{stat.value}</p>
                  <p className="mb-0 text-[0.7rem] md:text-[0.8rem] tracking-[0.13em] uppercase text-white/88">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Finishing Touches Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-7xl grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center">
            <div className="relative h-[340px] md:h-[430px] rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_45px_rgba(30,15,30,0.12)]">
              <Image src="/images/glass-room (1).jpg" alt="Premium finishing details" fill className="product-img" />
            </div>
            <div>
              <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-text-secondary">Design Details</p>
              <h2 className="mb-4">Add the finishing touches</h2>
              <p>Elevate your space with integrated lighting, discreet heating, side screens and automation that blends seamlessly with your architecture.</p>
              <p className="mb-6">Each upgrade is selected to preserve a clean, traditional-luxury feel while improving comfort throughout the seasons.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {["Integrated lighting", "Heating options", "Wind/sun automation", "Premium material finishes"].map((item) => (
                  <div key={item} className="rounded-lg border border-black/10 bg-bg-secondary/55 px-4 py-3 text-[0.9rem] flex items-center gap-2.5">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <Link href="#survey" className="btn">Book a Design Survey</Link>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-20 md:py-28 bg-bg-secondary/55">
          <div className="container max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
              <div className="max-w-[680px]">
                <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-text-secondary">Recent Works</p>
                <h2 className="mb-3">Signature installations with lasting impact</h2>
                <p className="mb-0">A selection of recent projects across homes, hospitality and commercial spaces.</p>
              </div>
              <Link href="/contact" className="btn w-full md:w-auto text-center">Discuss Your Project</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {featuredWorks.map((work, index) => (
                <Link
                  key={`${work.href}-${index}`}
                  href={work.href}
                  className="elevate-card group block rounded-xl overflow-hidden border border-black/8 bg-white shadow-[0_20px_45px_rgba(30,15,30,0.1)] transition-shadow duration-300 hover:shadow-[0_24px_50px_rgba(30,15,30,0.14)]"
                >
                  <article>
                    <div className="relative h-[250px]">
                      <Image src={work.image} alt={work.title} fill className="product-img transition-transform duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[1.35rem] mb-2">{work.title}</h3>
                      <p className="mb-0 text-[0.92rem] text-text-secondary">{work.detail}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 md:py-20 bg-bg-secondary/45">
          <div className="container max-w-7xl text-center">
            <div className="section-animate max-w-[980px] mx-auto mb-10 md:mb-14">
              <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-accent">Trusted Across The UK</p>
              <h2 className="mb-4">Built for homes and businesses</h2>
              <p className="mb-0">
                For homes, we make outdoor areas easier to use and more comfortable. For hospitality and venues, we help turn outdoor space into reliable covers so seating areas stay open for longer. For elegant enclosure and weather protection, explore <Link href="/products/glass-roof-systems" className="text-accent hover:opacity-85">glass roof systems</Link>. For flexible cover on larger areas, compare <Link href="/products/large-umbrellas" className="text-accent hover:opacity-85">large umbrellas</Link> with <Link href="/products/bioclimatic-louvres" className="text-accent hover:opacity-85">bioclimatic pergolas</Link>.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {trustMarks.map((mark) => (
                <div key={mark} className="elevate-card rounded-lg border border-black/10 bg-white px-3 py-4 text-[0.86rem] md:text-[0.95rem]">
                  {mark}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Feature + FAQs Section */}
        <section id="faqs" className="py-20 md:py-28">
          <div className="container max-w-7xl">
            <div className="section-animate rounded-2xl border border-black/8 bg-bg-primary p-4 md:p-6 shadow-[0_24px_55px_rgba(24,12,24,0.08)] mb-16 md:mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-6 md:gap-8 items-stretch">
                <div className="relative min-h-[260px] md:min-h-[340px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/awning-home.jpg"
                    alt="Finance and support options for premium awning installations"
                    fill
                    className="product-img"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#180918]/80 via-[#180918]/20 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 rounded-lg border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">
                    <p className="mb-0 text-white text-[0.68rem] tracking-[0.15em] uppercase">Finance options available</p>
                  </div>
                </div>

                <div className="rounded-xl border border-black/8 bg-white p-5 md:p-7">
                  <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-accent">Support</p>
                  <h2 className="mb-4 max-w-[560px]">Finance, repairs and ongoing support</h2>
                  <p>If you want to spread the cost, we can introduce you to finance partners who are authorised and regulated to provide finance in the UK.</p>
                  <p>If you already have an installation that needs attention, we can repair and refurbish many systems and source parts across a wide range of products.</p>
                  <Link href="/services.html" className="btn mt-1">Our Services</Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
              <div>
                <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-accent">Questions</p>
                <h2 className="mb-4">FAQs</h2>
                <p className="mb-0">Answers to the most common questions about coverage, planning requirements, choosing the right system and ongoing maintenance.</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {faqs.map((faq, index) => (
                  <details
                    key={faq.question}
                  className="elevate-card group rounded-xl border border-black/10 bg-bg-primary px-5 py-4 md:px-6 md:py-5"
                    open={index === 0}
                  >
                    <summary className="list-none cursor-pointer flex items-center justify-between gap-4">
                      <h4 className="mb-0 text-[1.05rem] md:text-[1.18rem]">{faq.question}</h4>
                      <span className="text-accent text-[1.2rem] leading-none transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mb-0 mt-3 text-text-secondary pr-6">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="quote" className="py-20 md:py-28">
          <div className="container max-w-7xl">
            <div className="rounded-2xl border border-white/20 p-6 md:p-10 text-white shadow-[0_24px_55px_rgba(0,0,0,0.28)]" style={{ background: "linear-gradient(125deg, #2e0d2e 0%, #190819 60%, #130613 100%)" }}>
              <div id="survey" />
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-10 items-center">
                <div>
                  <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-white/70">Contact</p>
                  <h2 className="mb-4 text-white">Planning a project? Let&apos;s create the right solution.</h2>
                  <p className="mb-0 text-white/80">Tell us about your space and goals. We&apos;ll recommend the most suitable system and arrange a tailored quotation.</p>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <Link href="tel:07971917201" className="btn text-center">Call 07971 917201</Link>
                  <Link href="mailto:info@smartawnings.co.uk" className="btn text-center" style={{ backgroundColor: "#ffffff", color: "#280028" }}>Email Our Team</Link>
                  <p className="mb-0 text-center text-white/80 text-[0.9rem] mt-2">Prefer a site survey first? We can arrange that in your first call.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
