import { Hero } from "@/components/ui/Hero";
import { Stats } from "@/components/ui/Stats";
import { SelectedProjects } from "@/components/ui/SelectedProjects";
import { Contact } from "@/components/ui/Contact";
import { getSiteConfig } from "@/lib/config-server";
import { getSelectedProjects } from "@/lib/projects";

export default async function Home() {
  const config = getSiteConfig();
  const projects = await getSelectedProjects();

  return (
    <div className="flex flex-col gap-12 pb-20">
      <Hero status={config.status} />
      <Stats />
      <SelectedProjects projects={projects} />
      <Contact status={config.status} />
    </div>
  );
}
