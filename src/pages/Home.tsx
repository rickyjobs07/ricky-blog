import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllPosts, type Post } from '../services/posts';

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };
    loadPosts();
  }, []);

  // Obtener todos los tags únicos
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).sort();

  // Filtrar posts por tag si hay uno seleccionado
  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  return (
    <>
      <Helmet>
        <title>Ricky Montero - Blog Personal</title>
        <meta name="description" content="Blog personal de Ricky Montero sobre desarrollo web, tecnología y más." />
      </Helmet>

      <div className="space-y-8">
        {/* Header con título y filtro de tags */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Blog</h1>
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTag === null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Lista de posts */}
        <div className="grid gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Título */}
                <h2 className="text-2xl font-serif font-semibold text-gray-900">
                  <Link to={`/post/${post.slug}`} className="hover:text-blue-600">
                    {post.title}
                  </Link>
                </h2>

                {/* Fecha y Tags */}
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
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extracto */}
                <p className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Botón Leer más */}
                <div className="pt-2">
                  <Link
                    to={`/post/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Leer más
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home; 