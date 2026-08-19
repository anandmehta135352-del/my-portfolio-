import React from 'react';
import { 
  Code2, 
  Layout, 
  Wrench, 
  FileCode, 
  Sparkles,
  Layers,
  Terminal,
  Cpu
} from 'lucide-react';
import { 
  FaJs, 
  FaPython, 
  FaJava, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa6';
import { 
  SiCplusplus, 
  SiTailwindcss 
} from 'react-icons/si';
import { portfolioData } from '../data/portfolio';

const categoryIconMap = {
  Languages: FileCode,
  Frontend: Layout,
  'Tools & Workflow': Wrench,
  Tools: Wrench,
};

const skillIconMap = {
  JavaScript: FaJs,
  Python: FaPython,
  Java: FaJava,
  'C++': SiCplusplus,
  React: FaReact,
  'Tailwind CSS': SiTailwindcss,
  HTML5: FaHtml5,
  HTML: FaHtml5,
  CSS3: FaCss3Alt,
  CSS: FaCss3Alt,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'VS Code': Terminal,
  Figma: FaFigma,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A curated overview of the core programming languages, frameworks, and developer tools I build with.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((cat, idx) => {
            const CategoryIcon = categoryIconMap[cat.category] || Layers;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description || `${cat.items.length} technologies`}
                      </p>
                    </div>
                  </div>

                  {/* Skill Items List */}
                  <div className="space-y-3">
                    {cat.items.map((skill, sIdx) => {
                      const SkillIcon = skillIconMap[skill.name] || Code2;
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:bg-cyan-950/30 transition-colors text-base">
                              <SkillIcon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold text-slate-200 group-hover:text-white">
                              {skill.name}
                            </span>
                          </div>
                          {skill.level && (
                            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/50 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Category Footer Note */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Verified Experience</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
