import React from 'react';
import { Zap, ShieldCheck, Headphones, Award, Shield, ArrowUp } from 'lucide-react';
import { CategoryType } from '../types';

interface FooterProps {
  onSelectCategory: (category: CategoryType) => void;
  onOpenSeoInspector: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenSeoInspector }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090d] text-neutral-300 border-t border-amber-500/20 pt-12 pb-8">
      
      {/* 4 Feature Trust Highlights - Exact from Screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-neutral-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Fast Payouts */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase font-['Chakra_Petch',sans-serif] tracking-wider text-white">
                FAST PAYOUTS
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                Quick & secure withdrawals
              </p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase font-['Chakra_Petch',sans-serif] tracking-wider text-white">
                SECURE PAYMENTS
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                100% safe & trusted
              </p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Headphones className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase font-['Chakra_Petch',sans-serif] tracking-wider text-white">
                24/7 SUPPORT
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                We're here for you anytime
              </p>
            </div>
          </div>

          {/* Fair Play */}
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase font-['Chakra_Petch',sans-serif] tracking-wider text-white">
                FAIR PLAY
              </h4>
              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                Licensed & regulated
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Links & Brand Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center font-['Chakra_Petch',sans-serif] tracking-tight text-2xl font-bold italic">
            <span className="text-white">LASER</span>
            <span className="text-[#f5a623] ml-0.5">247</span>
            <span className="ml-1.5 px-1.5 py-0.2 text-xs font-bold not-italic border-2 border-[#f5a623] text-[#f5a623] rounded-md bg-[#f5a623]/10">
              PRO
            </span>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
            Laser247 Pro News is the dedicated editorial, sports analytics, and gaming education portal. We deliver match predictions, pitch reports, live casino insights, and Aviator strategy models with mathematical transparency.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={onOpenSeoInspector}
              className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              SEO Meta Inspector & Schema Viewer
            </button>
          </div>
        </div>

        {/* Categories Column */}
        <div className="md:col-span-3 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Chakra_Petch',sans-serif]">
            Editorial Hubs
          </h4>
          <ul className="space-y-1.5 text-xs text-neutral-400">
            <li>
              <button onClick={() => onSelectCategory('cricket')} className="hover:text-amber-400 transition cursor-pointer">
                Cricket Betting & IPL Previews
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('football')} className="hover:text-amber-400 transition cursor-pointer">
                Football & UEFA Analysis
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('crash-aviator')} className="hover:text-amber-400 transition cursor-pointer">
                Aviator Crash Algorithms
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('live-casino')} className="hover:text-amber-400 transition cursor-pointer">
                Live Casino & Roulette Odds
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('slots')} className="hover:text-amber-400 transition cursor-pointer">
                Slots RTP & Volatility
              </button>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance Column */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Chakra_Petch',sans-serif]">
            Compliance & Transparency
          </h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            This website is strictly an educational news and analytical blog. We do not offer real-money wagering, gaming accounts, or payment processing on this domain. Always adhere to your local jurisdiction’s gaming regulations.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-800 text-xs font-bold text-amber-400">
            <span className="w-5 h-5 rounded-full border border-amber-400 flex items-center justify-center text-[10px]">
              18+
            </span>
            <span>Play Responsibly · Begambleaware.org</span>
          </div>
        </div>

      </div>

      {/* Bottom Payment Badges & Copyright - Matching Screenshot Bottom Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        
        {/* We Support Payment Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-semibold text-neutral-400">We Support</span>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 font-mono font-bold text-[10px] text-amber-400">
              UPI
            </span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 font-mono font-bold text-[10px] text-cyan-400">
              Paytm
            </span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 font-mono font-bold text-[10px] text-purple-400">
              PhonePe
            </span>
            <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 font-mono font-bold text-[10px] text-blue-400">
              G Pay
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p>© 2025 LASER247PRO. All Rights Reserved.</p>
        </div>

        {/* 18+ and Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <span className="w-4 h-4 rounded-full border border-neutral-500 flex items-center justify-center text-[9px] font-bold">
              18+
            </span>
            <span className="text-[11px]">Play Responsibly</span>
          </div>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
