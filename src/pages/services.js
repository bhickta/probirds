import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ServicesPage() {
  return (
    <>
      <Seo title="Services" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="services" heading="Services" />
      </Page>
    </>
  );
}