import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectEnquiryForm from "@/components/ProjectEnquiryForm";
import ProjectGallery from "@/components/ProjectGallery";
import { featuredWorks } from "@/data/featuredWorks";
import { getProject, getProjectSlugs } from "@/data/projects";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project | Smart Awnings & Canopies" };
  }
  return {
    title: `${project.title} | Case study | Smart Awnings & Canopies`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const overviewSrc =
    project.overviewImage ?? project.gallery[1]?.src ?? project.gallery[0].src;
  const overviewAlt =
    project.overviewAlt ?? project.gallery[1]?.alt ?? project.gallery[0].alt;

  return (
    <>
      <Header />
      <main className="bg-bg-primary">
        {/* Hero */}
        <section className="relative flex min-h-[58vh] md:min-h-[62vh] items-end justify-center overflow-hidden">
          <div className="hero-overlay absolute inset-0 z-1">
            <Image
              src={project.heroImage}
              alt={project.heroAlt}
              fill
              priority
              className="product-img object-top"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 z-2 bg-linear-to-t from-[#1a081a]/92 via-[#1a081a]/35 to-transparent" />
          <div className="container relative z-3 mx-auto max-w-4xl px-4 pb-10 pt-36 text-center text-white md:pb-14 md:pt-40">
            <p className="mb-3 text-[0.68rem] md:text-[0.75rem] tracking-[0.16em] uppercase text-white/75">
              Case study, {project.category}
            </p>
            <h1 className="mb-3 text-white text-[clamp(2rem,5vw,3.25rem)] leading-[1.1]">{project.title}</h1>
            <p className="mx-auto mb-4 max-w-2xl text-lg font-light text-white/90 md:text-xl">{project.tagline}</p>
            <p className="mb-0 text-[0.9rem] text-white/70">
              {project.location}, {project.year}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="#project-gallery" className="btn text-center">
                View gallery
              </Link>
              <Link
                href="#project-enquiry"
                className="inline-flex items-center justify-center rounded border border-white/70 px-5 py-3 text-[0.78rem] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/12"
              >
                Enquire about this
              </Link>
            </div>
          </div>
        </section>

        {/* Intro + lead image */}
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
              <div className="relative h-[320px] sm:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden border border-black/10 shadow-[0_20px_50px_rgba(26,8,26,0.12)]">
                <Image
                  src={overviewSrc}
                  alt={overviewAlt}
                  fill
                  className="product-img"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-accent">Overview</p>
                <h2 className="mb-4">The project</h2>
                <p className="text-text-secondary">{project.summary}</p>
                {project.story.map((paragraph, i) => (
                  <p key={i} className="text-text-secondary">
                    {paragraph}
                  </p>
                ))}
                <Link href="/contact" className="btn mt-2">
                  Make an enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          id="project-gallery"
          className="relative overflow-hidden py-16 md:py-24"
          style={{ background: "radial-gradient(120% 120% at 0% 0%, #3d0d3d 0%, #1a081a 55%, #120412 100%)" }}
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#80387f]/20 blur-[130px]" />
          <div className="container relative z-1 max-w-7xl">
            <div className="section-animate mx-auto mb-10 max-w-[720px] text-center md:mb-14">
              <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Gallery</p>
              <h2 className="mb-3 text-white">On site</h2>
              <p className="mb-0 text-white/75">
                Browse the full set in the slider. Open any image for a full-screen view and use the arrows or keyboard to move between photos.
              </p>
            </div>

            <ProjectGallery images={project.gallery} />
          </div>
        </section>

        {/* USPs */}
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div className="text-center max-w-[640px] mx-auto mb-10 md:mb-14">
              <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-accent">Why this works</p>
              <h2 className="mb-3">What made the difference</h2>
              <p className="mb-0 text-text-secondary">
                Principles we apply on every commission: clarity, craft, and long-term performance.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {project.usps.map((usp) => (
                <div
                  key={usp.title}
                  className="elevate-card rounded-xl border border-black/10 bg-bg-secondary/55 p-5 md:p-6 flex gap-4"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent mt-0.5">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[1.2rem] md:text-[1.35rem] mb-2">{usp.title}</h3>
                    <p className="mb-0 text-[0.95rem] text-text-secondary">{usp.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry: compact header + centred card (no side image) */}
        <section id="project-enquiry" className="relative pt-6 pb-20 md:pt-8 md:pb-24 lg:pb-28">
          <div
            className="absolute inset-x-0 top-0 h-[min(72vw,460px)] md:h-[340px] lg:h-[320px]"
            aria-hidden
            style={{ background: "linear-gradient(165deg, #3d0d3d 0%, #1a081a 45%, #120412 100%)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-[#80387f]/25 blur-[100px]" aria-hidden />

          <div className="container relative z-1 max-w-3xl px-4">
            <div className="relative z-20 mb-8 text-center text-white md:mb-10">
              <p className="mb-2 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Enquiry</p>
              <h2 className="mb-3 text-[clamp(1.65rem,4vw,2.25rem)] text-white">Discuss a similar installation</h2>
              <p className="mx-auto mb-0 max-w-xl text-[0.95rem] text-white/80">
                Mention <strong className="font-medium text-white">{project.title}</strong> when you write. We will pick up context from this case study and reply with sensible next steps.
              </p>
            </div>

            <div className="relative z-10 -mt-1 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_28px_60px_rgba(24,10,24,0.15)] sm:-mt-2 md:-mt-3 md:p-10">
              <div className="mb-8 flex flex-col gap-4 border-b border-black/8 pb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="mb-1 text-[0.68rem] uppercase tracking-[0.14em] text-text-secondary">Prefer to talk first?</p>
                  <a href="tel:07971917201" className="font-heading text-[1.35rem] text-text-primary transition-colors hover:text-accent md:text-[1.5rem]">
                    07971 917201
                  </a>
                </div>
                <div className="sm:text-right">
                  <p className="mb-1 text-[0.68rem] uppercase tracking-[0.14em] text-text-secondary">Email</p>
                  <a href="mailto:info@smartawnings.co.uk" className="text-[0.95rem] font-medium text-accent underline-offset-4 hover:underline">
                    info@smartawnings.co.uk
                  </a>
                </div>
              </div>
              <ProjectEnquiryForm projectTitle={project.title} />
            </div>
          </div>
        </section>

        {/* Recent works: same block as homepage */}
        <section className="py-20 md:py-28 bg-bg-secondary/55">
          <div className="container max-w-7xl">
            <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[680px]">
                <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-text-secondary">Recent Works</p>
                <h2 className="mb-3">Signature installations with lasting impact</h2>
                <p className="mb-0">A selection of recent projects across homes, hospitality and commercial spaces.</p>
              </div>
              <Link href="/contact" className="btn w-full shrink-0 text-center md:w-auto">
                Discuss Your Project
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {featuredWorks.map((work, index) => (
                <Link
                  key={`${work.href}-${index}`}
                  href={work.href}
                  className="elevate-card group block overflow-hidden rounded-xl border border-black/8 bg-white shadow-[0_20px_45px_rgba(30,15,30,0.1)] transition-shadow duration-300 hover:shadow-[0_24px_50px_rgba(30,15,30,0.14)]"
                >
                  <article>
                    <div className="relative h-[250px]">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="product-img transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 text-[1.35rem]">{work.title}</h3>
                      <p className="mb-0 text-[0.92rem] text-text-secondary">{work.detail}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl">
            <div
              className="rounded-2xl border border-white/20 p-8 md:p-12 text-white text-center shadow-[0_24px_55px_rgba(0,0,0,0.25)]"
              style={{ background: "linear-gradient(125deg, #2e0d2e 0%, #190819 60%, #130613 100%)" }}
            >
              <h2 className="mb-4 text-white max-w-[640px] mx-auto">Ready to shape your outdoor space?</h2>
              <p className="mb-8 text-white/85 max-w-[560px] mx-auto">
                Book a site survey, explore finance options, or speak to the team about products that match this level of finish.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn text-center">
                  Request a quote
                </Link>
                <Link href="/contact" className="btn text-center" style={{ backgroundColor: "#ffffff", color: "#280028" }}>
                  Contact us
                </Link>
                <Link href="tel:07971917201" className="btn text-center">
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
