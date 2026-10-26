import { Link } from "react-router-dom";

export function PrivacyPolicy() {
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
          Privacy Policy
        </h1>

        <p className="mt-5 leading-8 text-stone-600">
          This Privacy Policy explains how AdSanatani may collect, use, and
          protect information when visitors use our website and services.
        </p>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="mt-3 leading-7 text-stone-600">
              We may collect information submitted through contact forms,
              including your name, business email, company name, and inquiry.
              Technical usage information may also be collected where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Information</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Information may be used to respond to inquiries, provide services,
              improve our website, maintain security, and meet legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Cookies and Analytics</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Cookies or analytics technologies may be used if enabled on our
              website. Visitors can manage cookies through browser settings
              and any consent controls provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Information Sharing</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Information may be shared with service providers, relevant
              business partners, or authorities where legally required,
              subject to applicable privacy requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Security and Retention</h2>
            <p className="mt-3 leading-7 text-stone-600">
              We take reasonable measures to protect information and retain it
              only as needed for legitimate business or legal purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p className="mt-3 leading-7 text-stone-600">
              Depending on applicable law, you may have rights to access,
              correct, or request deletion of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Contact</h2>
            <p className="mt-3 leading-7 text-stone-600">
              For privacy inquiries, please use the official contact details
              published on the AdSanatani website.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6">
          <Link to="/terms" className="text-orange-700 hover:underline">
            Read Terms &amp; Conditions →
          </Link>
        </div>
      </div>
    </main>
  );
}