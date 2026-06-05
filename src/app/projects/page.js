import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/data/projects";

export const metadata = {
  title: "Projects | Smart Awnings & Canopies",
  description: "Case studies and completed installations from Smart Awnings & Canopies.",
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg-primary pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container max-w-7xl">
          <p className="mb-3 uppercase tracking-[0.16em] text-[0.72rem] text-accent">Case studies</p>
          <h1 className="mb-4 max-w-[640px]">Projects</h1>
          <p className="mb-12 max-w-[560px] text-text-secondary">
            Explore completed work in detail: imagery, process, and how each solution fits the site.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="elevate-card group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_40px_rgba(20,10,20,0.08)]"
              >
                <div className="relative h-[220px] md:h-[260px]">
                  <Image
                    src={project.heroImage}
                    alt={project.heroAlt}
                    fill
                    className="product-img transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1a081a]/75 via-[#1a081a]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <p className="mb-1 text-[0.65rem] tracking-[0.14em] uppercase text-white/80">{project.location}, {project.year}</p>
                    <p className="mb-0 font-heading text-[1.45rem] md:text-[1.65rem] text-white">{project.title}</p>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="mb-0 text-[0.95rem] text-text-secondary line-clamp-2">{project.summary}</p>
                  <span className="mt-4 inline-block text-[0.72rem] font-medium uppercase tracking-[0.12em] text-accent">
                    View case study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
