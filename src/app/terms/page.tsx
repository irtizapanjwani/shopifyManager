import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms governing use of the ${siteConfig.name} website and enquiry process.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        This website is operated by {siteConfig.name}. Content is provided for general
        information about our Shopify design, development, and marketing services. It is not a
        binding proposal until we issue a written statement of work.
      </p>
      <p>
        Submitting the contact form does not create a client relationship. Project scope,
        fees, and timelines are agreed separately. Shopify and related marks belong to their
        respective owners. {siteConfig.name} is an independent agency and is not affiliated
        with Shopify Inc.
      </p>
      <p>
        Questions about these terms can be sent to{" "}
        <a className="font-semibold text-[#008060] hover:underline" href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}
