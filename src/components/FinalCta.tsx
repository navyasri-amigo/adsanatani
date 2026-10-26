import React, { useState } from 'react';
import { ArrowRightIcon, CheckCircle2Icon } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get('firstName') || '');
    const lastName = String(data.get('lastName') || '');
    const email = String(data.get('email') || '');
    const description = String(data.get('description') || '');

    const subject = encodeURIComponent(
      `Website Inquiry from ${firstName} ${lastName}`
    );

    const body = encodeURIComponent(
      `First Name: ${firstName}\n` +
      `Last Name: ${lastName}\n` +
      `Email: ${email}\n\n` +
      `Description:\n${description}`
    );

    window.location.href =
      `mailto:info@adsanatani.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    form.reset();
  };

  const inputClass =
    'w-full rounded-xl border border-cream/20 bg-cream/[0.04] px-4 py-3.5 text-cream outline-none transition-colors placeholder:text-cream/35 focus:border-gold';

  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative isolate bg-charcoal text-cream"
    >
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-[90px] w-full -translate-y-[calc(100%-1px)] md:h-[160px]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 200 L0 190 C 520 182, 980 130, 1440 0 L1440 200 Z"
          fill="#20201E"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
        <Reveal>
          <h2
            id="cta-heading"
            className="font-serif text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92]"
          >
            Let's Grow{' '}
            <span className="italic text-gold">Together.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal delay={0.06}>
              <p className="max-w-md text-lg leading-relaxed text-cream/75">
                Tell us what you're building. Our partnerships team
                replies within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4 border-t border-cream/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Get in touch
                </p>

                <a
                  href="mailto:info@adsanatani.com"
                  className="inline-flex items-center gap-2 break-all text-base text-cream transition-colors hover:text-gold"
                >
                  info@adsanatani.com
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            {/* <Reveal delay={0.12} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:advertisers@adsanatani.com?subject=Advertise%20with%20AdSanatani"
                className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-[#F7D266] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Advertise With Us
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="mailto:publishers@adsanatani.com?subject=Become%20a%20Publisher"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition-colors duration-150 hover:border-cream hover:bg-cream/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Become a Publisher
              </a>
            </Reveal> */}
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-cream/15 bg-cream/[0.03] p-5 sm:p-8">
              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Contact form
                </p>
                <h3 className="mt-2 font-serif text-3xl text-cream">
                  Tell us about your project
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  Fill in your details and tell us how we can work together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm text-cream/80"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="First name"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm text-cream/80"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Last name"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contactEmail"
                    className="mb-2 block text-sm text-cream/80"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contactEmail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm text-cream/80"
                  >
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Tell us about your goals, campaign, audience, or partnership..."
                    required
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-[#F7D266] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-auto"
                >
                  Submit Inquiry
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </button>

                {submitted && (
                  <p
                    role="status"
                    className="flex items-center gap-2 text-sm text-cream/70"
                  >
                    <CheckCircle2Icon
                      className="h-4 w-4 text-gold"
                      aria-hidden="true"
                    />
                    Your email app should open with your inquiry details.
                    Please send the email to complete your submission.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
