import type { PostMeta } from '~/types';

type LatestPostProps = {
  posts: PostMeta[];
  limit?: number;
};

const LatestPost = ({ posts, limit = 3 }: LatestPostProps) => {
  return (
    <section
      className='max-w-6xl mx-auto px-6 py-12
    '
    >
      <h2 className='text-2xl font-bold mb-6 text-white'>🆕 Latest Posts</h2>
    </section>
  );
};

export default LatestPost;
