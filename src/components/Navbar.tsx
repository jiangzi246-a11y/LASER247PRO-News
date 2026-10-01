import React, { useState } from 'react';
import { Search, Shield, Sparkles, X, Menu } from 'lucide-react';
import { CategoryType } from '../types';

interface NavbarProps {
  currentCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenSeoInspector: () => void;
  onResetView: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onOpenSeoInspector,
  onResetView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks: Array<{ label: string; category: CategoryType }> = [
    { label: 'HOME', category: 'all' },
    { label: 'SPORTS', category: 'cricket' },
    { label: 'LIVE CASINO', category: 'live-casino' },
    { label: 'SLOTS', category: 'slots' },
    { label: 'CRASH', category: 'crash-aviator' },
    { label: 'AVIATOR', category: 'crash-aviator' },
    { label: 'PROMOTIONS', category: 'promotions' },
    { label: 'VIP CLUB', category: 'promotions' },
    { label: 'GUIDES', category: 'guides' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d13]/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl">
      {/* Top Ticker Bar */}
      <div className="bg-gradient-to-r from-neutral-950 via-[#1a1405] to-neutral-950 text-xs py-1.5 px-4 border-b border-amber-500/10 flex items-center justify-between text-neutral-300">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="flex items-center gap-1 font-semibold text-amber-400 tracking-wider uppercase text-[10px] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
            NEWSWIRE
          </span>
          <p className="text-xs truncate text-neutral-300">
            IPL 2025 Match Predictions Live · Aviator Multiplier Math Breakdown · Champions League Knockouts · Fast UPI Payout Analysis
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-xs shrink-0">
          <span className="text-neutral-400 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            Official News & Editorial Blog
          </span>
          <span className="text-amber-400/80 font-medium">18+ Play Responsibly</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo - Exact Style from Screenshot */}
          <button 
            onClick={onResetView}
            className="flex items-center gap-1.5 group text-left cursor-pointer focus:outline-none"
            aria-label="Laser247 Pro Home"
          >
            <div className="flex items-center font-['Chakra_Petch',sans-serif] tracking-tight text-2xl sm:text-3xl font-bold italic">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">LASER</span>
              <span className="text-[#f5a623] ml-0.5 drop-shadow-[0_2px_10px_rgba(245,166,35,0.4)]">247</span>
              <span className="ml-1.5 px-1.5 py-0.2 text-xs sm:text-sm font-bold not-italic border-2 border-[#f5a623] text-[#f5a623] rounded-md shadow-[0_0_12px_rgba(245,166,35,0.3)] bg-[#f5a623]/10">
                PRO
              </span>
            </div>
            <span className="hidden xl:inline-block ml-2 text-[10px] tracking-widest text-amber-400/80 font-bold uppercase border-l border-neutral-700 pl-2">
              NEWS & BLOG
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link, idx) => {
              const isActive = currentCategory === link.category && (link.category !== 'all' || link.label === 'HOME');
              return (
                <button
                  key={`${link.label}-${idx}`}
                  onClick={() => {
                    onSelectCategory(link.category);
                  }}
                  className={`px-3 py-1.5 text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer rounded ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/15 shadow-[0_0_15px_rgba(245,166,35,0.25)] border-b-2 border-amber-400'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & SEO Button */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Input or Toggle */}
            {showSearchInput ? (
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search articles, matches, guides..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  autoFocus
                  className="w-48 sm:w-64 bg-neutral-900/90 text-sm text-white px-3 py-1.5 pr-8 rounded-lg border border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-400 text-xs"
                />
                <button 
                  onClick={() => {
                    setShowSearchInput(false);
                    onSearchChange('');
                  }}
                  className="absolute right-2 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearchInput(true)}
                className="p-2 text-neutral-400 hover:text-amber-400 hover:bg-neutral-900 rounded-lg transition"
                title="Search articles"
                aria-label="Search articles"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1017] border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search news, predictions, tips..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-neutral-900 text-sm text-white px-3 py-2 rounded border border-neutral-700 focus:border-amber-500 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link, idx) => (
              <button
                key={`mobile-${link.label}-${idx}`}
                onClick={() => {
                  onSelectCategory(link.category);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 text-xs font-bold tracking-wider rounded text-neutral-300 hover:text-amber-400 hover:bg-neutral-800/60"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
