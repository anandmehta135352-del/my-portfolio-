import React, { useState } from 'react';
import { 
  Mail, 
  Phone,
  MapPin, 
  Send, 
  CheckCircle, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Mail: Mail,
  Phone: Phone,
  Github: FaGithub,
  Linkedin: FaLinkedinIn,
  MapPin: MapPin,
};

export default function Contact() {
  const { contact, personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: 'Anand kumar',
    email: 'anandmehta135352@gmail.com',
    subject: 'B-tech CSE',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate brief smooth UI handling (100% frontend only)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: 'Anand kumar',
      email: 'anandmehta135352@gmail.com',
      subject: 'B-tech CSE',
      message: '',
    });
    setSubmitted(false);
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            {contact.title || "Let's Connect"}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            {contact.subtitle || "Have a question, collaboration idea, or internship opportunity? Feel free to reach out directly."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white font-display mb-2">
              Contact Channels
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              You can reach me directly via email, connect on professional networks, or check out my repositories.
            </p>

            <div className="space-y-3">
              {contact.directChannels.map((ch, idx) => {
                const IconComp = iconMap[ch.icon] || Mail;
                const isLink = ch.href && ch.href !== '#';
                
                return (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-4 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-950/30 transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-400 block">{ch.label}</span>
                        <span className="text-sm font-semibold text-slate-200 group-hover:text-white break-all">
                          {ch.value}
                        </span>
                      </div>
                    </div>

                    {isLink ? (
                      <a
                        href={ch.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                        title={ch.actionText || ch.label}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : ch.label === 'Email' ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors"
                        title="Copy email address"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>

            {/* Quick Email Copy Box */}
            <div className="glass-card p-5 rounded-2xl border border-slate-800/80 mt-6 text-center space-y-3">
              <span className="text-xs text-slate-400 block">Direct Email Address</span>
              <div className="flex items-center justify-center gap-2">
                <span className="font-mono text-xs sm:text-sm text-cyan-300 font-medium">
                  {personal.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 hover:bg-cyan-500/20 transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Frontend Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Send a Message
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">
                Fill out the fields below to leave a note or trigger an instant email draft.
              </p>

              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Thank You, {formData.name || 'Friend'}!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your message draft has been prepared. You can also send this directly via your email client.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail Client</span>
                    </a>
                    
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Anand kumar"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="anandmehta135352@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="B-tech CSE"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Alex, I came across your portfolio and would like to talk about..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
