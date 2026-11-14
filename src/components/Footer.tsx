import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-brand-bg border-t border-brand-border/80 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center font-mono font-bold text-xs text-brand-cyan">
              AC
            </div>
            <div>
              <span className="font-bold text-slate-200 block">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                Ingeniería de Sistemas • Operaciones & BI
              </span>
            </div>
          </div>

          {/* Center: Tech note */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <Code2 className="w-4 h-4 text-brand-cyan" />
            <span>React 19 • TypeScript • Tailwind CSS • Vite</span>
          </div>

          {/* Right: Back to top & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-400">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-brand-surface hover:bg-brand-card border border-brand-border text-slate-300 hover:text-white transition-all shadow-sm"
              title="Volver arriba"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
