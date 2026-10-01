import React from 'react';
import { Trophy, Gift, ArrowRight, Percent, Sparkles, HelpCircle } from 'lucide-react';

interface PromotionsBarProps {
  onReadBonusGuide: () => void;
  onReadVipGuide: () => void;
}

export const PromotionsBar: React.FC<PromotionsBarProps> = ({
  onReadBonusGuide,
  onReadVipGuide,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
      <div className="relative rounded-2xl bg-gradient-to-r from-[#171204] via-[#241a05] to-[#171204] border-2 border-amber-500/40 p-4 sm:p-6 shadow-[0_0_35px_rgba(245,166,35,0.2)] overflow-hidden">
        {/* Ambient shimmer */}
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Left: Headline & Trophy */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffd54f] to-[#f5a623] flex items-center justify-center shadow-[0_0_20px_rgba(245,166,35,0.5)] text-black">
                <Trophy className="w-7 h-7 text-black drop-shadow" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border border-black"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30">
                  SPECIAL REPORT
                </span>
                <span className="text-xs text-neutral-400">Terms & Rollover Explained</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black italic tracking-wide uppercase font-['Chakra_Petch',sans-serif] text-white">
                EXCITING BONUSES & REWARDS
              </h3>
            </div>
          </div>

          {/* Center: Stat Badges */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 text-center">
            <div className="bg-black/40 px-4 py-2 rounded-xl border border-amber-500/20">
              <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                DEPOSIT BONUS
              </p>
              <p className="text-xl sm:text-2xl font-black text-[#f5a623] font-['Chakra_Petch',sans-serif]">
                UP TO 100%
              </p>
            </div>

            <div className="bg-black/40 px-4 py-2 rounded-xl border border-amber-500/20">
              <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                WEEKLY CASHBACK
              </p>
              <p className="text-xl sm:text-2xl font-black text-[#f5a623] font-['Chakra_Petch',sans-serif]">
                UP TO 10%
              </p>
            </div>
          </div>

          {/* Right: Informational Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onReadBonusGuide}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#f5a623] to-[#e68900] text-black font-['Chakra_Petch',sans-serif] font-black text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_20px_rgba(245,166,35,0.6)] hover:scale-105 active:scale-95 transition cursor-pointer flex items-center gap-2"
            >
              <span>READ BONUS GUIDE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onReadVipGuide}
              className="px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-bold text-neutral-300 hover:text-amber-400 hover:border-amber-400 transition cursor-pointer"
            >
              VIP Perks
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
