import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { PostMeta } from '~/types';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  console.log('slug', slug);
  return {};
}

const BlogDetailsPage = () => {
  return <>BLOG</>;
};

export default BlogDetailsPage;
