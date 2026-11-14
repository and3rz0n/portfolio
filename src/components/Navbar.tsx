import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Enfoque', href: '#enfoque' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Casos de Estudio', href: '#proyectos' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-bg/85 backdrop-blur-md border-b border-brand-border/60 py-3.5 shadow-card' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#" 
            className="group flex items-center gap-3 text-slate-100 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center font-mono font-bold text-sm text-brand-cyan group-hover:border-brand-cyan/60 group-hover:shadow-glow-cyan transition-all duration-300">
              <span className="text-brand-cyan">A</span>
              <span className="text-brand-emerald">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                {PERSONAL_INFO.preferredName}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Ingeniero de Sistemas
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-brand-surface/70 px-3 py-1.5 rounded-full border border-brand-border/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-brand-border/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-[11px] text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              <span>Lima, PE</span>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 text-xs font-semibold hover:shadow-glow-cyan transition-all"
            >
              <span>Hablemos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-surface border border-brand-border text-slate-300 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-brand-surface border border-brand-border/80 shadow-2xl backdrop-blur-xl animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-brand-cyan hover:bg-brand-card rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-brand-border flex flex-col gap-2">
                <a
                  href="#contacto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-brand-cyan text-slate-950 font-semibold text-xs transition-colors"
                >
                  Contactar Directamente
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
