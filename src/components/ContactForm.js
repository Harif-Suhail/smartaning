'use client';

import { useState } from 'react';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/info@smartawnings.co.uk';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email) {
      setStatus('validation');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || '(not given)',
          message: message || '(not given)',
          _subject: 'Website contact, Smart Awnings & Canopies',
          _captcha: false,
        }),
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(payload?.message || 'Request failed');
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('send_error');
    }
  }

  const inputClass =
    'w-full rounded border border-black/12 bg-bg-primary px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-accent focus:ring-1 focus:ring-accent/25';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-busy={status === 'submitting'}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-[0.78rem] font-medium tracking-wide text-text-secondary">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-[0.78rem] font-medium tracking-wide text-text-secondary">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-[0.78rem] font-medium tracking-wide text-text-secondary">
          Phone <span className="font-light text-text-secondary/70">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="07900 000000"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-[0.78rem] font-medium tracking-wide text-text-secondary">
          How can we help?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          className={inputClass}
          placeholder="Tell us about your space, what you are looking for, and any timings we should know about…"
        />
      </div>
      {status === 'validation' && (
        <p className="mb-0 text-[0.9rem] text-accent" role="alert">
          Please add your name and email so we can reply.
        </p>
      )}
      {status === 'success' && (
        <p className="mb-0 text-[0.9rem] text-text-primary" role="status">
          Thank you. We&apos;ve received your message and will get back to you shortly.
        </p>
      )}
      {status === 'send_error' && (
        <p className="mb-0 text-[0.9rem] text-accent" role="alert">
          Something went wrong sending your message. Please email{' '}
          <a href="mailto:info@smartawnings.co.uk" className="underline underline-offset-2">
            info@smartawnings.co.uk
          </a>{' '}
          or call <a href="tel:07971917201" className="underline underline-offset-2">07971 917201</a>.
        </p>
      )}
      <button type="submit" className="btn w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
      <p className="mb-0 text-[0.75rem] leading-relaxed text-text-secondary">
        We use your details only to respond to this enquiry and any direct follow-up. Processing is in line with UK GDPR; we do not sell your data. You can ask for a copy of what we hold or request deletion at any time by contacting us.
      </p>
    </form>
  );
}
