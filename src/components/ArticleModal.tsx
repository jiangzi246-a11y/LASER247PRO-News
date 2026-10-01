import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Bookmark, 
  Check, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  MessageSquare, 
  ThumbsUp, 
  Send,
  ArrowLeft,
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';
import { Article, Comment } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectRelated: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectRelated,
  allArticles,
}) => {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [commentText, setCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c1',
      articleId: article?.id || '',
      author: 'Rajiv Patel',
      content: 'The dual-bet hedging breakdown is spot on. Auto-cashing out Bet A at 1.45x completely changed my variance control.',
      date: '2 days ago',
      likes: 14,
    },
    {
      id: 'c2',
      articleId: article?.id || '',
      author: 'Siddharth Rao',
      content: 'Appreciate the honest explanation of provably fair hashes. Too many telegram scam bots promising 100% predictions.',
      date: 'Yesterday',
      likes: 8,
    }
  ]);

  useEffect(() => {
    // Scroll to top when article opens
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article?.id]);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      articleId: article.id,
      author: commentAuthor.trim() || 'Guest Reader',
      content: commentText.trim(),
      date: 'Just now',
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setCommentText('');
  };

  const relatedArticles = allArticles
    .filter(a => a.id !== article.id && (a.category === article.category || a.trending))
    .slice(0, 3);

  // Generate Article Schema.org JSON-LD dynamically
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.metaDescription,
    "image": [article.coverImage],
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "jobTitle": article.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Laser247 Pro News",
      "url": "https://laser247pro.news"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://laser247pro.news/article/${article.slug}`
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0e1017] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[96vh] flex flex-col text-neutral-200">
        
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 bg-[#0e1017]/95 backdrop-blur-md border-b border-neutral-800 px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 font-medium transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </button>
            <span className="text-neutral-600">/</span>
            <span className="text-amber-400 uppercase font-semibold tracking-wider text-[11px]">
              {article.categoryName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-300 hover:text-amber-400 hover:border-amber-400/50 transition cursor-pointer"
              title="Copy Article URL"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-4 sm:px-8 py-6 space-y-6">
          
          {/* Header Section */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                {article.categoryName}
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {article.readTime}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-xs text-neutral-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                Published {article.publishedAt}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch',sans-serif] tracking-tight text-white leading-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                {article.subtitle}
              </p>
            )}

            {/* Author Profile Card */}
            <div className="flex items-center justify-between py-3 border-y border-neutral-800/80">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {article.author.name}
                    <span className="text-[10px] bg-neutral-800 text-amber-400 px-1.5 py-0.5 rounded border border-amber-400/20">
                      Verified Author
                    </span>
                  </h4>
                  <p className="text-xs text-neutral-400">{article.author.role}</p>
                </div>
              </div>

              <div className="text-right hidden sm:block">
                <span className="text-xs text-neutral-400">Laser247 Pro Editorial Board</span>
                <p className="text-[11px] text-amber-400/80">Fact-Checked & Algorithmic Audit</p>
              </div>
            </div>
          </div>

          {/* Featured Cover Image */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-neutral-900 border border-neutral-800">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Key Takeaways Box (SEO Featured Snippet Target) */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 via-[#171408] to-neutral-900 border border-amber-500/30">
              <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-sm uppercase tracking-wider font-['Chakra_Petch',sans-serif]">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-2 text-sm text-neutral-200">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formatted Article Body */}
          <div className="prose prose-invert max-w-none space-y-4 text-neutral-300 leading-relaxed text-sm sm:text-base">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg sm:text-xl font-bold text-amber-400 font-['Chakra_Petch',sans-serif] pt-3 pb-1 border-b border-neutral-800">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('```')) {
                return (
                  <div key={idx} className="my-4 p-4 rounded-lg bg-black/60 font-mono text-xs sm:text-sm text-amber-300 border border-neutral-800 overflow-x-auto whitespace-pre">
                    {paragraph.replace(/```/g, '')}
                  </div>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="space-y-1.5 pl-4 list-disc marker:text-amber-400">
                    {paragraph.split('\n').map((line, liIdx) => (
                      <li key={liIdx} className="leading-relaxed">
                        {line.replace(/^- /, '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.startsWith('---')) {
                return <hr key={idx} className="border-neutral-800 my-4" />;
              }
              return (
                <p key={idx} className="leading-relaxed text-neutral-300">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags Cloud */}
          <div className="pt-4 border-t border-neutral-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Topic Keywords & Index Terms
            </h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs text-neutral-300 bg-neutral-900 px-3 py-1 rounded-md border border-neutral-800 hover:border-amber-400/40 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive FAQ Section for Article (Schema FAQPage ready) */}
          {article.faq && article.faq.length > 0 && (
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <h3 className="text-lg font-bold font-['Chakra_Petch',sans-serif] text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {article.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="border border-neutral-800 rounded-xl bg-neutral-900/60 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between text-sm font-semibold text-neutral-200 hover:text-amber-400 transition"
                    >
                      <span>{item.question}</span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-neutral-400 border-t border-neutral-800/50 pt-3 leading-relaxed">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="pt-6 border-t border-neutral-800">
              <h3 className="text-base font-bold font-['Chakra_Petch',sans-serif] text-white uppercase tracking-wider mb-4">
                Related Reading & Match Analysis
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-amber-400/60 transition cursor-pointer group"
                  >
                    <div className="aspect-[16/9] rounded-lg overflow-hidden mb-2 bg-neutral-800">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase">
                      {rel.categoryName}
                    </span>
                    <h5 className="text-xs font-bold text-white group-hover:text-amber-400 line-clamp-2 mt-1">
                      {rel.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comments / Reader Discussion */}
          <div className="pt-6 border-t border-neutral-800 space-y-4">
            <h3 className="text-base font-bold font-['Chakra_Petch',sans-serif] text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              Reader Discussion ({comments.length})
            </h3>

            {/* Comment Form */}
            <form onSubmit={handleAddComment} className="space-y-3 bg-neutral-900/70 p-4 rounded-xl border border-neutral-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                  className="bg-black/50 text-xs text-white px-3 py-2 rounded-lg border border-neutral-700 focus:border-amber-400 focus:outline-none"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Share your thoughts on this strategy or match analysis..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full bg-black/50 text-xs sm:text-sm text-white p-3 rounded-lg border border-neutral-700 focus:border-amber-400 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-lg transition flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Post Comment
              </button>
            </form>

            {/* Existing Comments List */}
            <div className="space-y-3">
              {comments.map((comm) => (
                <div key={comm.id} className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">{comm.author}</span>
                    <span className="text-[11px] text-neutral-400">{comm.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {comm.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
