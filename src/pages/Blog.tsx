import { useLoaderData } from 'react-router-dom';
import BlogPostItem from '@/features/blog/BlogPostItem.tsx';
import { getBlogPosts } from '@/services/apiBlogPosts';
import List from '@/ui/List.tsx';

function Blog() {
  const posts = useLoaderData();
  return (
    <List
      items={posts}
      render={(item) => <BlogPostItem key={item.id} item={item} />}
    />
  );
}

export async function loader() {
  const res = await getBlogPosts();
  return res;
}

export default Blog;
