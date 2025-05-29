import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default' });
  const allPosts: Post[] = [];

  for (const path in posts) {
    const content = await posts[path]();
    const { data, content: markdownContent } = matter(content);
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    allPosts.push({
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt,
      content: markdownContent
    });
  }

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });

  return Array.from(tags).sort();
} 