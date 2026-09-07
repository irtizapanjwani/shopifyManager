import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `How ${siteConfig.name} collects and uses enquiry data from this website.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        {siteConfig.name} (“we”) collects the name, email, phone number, budget range, and
        project details you submit through our contact form so we can respond to your enquiry.
      </p>
      <p>
        Form submissions are delivered to{" "}
        <a className="font-semibold text-[#008060] hover:underline" href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
        . We do not sell this information. We retain enquiry records only as long as needed to
        manage the conversation and any resulting engagement.
      </p>
      <p>
        You may request access, correction, or deletion of your enquiry data by emailing{" "}
        {siteConfig.contactEmail}. This policy applies to {siteConfig.url} and related
        marketing pages operated by {siteConfig.name}.
      </p>
    </LegalPage>
  );
}
