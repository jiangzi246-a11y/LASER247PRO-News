import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the purpose of the Laser247 Pro News & Blog platform?',
      a: 'This platform serves as an independent sports media, statistical analysis, and gaming strategy resource. We publish match previews, pitch reports, game mechanics breakdowns (like Aviator and Roulette odds), and responsible gaming guides without real-money wagering or payment processing on this domain.'
    },
    {
      q: 'How does the Aviator crash game algorithm determine multiplier payouts?',
      a: 'Aviator operates on a cryptographic Provably Fair algorithm. The outcome of each round is generated via an SHA512 hash combining a server seed with client seeds provided by active players. This mathematical model guarantees that outcomes cannot be altered or predicted in advance.'
    },
    {
      q: 'How do UPI, Paytm, and PhonePe instant withdrawals function?',
      a: 'When an authorized payout is initiated on gaming platforms, the request is dispatched via the NPCI (National Payments Corporation of India) IMPS clearing network. Funds typically reflect directly in the user’s registered bank account in 5 to 30 minutes, provided KYC names match.'
    },
    {
      q: 'What should I consider when assessing 100% deposit bonuses and cashback?',
      a: 'Always check the wagering turnover multiplier (e.g., 10x or 15x), eligible minimum odds (typically 1.50 or higher), eligible games (slots usually contribute 100%, table games 10-20%), and expiration windows before participating in promotional offers.'
    },
    {
      q: 'What responsible gaming safeguards exist for players?',
      a: 'Regulated entertainment platforms offer daily deposit limits, cooling-off periods, reality-check session timers, and permanent self-exclusion options. Participation is strictly restricted to individuals aged 18 and older.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="rounded-2xl bg-[#11131c] border border-neutral-800 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>SEO Knowledge Base & FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch',sans-serif] text-white mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
              Verified answers to the most common queries regarding odds, payout speeds, and game rules.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/30 text-xs text-amber-400 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4" />
            <span>Schema FAQPage Optimized</span>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border border-neutral-800/80 rounded-xl bg-neutral-900/60 overflow-hidden transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-neutral-200 hover:text-amber-400 transition cursor-pointer"
              >
                <span>{item.q}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-300 border-t border-neutral-800/60 pt-3 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
