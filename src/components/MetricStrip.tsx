import React from 'react';
import { METRICS } from '../data/portfolioData';
import { Timer, TrendingDown, Boxes, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const MetricStrip: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Timer':
        return <Timer className="w-5 h-5 text-brand-cyan" />;
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5 text-brand-emerald" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-brand-amber" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-brand-purple" />;
      default:
        return <Timer className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'hover:border-brand-cyan/50 group-hover:shadow-glow-cyan';
      case 'emerald':
        return 'hover:border-brand-emerald/50 group-hover:shadow-glow-emerald';
      case 'amber':
        return 'hover:border-brand-amber/50';
      case 'purple':
        return 'hover:border-brand-purple/50';
      default:
        return 'hover:border-brand-cyan/50';
    }
  };

  return (
    <section className="py-12 relative z-10 border-y border-brand-border/60 bg-brand-surface/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px 0px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl bg-brand-card/70 border border-brand-border/80 transition-all duration-300 group shadow-card ${getBorderColor(metric.color)}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border group-hover:scale-105 transition-transform">
                  {getIcon(metric.iconName)}
                </div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Métrica Validada
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-mono">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1.5">
                {metric.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
