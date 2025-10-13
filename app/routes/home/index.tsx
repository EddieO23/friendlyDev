import type { Route } from './+types/index';
import type { Project } from '~/types';
import type { PostMeta } from '~/types';

import LatestPost from '~/components/LatestPost';
import FeaturedProjects from '~/components/FeaturedProjects';
import AboutPreview from '~/components/AboutPreview';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);

  const [projectsRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL(`/posts-meta.json`, url)),
  ]);

  if (!projectsRes.ok || !postRes.ok) {
    throw new Error('Failed to fetch projects or posts');
  }

  const [projects, posts] = await Promise.all([
    projectsRes.json(),
    postRes.json(),
  ]);

  console.log(projects, posts);

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  // console.log( posts);

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPost posts={posts} limit={3} />mi
    </>
  );
};

export default HomePage;
