import type { Post } from '~/types';
import { Link } from 'react-router';

type LatestPostsProps = {
  posts: Post[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 3 }: LatestPostsProps) => {
  const sorted = [...posts].sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const latest = sorted.slice(0, limit);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
        Latest Post
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {latest.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block w-full max-w-sm p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            <span className="block mt-3 text-xs text-gray-500 dark:text-gray-400">
              {new Date(post.date).toDateString()}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
