import type { Route } from './+types/details';
import type { Project } from '~/types';

export async function clientLoader({ request, params }): Promise<Project> {
  const res = await fetch(`http://localhost:8000/project/${params.id}`);

  if (!res.ok) throw new Response('Project not found', { status: 404 });

  const project: Project = await res.json();
  return project;
}

const ProjectDetailsPage = () => {
  return <>Project Details</>;
};

export default ProjectDetailsPage;
