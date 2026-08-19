import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Glow Accent */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            My academic foundation, relevant computer science coursework, and scholastic milestones.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800/90 pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-12">
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-glow-cyan" />

              {/* Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 group-hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  {item.period && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-300 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  )}
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 mb-4 font-medium">
                  <span className="text-cyan-400 font-semibold">{item.institution}</span>
                  {item.location && (
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  )}
                  {item.grade && (
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                      {item.grade}
                    </span>
                  )}
                </div>

                {/* Description / Coursework */}
                {item.description && (
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                    {item.description}
                  </p>
                )}

                {/* Achievements Bullet List */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Highlights & Activities
                    </span>
                    <ul className="space-y-2">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
