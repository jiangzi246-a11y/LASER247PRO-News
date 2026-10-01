import React from 'react';
import { ArrowRight, Flame, Trophy, Sparkles, Rocket, Plane, Gift, ShieldCheck, ChevronRight } from 'lucide-react';
import { CategoryType } from '../types';

interface HeroBannerProps {
  onSelectCategory: (category: CategoryType) => void;
  onExploreClick: () => void;
  onMatchCenterClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSelectCategory,
  onExploreClick,
  onMatchCenterClick,
}) => {
  const quickCategories = [
    {
      id: 'cricket' as CategoryType,
      title: 'SPORTS BETTING',
      desc: 'Bet on your favorite sports',
      badge: 'Match Tips',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center border border-blue-400/30 shadow-lg text-white font-black text-xl">
          🏏
        </div>
      ),
    },
    {
      id: 'live-casino' as CategoryType,
      title: 'LIVE CASINO',
      desc: 'Real dealers, real excitement',
      badge: 'Guides',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-yellow-900 flex items-center justify-center border border-amber-400/30 shadow-lg text-white font-black text-xl">
          👑
        </div>
      ),
    },
    {
      id: 'slots' as CategoryType,
      title: 'SLOTS',
      desc: 'Huge variety of slot games',
      badge: 'RTP Stats',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-pink-900 flex items-center justify-center border border-red-400/30 shadow-lg text-amber-300 font-black text-sm tracking-tighter">
          777
        </div>
      ),
    },
    {
      id: 'crash-aviator' as CategoryType,
      title: 'CRASH',
      desc: 'Fast games, big multipliers',
      badge: 'Strategies',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-800 flex items-center justify-center border border-orange-400/30 shadow-lg text-white">
          <Rocket className="w-6 h-6 text-amber-300 transform rotate-45" />
        </div>
      ),
    },
    {
      id: 'crash-aviator' as CategoryType,
      title: 'AVIATOR',
      desc: 'Fly high, cash out',
      badge: 'Calculator',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-600 to-red-900 flex items-center justify-center border border-rose-400/30 shadow-lg text-white">
          <Plane className="w-6 h-6 text-white" />
        </div>
      ),
    },
    {
      id: 'promotions' as CategoryType,
      title: 'PROMOTIONS',
      desc: 'Exciting bonuses and offers',
      badge: '100% Match',
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-700 flex items-center justify-center border border-amber-300/40 shadow-lg text-white">
          <Gift className="w-6 h-6 text-amber-200" />
        </div>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#090a0f] via-[#0f1118] to-[#090a0f] text-white pt-6 pb-12 border-b border-amber-500/15">
      {/* Background Stadium Glow & Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#090a0f] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 pb-8">
          
          {/* Left Text & Call to Action */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              The Official Laser247 Pro Sports & Casino Hub
            </div>

            <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-neutral-100 uppercase font-['Chakra_Petch',sans-serif]">
              WELCOME TO
            </h2>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black italic tracking-tighter uppercase font-['Chakra_Petch',sans-serif] leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#ffd043] via-[#f5a623] to-[#e68900] drop-shadow-[0_4px_25px_rgba(245,166,35,0.45)]">
              LASER247PRO
            </h1>

            <p className="text-sm sm:text-base font-semibold tracking-wide text-neutral-300 max-w-xl">
              YOUR ULTIMATE DESTINATION FOR SPORTS BETTING & ONLINE CASINO INSIGHTS, MATCH PREDICTIONS & EXPERT BLOG
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
              Explore mathematical match previews for IPL and Champions League, in-depth Aviator crash mechanics, live roulette house edge guides, and verified 100% fair play analysis.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 rounded-lg font-['Chakra_Petch',sans-serif] font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-[#f5a623] via-[#ffb900] to-[#e68900] text-black shadow-[0_0_25px_rgba(245,166,35,0.45)] hover:shadow-[0_0_35px_rgba(245,166,35,0.7)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE LATEST ARTICLES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onMatchCenterClick}
                className="px-5 py-3 rounded-lg font-['Chakra_Petch',sans-serif] font-bold text-sm tracking-wider uppercase bg-neutral-900/90 text-neutral-200 border border-neutral-700 hover:border-amber-400 hover:text-amber-400 transition cursor-pointer flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>LIVE MATCH PREDICTIONS</span>
              </button>
            </div>
          </div>

          {/* Right Visual Showcase - Recreating the Cricket + Soccer + Casino Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Golden Aura Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#181c28]/80 to-[#0e1017]/90 border border-amber-500/30 p-4 sm:p-6 shadow-[0_0_50px_rgba(245,166,35,0.15)] overflow-hidden">
                
                {/* Visual Grid representing Cricket, Soccer, Casino Roulette & Cards */}
                <div className="grid grid-cols-3 gap-3">
                  
                  {/* Athlete Card 1: Cricket Batsman Focus */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-blue-500/20 group">
                    <img
                      src="https://images.unsplash.com/photo-1531415074868-036b107e775a?w=400&auto=format&fit=crop&q=80"
                      alt="Cricket Analysis"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-2.5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">CRICKET</span>
                      <p className="text-xs font-bold text-white leading-tight">IPL & T20 Analysis</p>
                    </div>
                  </div>

                  {/* Athlete Card 2: Football / Soccer Focus */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-amber-500/30 group">
                    <img
                      src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&auto=format&fit=crop&q=80"
                      alt="Football Tactics"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-2.5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">FOOTBALL</span>
                      <p className="text-xs font-bold text-white leading-tight">UCL & Premier League</p>
                    </div>
                  </div>

                  {/* Gaming Card 3: Roulette & Casino Focus */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-purple-500/20 group">
                    <img
                      src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&auto=format&fit=crop&q=80"
                      alt="Live Casino Guides"
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-2.5">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">CASINO</span>
                      <p className="text-xs font-bold text-white leading-tight">Roulette & 777 Slots</p>
                    </div>
                  </div>
                </div>

                {/* Floating Highlight Banner inside Hero */}
                <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-neutral-900/90 to-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-400 text-black flex items-center justify-center font-black">
                      <Trophy className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        100% Informational & Strategy Portal
                      </h4>
                      <p className="text-[11px] text-neutral-300">
                        Zero deposit pressure · Verified mathematical models · 18+ Play Responsibly
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 border border-amber-400/40 rounded">
                    Editorial
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 6 Category Spotlight Cards - Directly Matching Screenshot */}
        <div className="pt-4 pb-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => onSelectCategory(cat.id)}
                className="group p-3.5 rounded-xl bg-[#12141d]/90 hover:bg-[#1a1e2c] border border-neutral-800 hover:border-amber-400/60 shadow-lg hover:shadow-[0_0_20px_rgba(245,166,35,0.25)] transition-all duration-200 text-left cursor-pointer flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  {cat.icon}
                  <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded uppercase">
                    {cat.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-white group-hover:text-amber-400 transition-colors uppercase font-['Chakra_Petch',sans-serif] tracking-wide">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                    {cat.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
