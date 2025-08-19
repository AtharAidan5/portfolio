
import { NavMenu } from "@/components/nav-menu" 
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ClientsSection } from "@/components/clients-section";

export default function Home() {
  return (
    <div>
      <NavMenu/>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ClientsSection/>
    </div>
  );
}
