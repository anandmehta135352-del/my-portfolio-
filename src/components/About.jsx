import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code2, 
  BookOpen, 
  Layers, 
  Target,
  Sparkles,
  MapPin,
  Building
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  User: User,
  GraduationCap: GraduationCap,
  Code2: Code2,
  BookOpen: BookOpen,
  Layers: Layers,
  Target: Target,
};

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            {about.heading || 'About Me'}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            {about.subheading}
          </p>
        </div>

        {/* Narrative Intro Box */}
        <div className="mb-12 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-4 text-slate-300 text-base leading-relaxed">
              {about.bioParagraphs && about.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/70 space-y-3 text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Building className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">College</span>
                  <span className="font-medium text-white">{personal.college}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300 pt-2 border-t border-slate-800/80">
                <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Degree</span>
                  <span className="font-medium text-white">{personal.degree}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300 pt-2 border-t border-slate-800/80">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Location</span>
                  <span className="font-medium text-white">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.highlights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-6 relative group border border-slate-800/80"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
