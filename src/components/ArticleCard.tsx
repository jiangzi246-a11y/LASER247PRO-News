import React from 'react';
import { Eye, Clock, ArrowRight, Bookmark, Share2 } from 'lucide-react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onSelect,
  featured = false,
}) => {
  return (
    <article
      onClick={() => onSelect(article)}
      className={`group relative rounded-2xl bg-[#11131c] border border-neutral-800/80 hover:border-amber-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Top Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'h-64 sm:h-72' : 'h-48'} bg-neutral-900`}>
        <img
          src={article.coverImage}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11131c] via-black/30 to-transparent" />

        {/* Category Label at Top Left - Clean Unboxed Ribbon */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-amber-500/40">
            {article.categoryName}
          </span>
          {article.trending && (
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-400 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-rose-500/40">
              Trending
            </span>
          )}
        </div>

        {/* Read Time & Views at Top Right */}
        <div className="absolute top-3 right-3 flex items-center gap-2 text-[11px] font-medium text-neutral-300 bg-black/70 backdrop-blur-md px-2 py-1 rounded">
          <Clock className="w-3 h-3 text-amber-400" />
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Row: Zero-Pill Discipline */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
            <span>{article.publishedAt}</span>
            <span className="text-neutral-600">·</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-neutral-400" />
              {article.views.toLocaleString()} views
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-bold font-['Chakra_Petch',sans-serif] text-neutral-100 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug ${
            featured ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
          }`}>
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Author & Read Link Footer */}
        <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover border border-amber-500/30"
            />
            <div>
              <p className="text-xs font-semibold text-neutral-200 line-clamp-1">
                {article.author.name}
              </p>
              <p className="text-[10px] text-neutral-400 line-clamp-1">
                {article.author.role}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform">
            <span>Read</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};
