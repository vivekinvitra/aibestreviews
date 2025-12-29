
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LEGAL_CONTENT } from '../constants';

const LegalPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>();
  const data = pageId ? LEGAL_CONTENT[pageId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-40 pb-24 bg-white dark:bg-[#0b0c10] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <span className="inline-block px-4 py-1 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-600/20 rounded-md mb-6 animate-fade-in">
            {data.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter animate-fade-in" style={{ animationDelay: '100ms' }}>
            {data.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light italic animate-fade-in" style={{ animationDelay: '200ms' }}>
            Last updated: {data.lastUpdated}
          </p>
        </header>

        <div className="prose prose-indigo dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-10">
          {data.intro && (
            <p className="leading-relaxed text-lg font-medium text-gray-900 dark:text-white animate-fade-in" style={{ animationDelay: '300ms' }}>
              {data.intro}
            </p>
          )}

          {data.sections.map((section, idx) => (
            <section 
              key={idx} 
              className={`animate-fade-in ${section.isCallout ? "p-8 bg-indigo-600 text-white rounded-[2.5rem] shadow-2xl shadow-indigo-500/20" : ""}`}
              style={{ animationDelay: `${400 + (idx * 100)}ms` }}
            >
              {section.title && (
                <h2 className={`text-2xl font-black uppercase tracking-tight mb-4 ${section.isCallout ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {section.title}
                </h2>
              )}
              {Array.isArray(section.content) ? (
                <ul className={`list-disc pl-6 space-y-2 font-light ${section.isCallout ? 'text-indigo-50' : 'list-inside sm:list-outside'}`}>
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className={`leading-relaxed ${section.isCallout ? 'font-medium' : ''}`}>
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
