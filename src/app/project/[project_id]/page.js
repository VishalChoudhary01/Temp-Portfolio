
import ProjectDetailPage from "./ProjectDetailPage_new";

export default async function Page({ params }) {
  const { project_id } = await params;
  const projectId = parseInt(project_id);
  
  return <ProjectDetailPage projectId={projectId} />;
}