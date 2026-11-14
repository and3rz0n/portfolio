import React from 'react';
import { CORE_PILLARS } from '../data/portfolioData';
import { Boxes, BarChart3, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const CorePillars: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-brand-amber" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-brand-cyan" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-emerald" />;
      default:
        return <Code2 className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section id="enfoque" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan mb-4">
            <span>MI VENTAJA COMPETITIVA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            El Tridente Operativo: Donde el Terreno y el Código se Encuentran
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            La mayoría de desarrolladores nunca han pisado un centro de distribución, y la mayoría de operadores logísticos no programan software empresarial. Yo hablo ambos idiomas con soltura.
          </p>
        </motion.div>

        {/* 3 Pillars Grid with Staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative rounded-2xl bg-brand-surface/70 border border-brand-border/80 p-8 flex flex-col justify-between hover:border-slate-500 hover:bg-brand-card/90 transition-all duration-300 group shadow-card"
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {pillar.title}
                </h3>
                <div className="text-xs font-mono text-brand-cyan/90 mb-4">
                  {pillar.subtitle}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Badges */}
              <div className="pt-6 border-t border-brand-border/60">
                <div className="flex flex-wrap gap-2">
                  {pillar.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-1 rounded-md bg-brand-card border border-brand-border/70 text-[11px] font-mono text-slate-300"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
