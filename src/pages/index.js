import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Probirds | Expert Business & Tax Services: GST, Registrations, International Taxation & More" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} /> */}
        <AboutSection sectionId="about" heading="About Probirds" />
        <ProjectsSection sectionId="features" heading="Our Services" />
        <InterestsSection sectionId="details" heading="" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
