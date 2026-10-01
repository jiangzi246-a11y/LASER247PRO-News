import React, { useState } from 'react';
import { Flame, Trophy, Clock, AlertCircle, ChevronRight, BarChart2 } from 'lucide-react';
import { MATCH_PREVIEWS } from '../data/matches';
import { MatchPreview } from '../types';

interface MatchCenterProps {
  onSelectMatchTip: (match: MatchPreview) => void;
}

export const MatchCenter: React.FC<MatchCenterProps> = ({ onSelectMatchTip }) => {
  const [filterSport, setFilterSport] = useState<string>('All');

  const sports = ['All', 'Cricket', 'Football'];

  const filteredMatches = MATCH_PREVIEWS.filter(
    (m) => filterSport === 'All' || m.sport === filterSport
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-400">
              LIVE & UPCOMING PREDICTIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch',sans-serif] text-white tracking-wide mt-1">
            SPORTS MATCH ANALYSIS & WIN PROBABILITIES
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
            Statistical previews, head-to-head records, and algorithmic win models.
          </p>
        </div>

        {/* Sport Filter Tabs */}
        <div className="flex items-center gap-1.5 bg-[#12141e] p-1 rounded-xl border border-neutral-800 self-start sm:self-auto">
          {sports.map((sp) => (
            <button
              key={sp}
              onClick={() => setFilterSport(sp)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                filterSport === sp
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {sp}
            </button>
          ))}
        </div>
      </div>

      {/* Match Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMatches.map((match) => (
          <div
            key={match.id}
            onClick={() => onSelectMatchTip(match)}
            className="group relative rounded-2xl bg-[#12141e] border border-neutral-800 hover:border-amber-500/50 p-5 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(245,166,35,0.15)] flex flex-col justify-between cursor-pointer"
          >
            {/* Top Bar with Tournament & Status */}
            <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-800/80">
              <span className="font-bold text-neutral-300 tracking-wider flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                {match.tournament}
              </span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                  match.status === 'LIVE'
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                    : 'bg-neutral-800 text-neutral-300'
                }`}
              >
                {match.time}
              </span>
            </div>

            {/* Teams & Scores/Odds */}
            <div className="py-4 space-y-3">
              {/* Team A */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center font-bold text-xs text-amber-400 border border-neutral-700">
                    {match.teamA.shortName}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition">
                      {match.teamA.name}
                    </h4>
                    {match.teamA.score && (
                      <p className="text-xs text-amber-400 font-mono font-bold">
                        {match.teamA.score}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-neutral-300 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                    Odds {match.teamA.odds.toFixed(2)}
                  </span>
                  <p className="text-[10px] text-neutral-400 mt-1 font-semibold">
                    {match.teamA.winProb}% Win Prob
                  </p>
                </div>
              </div>

              {/* Probability Visual Bar */}
              <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden flex">
                <div
                  className="bg-amber-500 h-full transition-all duration-500"
                  style={{ width: `${match.teamA.winProb}%` }}
                />
                <div
                  className="bg-blue-500 h-full transition-all duration-500"
                  style={{ width: `${match.teamB.winProb}%` }}
                />
              </div>

              {/* Team B */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center font-bold text-xs text-blue-400 border border-neutral-700">
                    {match.teamB.shortName}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition">
                      {match.teamB.name}
                    </h4>
                    {match.teamB.score && (
                      <p className="text-xs text-blue-400 font-mono font-bold">
                        {match.teamB.score}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-neutral-300 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                    Odds {match.teamB.odds.toFixed(2)}
                  </span>
                  <p className="text-[10px] text-neutral-400 mt-1 font-semibold">
                    {match.teamB.winProb}% Win Prob
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Analysis Strip */}
            <div className="pt-3 border-t border-neutral-800/80 bg-black/30 -mx-5 -mb-5 p-4 rounded-b-2xl">
              <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                <span className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <BarChart2 className="w-3 h-3 text-amber-400" />
                  Key Trend Insight
                </span>
                <span className="text-neutral-400">Venue: {match.venue}</span>
              </div>
              <p className="text-xs text-neutral-300 italic">
                "{match.expertTip}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
