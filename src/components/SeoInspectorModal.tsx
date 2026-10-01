import React, { useState } from 'react';
import { X, Search, Check, Copy, Globe, Share2, Code, ShieldCheck, Smartphone, Monitor } from 'lucide-react';
import { Article } from '../types';

interface SeoInspectorModalProps {
  currentArticle: Article | null;
  onClose: () => void;
}

export const SeoInspectorModal: React.FC<SeoInspectorModalProps> = ({
  currentArticle,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'serp' | 'opengraph' | 'schema' | 'keywords'>('serp');
  const [viewDevice, setViewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [copiedSchema, setCopiedSchema] = useState(false);

  const title = currentArticle
    ? currentArticle.metaTitle
    : 'Laser247 Pro News & Sports Blog | Betting Insights & Casino Guides';

  const description = currentArticle
    ? currentArticle.metaDescription
    : 'Official Laser247 Pro sports betting news, cricket & football match analysis, live casino guides, and Aviator strategy breakdown. 100% fair play insights.';

  const url = currentArticle
    ? `https://laser247pro.news/article/${currentArticle.slug}`
    : 'https://laser247pro.news';

  const schemaJson = currentArticle
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": currentArticle.title,
        "description": currentArticle.metaDescription,
        "image": [currentArticle.coverImage],
        "datePublished": currentArticle.publishedAt,
        "dateModified": currentArticle.updatedAt,
        "author": {
          "@type": "Person",
          "name": currentArticle.author.name,
          "jobTitle": currentArticle.author.role
        },
        "publisher": {
          "@type": "Organization",
          "name": "Laser247 Pro News",
          "url": "https://laser247pro.news"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        }
      }
    : {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "name": "Laser247 Pro News & Sports Blog",
            "url": "https://laser247pro.news/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://laser247pro.news/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@type": "NewsMediaOrganization",
            "name": "Laser247 Pro",
            "url": "https://laser247pro.news/"
          }
        ]
      };

  const copySchemaToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(schemaJson, null, 2));
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  const keywordsList = currentArticle
    ? currentArticle.seoKeywords
    : [
        'Laser247 Pro',
        'Laser247 sports news',
        'cricket betting tips today',
        'IPL 2025 match predictions',
        'aviator crash game strategy',
        'live dealer roulette odds',
        'high RTP slots',
        'UPI instant payouts'
      ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0f111a] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-neutral-200">
        
        {/* Header */}
        <div className="bg-[#141724] border-b border-neutral-800 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold text-white font-['Chakra_Petch',sans-serif] uppercase tracking-wide">
                SEO & Search Engine Preview Inspector
              </h3>
              <p className="text-[11px] text-neutral-400">
                {currentArticle ? `Inspecting Article: "${currentArticle.title.slice(0, 35)}..."` : 'Inspecting: Site Homepage & Core Feed'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-800 px-5 bg-black/40">
          <button
            onClick={() => setActiveTab('serp')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition cursor-pointer ${
              activeTab === 'serp'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Google SERP Snippet
          </button>
          <button
            onClick={() => setActiveTab('opengraph')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition cursor-pointer ${
              activeTab === 'opengraph'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Social OpenGraph Card
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition cursor-pointer ${
              activeTab === 'schema'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Schema.org (JSON-LD)
          </button>
          <button
            onClick={() => setActiveTab('keywords')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition cursor-pointer ${
              activeTab === 'keywords'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Target Keywords
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* SERP TAB */}
          {activeTab === 'serp' && (
            <div className="space-y-5">
              
              {/* Device Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Google Search Engine Results Page (SERP)
                </span>
                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-neutral-800 text-xs">
                  <button
                    onClick={() => setViewDevice('desktop')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                      viewDevice === 'desktop' ? 'bg-amber-400 text-black font-bold' : 'text-neutral-400'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setViewDevice('mobile')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                      viewDevice === 'mobile' ? 'bg-amber-400 text-black font-bold' : 'text-neutral-400'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Realistic Google Search Card Simulation */}
              <div className={`p-4 rounded-xl bg-white text-black font-sans shadow-lg transition-all ${
                viewDevice === 'mobile' ? 'max-w-md mx-auto border-2 border-neutral-700' : ''
              }`}>
                {/* Search Result Breadcrumb */}
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold text-[9px]">
                    L
                  </div>
                  <div className="flex flex-col text-[11px] leading-tight">
                    <span className="font-semibold text-neutral-900">Laser247 Pro News</span>
                    <span className="text-neutral-500 truncate max-w-sm">{url}</span>
                  </div>
                </div>

                {/* Search Result Title */}
                <h4 className="text-[#1a0dab] hover:underline text-base sm:text-lg font-medium leading-snug cursor-pointer line-clamp-2">
                  {title}
                </h4>

                {/* Search Result Snippet */}
                <p className="text-xs sm:text-sm text-[#4d5156] mt-1 line-clamp-2 leading-relaxed">
                  <span className="text-neutral-500 font-medium">May 14, 2025 — </span>
                  {description}
                </p>
              </div>

              {/* Audit Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-neutral-300">Title Length</span>
                    <span className={`font-mono font-bold ${title.length <= 60 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {title.length} / 60 chars
                    </span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${title.length <= 60 ? 'bg-emerald-400' : 'bg-amber-400'}`}
                      style={{ width: `${Math.min(100, (title.length / 60) * 100)}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-1">Optimal length: 50-60 characters</p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-neutral-300">Meta Description</span>
                    <span className={`font-mono font-bold ${description.length <= 160 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {description.length} / 160 chars
                    </span>
                  </div>
                  <div className="w-full bg-neutral-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${description.length <= 160 ? 'bg-emerald-400' : 'bg-amber-400'}`}
                      style={{ width: `${Math.min(100, (description.length / 160) * 100)}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-1">Optimal length: 140-160 characters</p>
                </div>
              </div>

            </div>
          )}

          {/* OPENGRAPH TAB */}
          {activeTab === 'opengraph' && (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Social Media Card Preview (Twitter / X, Discord, WhatsApp)
              </span>

              <div className="max-w-md mx-auto rounded-xl bg-[#1a1d2e] border border-neutral-700 overflow-hidden shadow-xl">
                <div className="h-44 bg-neutral-900 overflow-hidden">
                  <img
                    src={currentArticle?.coverImage || 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80'}
                    alt="Social Card"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-1 bg-[#151724]">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    laser247pro.news
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-2">
                    {title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SCHEMA JSON-LD TAB */}
          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Schema.org Structured Data (JSON-LD)
                </span>
                <button
                  onClick={copySchemaToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs rounded bg-neutral-800 hover:bg-neutral-700 text-amber-400 transition cursor-pointer"
                >
                  {copiedSchema ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSchema ? 'Copied to Clipboard' : 'Copy JSON-LD'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-black/70 font-mono text-xs text-emerald-400 border border-neutral-800 overflow-x-auto max-h-72">
                <pre>{JSON.stringify(schemaJson, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* KEYWORDS TAB */}
          {activeTab === 'keywords' && (
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                SEO Search Intent & High-Volume Keywords
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {keywordsList.map((kw, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs">
                    <span className="font-semibold text-neutral-200">{kw}</span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      Rank #1 Target
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
