import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug } from '../services/posts';
import MarkdownContent from '../components/MarkdownContent';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = React.useState<Awaited<ReturnType<typeof getPostBySlug>>>(null);

  React.useEffect(() => {
    const loadPost = async () => {
      if (slug) {
        const postData = await getPostBySlug(slug);
        setPost(postData);
      }
    };
    loadPost();
  }, [slug]);

  if (!post) {
    return <div>Cargando...</div>;
  }

  // Obtener las primeras 150 palabras del contenido para la descripción
  const description = post.content
    .split(/\s+/)
    .slice(0, 150)
    .join(' ')
    .replace(/[#*`]/g, '') // Eliminar caracteres de markdown
    .trim();

  // Construir la URL completa del post
  const postUrl = `${window.location.origin}/post/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Ricky Montero Blog`}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={postUrl} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <time>
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/?tag=${tag}`}
                  className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <MarkdownContent content={post.content} />
        </div>
      </article>
    </>
  );
};

export default Article; 