import type { Route } from './+types/index';
import type { Project } from '~/types';
import ProjectCard from '~/components/ProjectCard';
import { useState } from 'react';
import { index } from '@react-router/dev/routes';

import Pagination from '~/components/Pagination';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http:/localhost:8000/projects');
  const data = await res.json();

  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const { projects } = loaderData as { projects: Project[] };

  // Get unqiue categories
  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  // console.log(categories);
  // Filter projects based on the category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current pages projects

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <h2 className='text-3xl text-white font-bold mb-8'>🚀 Projects</h2>
      <div className='flex flex-wrap gap-2 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='grid gap-6 sm:grid-cols-2'>
        {currentProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
