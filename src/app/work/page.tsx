import { getProjects } from "@/lib/projects";
import WorkContent from "@/components/work/WorkContent";

export default async function WorkPage() {
    const projects = await getProjects();
    return <WorkContent projects={projects} />;
}
