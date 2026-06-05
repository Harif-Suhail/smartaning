import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Smart Awnings & Canopies",
    description:
      "Contact Smart Awnings & Canopies for site surveys, quotations, finance options, repairs and aftercare. UK-wide installation from the South West.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg-primary pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div>
              <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Contact</p>
              <h1 className="mb-4 max-w-[540px]">Let&apos;s plan your project</h1>
              <p className="mb-8 max-w-[520px] text-text-secondary">
                Whether you need a survey, a tailored quote, finance information, repairs or aftercare, send a message or call. We install nationwide and are happy to advise.
              </p>

              <ul className="mb-10 max-w-[520px] space-y-3 text-[0.95rem] text-text-secondary">
                {[
                  "Site surveys and design-led recommendations",
                  "Clear quotations and product options",
                  "Finance introductions through authorised UK partners",
                  "Repairs, parts and ongoing support",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="tel:07971917201" className="btn w-full text-center sm:w-auto">
                  Call 07971 917201
                </a>
                <a
                  href="mailto:info@smartawnings.co.uk"
                  className="btn w-full text-center sm:w-auto"
                  style={{ backgroundColor: '#ffffff', color: '#280028' }}
                >
                  Email our team
                </a>
              </div>

              <p className="mt-10 max-w-[480px] text-[0.9rem] text-text-secondary">
                Prefer to browse completed work first?{' '}
                <Link href="/projects" className="font-medium text-accent underline-offset-4 hover:underline">
                  View case studies
                </Link>
                {' '}or return to the{' '}
                <Link href="/" className="font-medium text-accent underline-offset-4 hover:underline">
                  homepage
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_24px_55px_rgba(24,12,24,0.1)] md:p-8 lg:p-10">
              <p className="mb-2 text-[0.72rem] uppercase tracking-[0.16em] text-accent">Message</p>
              <h2 className="mb-6 text-[1.35rem] md:text-[1.5rem]">Send us a note</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
