import React, { useState } from 'react';
import { Rocket, Plane, Play, RotateCcw, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

export const AviatorCalculator: React.FC = () => {
  const [targetMultiplier, setTargetMultiplier] = useState<number>(1.5);
  const [betSize, setBetSize] = useState<number>(100);
  const [simulationResults, setSimulationResults] = useState<{
    wins: number;
    losses: number;
    netProfit: number;
    sampleRounds: number[];
  } | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Aviator has 97% theoretical RTP (3% house edge)
  // Mathematical probability of reaching multiplier M: P = 0.97 / M
  const winProbability = Math.min(100, Math.max(0, (0.97 / targetMultiplier) * 100));
  const expectedReturnPerBet = (winProbability / 100) * targetMultiplier * betSize;
  const netExpectedValue = expectedReturnPerBet - betSize;

  const getRiskTier = (m: number) => {
    if (m <= 1.30) return { label: 'Ultra Conservative', color: 'text-emerald-400', desc: 'Frequent wins, low variance, small gains' };
    if (m <= 1.80) return { label: 'Balanced Growth', color: 'text-amber-400', desc: 'Ideal for hedging & sustainable bankroll' };
    if (m <= 3.50) return { label: 'Medium Variance', color: 'text-orange-400', desc: 'Expect frequent 3-4 round losing streaks' };
    return { label: 'High Volatility', color: 'text-rose-400', desc: 'Long dry spells with high breakout multipliers' };
  };

  const risk = getRiskTier(targetMultiplier);

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      let wins = 0;
      let losses = 0;
      let netProfit = 0;
      const sample: number[] = [];

      // Run 50 simulated rounds
      for (let i = 0; i < 50; i++) {
        // Provably fair crash formula simulation (3% instant crash, exponential distribution)
        const rand = Math.random();
        let crashPoint: number;
        if (rand < 0.03) {
          crashPoint = 1.00;
        } else {
          crashPoint = parseFloat((0.97 / (1 - rand + 0.03)).toFixed(2));
          if (crashPoint < 1.00) crashPoint = 1.00;
          if (crashPoint > 100) crashPoint = 100;
        }

        sample.push(crashPoint);

        if (crashPoint >= targetMultiplier) {
          wins++;
          netProfit += (targetMultiplier - 1) * betSize;
        } else {
          losses++;
          netProfit -= betSize;
        }
      }

      setSimulationResults({
        wins,
        losses,
        netProfit,
        sampleRounds: sample.slice(0, 14),
      });
      setIsSimulating(false);
    }, 400);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="relative rounded-2xl bg-gradient-to-br from-[#131520] via-[#0d0f17] to-[#131520] border border-amber-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">
              <Rocket className="w-4 h-4 text-rose-400" />
              <span>Interactive Gaming Math Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch',sans-serif] text-white">
              AVIATOR MULTIPLIER & PROVABLY FAIR CALCULATOR
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
              Understand the exact mathematical probability behind each flight multiplier before setting your auto-cashout parameters.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto bg-black/40 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Based on 97.0% Verified RTP</span>
          </div>
        </div>

        {/* Interactive Controls & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Multiplier Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Target Cashout Multiplier
                </label>
                <span className="text-xl font-black text-amber-400 font-mono">
                  {targetMultiplier.toFixed(2)}x
                </span>
              </div>
              <input
                type="range"
                min="1.05"
                max="10.0"
                step="0.05"
                value={targetMultiplier}
                onChange={(e) => setTargetMultiplier(parseFloat(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1">
                <span>1.05x</span>
                <span>2.00x</span>
                <span>5.00x</span>
                <span>10.00x</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[1.20, 1.45, 1.80, 2.00, 3.50, 5.00].map((val) => (
                  <button
                    key={val}
                    onClick={() => setTargetMultiplier(val)}
                    className={`px-2.5 py-1 rounded text-xs font-bold font-mono transition cursor-pointer ${
                      targetMultiplier === val
                        ? 'bg-amber-400 text-black shadow'
                        : 'bg-neutral-800/80 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    {val.toFixed(2)}x
                  </button>
                ))}
              </div>
            </div>

            {/* Bet Stake Slider (Virtual / Educational) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Simulated Unit Stake
                </label>
                <span className="text-sm font-bold text-neutral-200 font-mono">
                  ₹{betSize}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={betSize}
                onChange={(e) => setBetSize(parseInt(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-neutral-800 rounded-lg"
              />
            </div>

            {/* Run Test Button */}
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 via-amber-500 to-amber-600 text-black font-['Chakra_Petch',sans-serif] font-black text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer flex items-center justify-center gap-2"
            >
              {isSimulating ? (
                <span>Simulating 50 Rounds...</span>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black" />
                  <span>Simulate 50 Rounds with Provably Fair Math</span>
                </>
              )}
            </button>
          </div>

          {/* Mathematical Results Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              
              <div className="p-4 rounded-xl bg-black/40 border border-neutral-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Mathematical Odds
                </p>
                <p className="text-2xl font-black text-amber-400 font-['Chakra_Petch',sans-serif] mt-1">
                  {winProbability.toFixed(1)}%
                </p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  1 in {(100 / winProbability).toFixed(1)} rounds
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-neutral-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Punit Risk Profile
                </p>
                <p className={`text-base font-bold font-['Chakra_Petch',sans-serif] mt-1 ${risk.color}`}>
                  {risk.label}
                </p>
                <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                  {risk.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-neutral-800 col-span-2 sm:col-span-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Target Payout
                </p>
                <p className="text-2xl font-black text-white font-mono mt-1">
                  ₹{(betSize * targetMultiplier).toFixed(0)}
                </p>
                <p className="text-[11px] text-emerald-400 mt-1">
                  +₹{(betSize * (targetMultiplier - 1)).toFixed(0)} net
                </p>
              </div>

            </div>

            {/* Simulation Feedback Strip */}
            {simulationResults ? (
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-amber-500/30 space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-400 uppercase tracking-wider">
                    50-Round Test Results:
                  </span>
                  <span className={`font-mono font-bold ${simulationResults.netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    Net Result: {simulationResults.netProfit >= 0 ? '+' : ''}₹{simulationResults.netProfit.toFixed(0)}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-300">
                  <span>Hits: <strong className="text-emerald-400">{simulationResults.wins}</strong> / 50</span>
                  <span>Misses: <strong className="text-rose-400">{simulationResults.losses}</strong> / 50</span>
                  <span>Realized Hit Rate: <strong>{((simulationResults.wins / 50) * 100).toFixed(0)}%</strong></span>
                </div>

                {/* Sample round ribbon */}
                <div>
                  <p className="text-[10px] text-neutral-400 mb-1.5 uppercase tracking-wider font-semibold">
                    Simulated Multipliers Sequence (First 14 rounds):
                  </p>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {simulationResults.sampleRounds.map((rnd, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 rounded font-bold ${
                          rnd >= targetMultiplier
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {rnd.toFixed(2)}x
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-dashed border-neutral-800 text-center text-xs text-neutral-400 flex flex-col items-center justify-center py-6">
                <Plane className="w-6 h-6 text-neutral-600 mb-2" />
                <span>Click "Simulate 50 Rounds" above to test theoretical outcomes against real variance.</span>
              </div>
            )}

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-[11px] text-neutral-400 pt-1">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Educational demonstration only. Past rounds do not dictate future outcomes under Provably Fair random seeds.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
