import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Wrench, 
  FileCode, 
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  Grid,
  CheckCircle2
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

const skillDetailsMap = {
  C: { icon: SiCplusplus, color: '#A8B9CC', percentage: 80, level: 'Proficient' },
  'C++': { icon: SiCplusplus, color: '#00599C', percentage: 80, level: 'Proficient' },
  Python: { icon: FaPython, color: '#3776AB', percentage: 65, level: 'Basics' },
  HTML5: { icon: FaHtml5, color: '#E34F26', percentage: 95, level: 'Advanced' },
  HTML: { icon: FaHtml5, color: '#E34F26', percentage: 95, level: 'Advanced' },
  CSS3: { icon: FaCss3Alt, color: '#1572B6', percentage: 90, level: 'Advanced' },
  CSS: { icon: FaCss3Alt, color: '#1572B6', percentage: 90, level: 'Advanced' },
  Git: { icon: FaGitAlt, color: '#F05032', percentage: 85, level: 'Proficient' },
  GitHub: { icon: FaGithub, color: '#FFFFFF', percentage: 88, level: 'Proficient' },
  'VS Code': { icon: Terminal, color: '#007ACC', percentage: 90, level: 'Proficient' },
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  // Gather all unique skills into a single array for "All" tab view
  const allSkills = skills.flatMap(cat => 
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  const displayedSkills = activeCategory === 'All'
    ? skills
    : skills.filter(cat => cat.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A curated overview of the programming languages, frontend frameworks, and developer tools I use.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === 'All'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              All Categories
            </button>
            {skills.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.category
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedSkills.map((cat, idx) => {
            const CategoryIcon = categoryIconMap[cat.category] || Layers;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-4 mb-5 border-b border-slate-800/80">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300 shadow-glow-cyan/30">
                      <CategoryIcon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description || `${cat.items.length} technologies`}
                      </p>
                    </div>
                  </div>

                  {/* Skill Items List with Brand Colors & Progress Bars */}
                  <div className="space-y-4">
                    {cat.items.map((skill, sIdx) => {
                      const details = skillDetailsMap[skill.name] || {
                        icon: Code2,
                        color: '#38BDF8',
                        percentage: 80,
                        level: skill.level || 'Proficient'
                      };
                      const SkillIcon = details.icon;

                      return (
                        <div
                          key={sIdx}
                          className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-200 space-y-2.5 group/item"
                        >
                          {/* Skill Name & Brand Icon */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-900 border border-slate-800 group-hover/item:border-slate-700 transition-all text-lg"
                                style={{ color: details.color }}
                              >
                                <SkillIcon className="w-5 h-5" />
                              </div>
                              <div>
                                <span className="text-sm font-semibold text-slate-200 group-hover/item:text-white block">
                                  {skill.name}
                                </span>
                                <span className="text-[11px] text-slate-400 block">
                                  {skill.level || details.level}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-cyan-400">
                              {details.percentage}%
                            </span>
                          </div>

                          {/* Skill Visual Progress Bar */}
                          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800/60">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500 group-hover/item:from-cyan-400 group-hover/item:to-indigo-400"
                              style={{ width: `${details.percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Category Footer Note */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Verified Skillset</span>
                  </span>
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
