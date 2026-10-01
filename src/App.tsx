import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { PromotionsBar } from './components/PromotionsBar';
import { ArticleCard } from './components/ArticleCard';
import { ArticleModal } from './components/ArticleModal';
import { MatchCenter } from './components/MatchCenter';
import { AviatorCalculator } from './components/AviatorCalculator';
import { SeoInspectorModal } from './components/SeoInspectorModal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ARTICLES, CATEGORIES } from './data/articles';
import { Article, CategoryType, MatchPreview } from './types';
import { 
  Filter, 
  TrendingUp, 
  Flame, 
  Sparkles, 
  BookOpen, 
  Search, 
  Compass, 
  CheckCircle2, 
  Mail, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'views' | 'trending'>('latest');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [seoModalOpen, setSeoModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Sync document title dynamically for SEO
  useEffect(() => {
    if (activeArticle) {
      document.title = activeArticle.metaTitle;
    } else if (selectedCategory !== 'all') {
      const cat = CATEGORIES.find(c => c.id === selectedCategory);
      document.title = `${cat?.name || 'Sports & Casino'} - Laser247 Pro News & Analysis`;
    } else {
      document.title = 'Laser247 Pro News & Sports Blog | Betting Insights & Casino Guides';
    }
  }, [activeArticle, selectedCategory]);

  // Filtered & Sorted Articles
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' ||
        article.category === selectedCategory ||
        (selectedCategory === 'crash-aviator' && (article.category === 'crash-aviator' || article.tags.includes('Aviator'))) ||
        (selectedCategory === 'cricket' && (article.category === 'cricket' || article.tags.includes('Cricket Betting')));

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some((t) => t.toLowerCase().includes(query)) ||
        article.seoKeywords.some((k) => k.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'views') return b.views - a.views;
      if (sortBy === 'trending') return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleSelectCategory = (cat: CategoryType) => {
    setSelectedCategory(cat);
    // Smooth scroll to articles section
    const articlesSection = document.getElementById('articles-feed');
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => setNewsletterSuccess(false), 4000);
      setNewsletterEmail('');
    }
  };

  const handleSelectMatchTip = (match: MatchPreview) => {
    // If a match is clicked, find relevant article or open match tip
    const relatedArticle = ARTICLES.find(a => 
      a.category === (match.sport === 'Cricket' ? 'cricket' : 'football')
    );
    if (relatedArticle) {
      setActiveArticle(relatedArticle);
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-200 flex flex-col font-['Inter',sans-serif]">
      
      {/* Navigation Header */}
      <Navbar
        currentCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenSeoInspector={() => setSeoModalOpen(true)}
        onResetView={() => {
          setSelectedCategory('all');
          setSearchQuery('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Hero Banner Showcase */}
      <HeroBanner
        onSelectCategory={handleSelectCategory}
        onExploreClick={() => {
          const el = document.getElementById('articles-feed');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onMatchCenterClick={() => {
          const el = document.getElementById('match-center');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Rewards & Promotions Strip */}
      <PromotionsBar
        onReadBonusGuide={() => {
          const bonusArticle = ARTICLES.find(a => a.id === 'laser247-deposit-bonus-wagering-guide');
          if (bonusArticle) setActiveArticle(bonusArticle);
        }}
        onReadVipGuide={() => {
          const vipArticle = ARTICLES.find(a => a.id === 'laser247-vip-club-loyalty-tiers-explained');
          if (vipArticle) setActiveArticle(vipArticle);
        }}
      />

      {/* Live Match Prediction Center */}
      <div id="match-center">
        <MatchCenter onSelectMatchTip={handleSelectMatchTip} />
      </div>

      {/* Main Articles Feed Section */}
      <main id="articles-feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 flex-1 w-full">
        
        {/* Category Filter Pills & Search Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                LATEST ARTICLES & INSIGHTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch',sans-serif] text-white mt-1">
              {selectedCategory === 'all'
                ? 'EXPERT BLOG & BETTING GUIDES'
                : CATEGORIES.find(c => c.id === selectedCategory)?.name.toUpperCase()}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              Showing {filteredArticles.length} published articles and strategic analyses.
            </p>
          </div>

          {/* Sorting Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs text-neutral-400 font-medium">Sort by:</span>
            <div className="bg-[#12141e] p-1 rounded-xl border border-neutral-800 flex items-center gap-1 text-xs">
              <button
                onClick={() => setSortBy('latest')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer ${
                  sortBy === 'latest' ? 'bg-amber-400 text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Latest
              </button>
              <button
                onClick={() => setSortBy('trending')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer ${
                  sortBy === 'trending' ? 'bg-amber-400 text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Trending
              </button>
              <button
                onClick={() => setSortBy('views')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer ${
                  sortBy === 'views' ? 'bg-amber-400 text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Most Read
              </button>
            </div>
          </div>

        </div>

        {/* Category Horizontal Filter Scroller */}
        <div className="py-4 overflow-x-auto no-scrollbar flex items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,166,35,0.3)]'
                    : 'bg-[#12141e] text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black text-amber-400' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Query Active Notification */}
        {searchQuery && (
          <div className="my-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
            <span>
              Searching for: <strong>"{searchQuery}"</strong> ({filteredArticles.length} results found)
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-400 hover:underline font-bold cursor-pointer"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {filteredArticles.map((article, idx) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={(art) => setActiveArticle(art)}
                featured={idx === 0 && selectedCategory === 'all' && !searchQuery}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-[#12141e] border border-neutral-800 my-6">
            <Compass className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No articles matched your criteria</h3>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
              Try searching with another keyword or select "All News & Blogs" to see the full editorial library.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-amber-400 text-black text-xs font-bold rounded-lg cursor-pointer hover:bg-amber-300 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Interactive Aviator Calculator Tool */}
      <AviatorCalculator />

      {/* Newsletter Signup (SEO Engagement / Retention) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 w-full">
        <div className="rounded-2xl bg-gradient-to-r from-[#171408] via-[#211a08] to-[#171408] border border-amber-500/30 p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Mail className="w-4 h-4" />
              <span>Laser247 Pro Weekly Briefing</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black font-['Chakra_Petch',sans-serif] text-white">
              GET IPL PREVIEWS & CASINO STRATEGIES IN YOUR INBOX
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Join 45,000+ sports analysts and gaming enthusiasts. Zero spam, unsubscribe anytime.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {newsletterSuccess ? (
              <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you! You are subscribed to Laser247 Pro Editorial updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-72 bg-black/60 text-xs text-white px-4 py-3 rounded-xl border border-neutral-700 focus:border-amber-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-['Chakra_Petch',sans-serif] font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SEO Frequently Asked Questions Section */}
      <FaqSection />

      {/* Footer with Trust Badges & Payments */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenSeoInspector={() => setSeoModalOpen(true)}
      />

      {/* Full Article Reading Modal */}
      {activeArticle && (
        <ArticleModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
          onSelectRelated={(art) => setActiveArticle(art)}
          allArticles={ARTICLES}
        />
      )}

      {/* SEO Inspector Modal */}
      {seoModalOpen && (
        <SeoInspectorModal
          currentArticle={activeArticle}
          onClose={() => setSeoModalOpen(false)}
        />
      )}

    </div>
  );
}
