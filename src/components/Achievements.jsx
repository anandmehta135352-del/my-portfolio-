import React from 'react';
import { Award, Trophy, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Achievements() {
  const { achievements } = portfolioData;

  // Render ONLY if achievements are configured in portfolio.js
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Achievements & Recognition
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Milestones, hackathons, and certifications achieved throughout my learning journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </div>
                  {item.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-cyan-400 font-medium mb-3">
                  {item.organization} {item.year && `• ${item.year}`}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
