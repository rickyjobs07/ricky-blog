import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Personalizar el estilo de los elementos markdown
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-serif font-bold text-gray-900 mt-8 mb-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-3xl font-serif font-bold text-gray-900 mt-8 mb-4" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-2xl font-serif font-bold text-gray-900 mt-6 mb-3" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-gray-700 leading-relaxed mb-4" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 text-gray-700" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 text-gray-700" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="mb-1" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-200 pl-4 italic text-gray-600 my-4" {...props} />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline ? (
            <div className="bg-gray-50 rounded-lg p-4 my-4 overflow-x-auto">
              <code className={className} {...props}>
                {children}
              </code>
            </div>
          ) : (
            <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props}>
              {children}
            </code>
          );
        },
        pre: ({ node, ...props }) => (
          <pre className="bg-gray-50 rounded-lg p-4 my-4 overflow-x-auto" {...props} />
        ),
        img: ({ node, ...props }) => (
          <img className="rounded-lg my-4 max-w-full h-auto" {...props} />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-gray-200" {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent; 