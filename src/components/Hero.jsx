import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Check, 
  Copy, 
  Sparkles, 
  Code2, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { personal, hero } = portfolioData;

  const handleCopyEmail = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      console.warn('Clipboard write error:', err);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic Background Glows & Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status / Availability Pill */}
            {personal.availableForWork && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium backdrop-blur-sm animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>{hero.badge || 'Available for opportunities'}</span>
              </div>
            )}

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-slate-400 font-medium text-lg sm:text-xl tracking-wide">
                {hero.titlePrefix || "Hi, I'm"}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white">
                <span className="gradient-text">{personal.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span>{personal.role}</span>
              </h2>
            </div>

            {/* Bio Introduction */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.bio || personal.tagline}
            </p>

            {/* Quick College & Location info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {personal.college}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/60 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {personal.location}
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-card text-white hover:bg-slate-800 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-medium text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Copy Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Connect:</span>
              
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="Visit GitHub"
                >
                  <FaGithub className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="Visit LinkedIn"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span className="truncate max-w-[150px] sm:max-w-[200px]">{personal.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Interactive Code / Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-indigo-600/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl glass-card p-5 sm:p-6 overflow-hidden border border-slate-700/60 shadow-2xl">
                {/* Mock Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>DeveloperProfile.jsx</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">React</span>
                </div>

                {/* Code Body */}
                <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-2 text-slate-300">
                  <div>
                    <span className="text-cyan-400">const</span> <span className="text-yellow-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personal.name}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">role:</span> <span className="text-emerald-300">"{personal.role}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">college:</span> <span className="text-emerald-300">"{personal.college}"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">passion:</span> <span className="text-emerald-300">"Building Fast & Scalable Web Apps"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">coreSkills:</span> [
                      <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"TailwindCSS"</span>, <span className="text-cyan-300">"JavaScript"</span>
                      ],
                    </div>
                    <div>
                      <span className="text-slate-400">openToOpportunities:</span> <span className="text-indigo-400">{personal.availableForWork ? 'true' : 'false'}</span>,
                    </div>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Card Quick Feature Bar */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <span className="block text-cyan-400 font-bold text-base sm:text-lg">100%</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Frontend</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <span className="block text-indigo-400 font-bold text-base sm:text-lg">Clean</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Code</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <span className="block text-emerald-400 font-bold text-base sm:text-lg">Fast</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Responsive</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
