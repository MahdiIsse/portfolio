import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 mt-16 mb-20">
      <section id="intro">
        <IntroSection />
      </section>
      <Separator />
      <section id="skills">
        <SkillSection />
      </section>
      <Separator />
      <section id="projects">
        <ProjectSection />
      </section>
      <Separator />
      <section id="experience">
        <ExperienceSection />
      </section>
      <Separator />
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
