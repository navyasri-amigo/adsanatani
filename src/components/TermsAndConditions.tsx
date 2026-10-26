import { Link } from "react-router-dom";

export function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#faf8f4] px-6 py-20 text-[#24211d]">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="text-orange-700 hover:underline">
          ← Back to Home
        </Link>

        <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-orange-700">
          AdSanatani · Legal
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Terms &amp; Conditions
        </h1>

        <p className="mt-5 leading-8 text-stone-600">
          These terms describe the general conditions for using the
          AdSanatani website and its advertising and publisher services.
        </p>

        <section className="mt-12 space-y-8">
          <article>
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-7 text-stone-600">
              By using this website, you agree to these terms. If you do not
              agree, please stop using the website.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">2. Our Services</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Service availability and scope may depend on eligibility,
              approval, and separate agreements.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Users must provide accurate information and comply with
              applicable laws, intellectual property rights, and relevant
              advertising and email marketing requirements.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">4. Prohibited Activities</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Do not use the website for unlawful activity, attempt
              unauthorized access, distribute malicious code, or interfere
              with the website or its users.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Website branding, text, graphics, and design elements may not
              be reused without appropriate permission from their owners.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">6. Disclaimers</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Website content is provided for general information. We do not
              guarantee uninterrupted availability or specific marketing
              results. Applicable legal rights remain unaffected.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-semibold">7. Changes and Contact</h2>
            <p className="mt-3 leading-7 text-stone-600">
              These terms may be updated when our services or legal
              requirements change. For questions, use the official contact
              details published on the AdSanatani website.
            </p>
          </article>
        </section>

        <div className="mt-12 border-t border-stone-200 pt-6">
          <Link to="/privacy-policy" className="text-orange-700 hover:underline">
            ← Read Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}