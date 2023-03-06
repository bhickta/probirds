import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function TeamPage() {
  return (
    <>
      <Seo title="Team" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="team" heading="Team" />
      </Page>
    </>
  );
}