import React, { useEffect } from 'react';
import type { Project } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Cpu, BarChart2, AlertCircle, Building2 } from 'lucide-react';

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Slide-over Content Panel */}
          <motion.aside 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-brand-surface border-l border-brand-border h-full overflow-y-auto shadow-2xl z-10 flex flex-col justify-between"
          >
            <div>
              {/* Header Bar */}
              <div className="sticky top-0 bg-brand-surface/95 backdrop-blur-md px-6 py-4 border-b border-brand-border flex items-center justify-between z-20">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-brand-card border border-brand-border text-brand-cyan font-mono text-xs">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-[11px] font-mono">
                    {project.status}
                  </span>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-brand-card border border-brand-border text-slate-400 hover:text-white hover:bg-brand-border transition-colors cursor-pointer"
                  aria-label="Cerrar panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body Content */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Title & Context */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <Building2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{project.companyOrContext}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm font-medium text-slate-300">
                    {project.subtitle}
                  </p>
                </div>

                {/* Impact Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.impactMetrics.map((metric, i) => (
                    <div key={i} className="p-4 rounded-xl bg-brand-card border border-brand-border/80">
                      <span className="text-[11px] font-mono text-slate-400 block mb-1">
                        {metric.label}
                      </span>
                      <div className="text-xl font-bold font-mono text-brand-cyan mb-1">
                        {metric.value}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight font-light">
                        {metric.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* The Problem (El Desafío Operativo) */}
                <div className="p-5 rounded-2xl bg-brand-card/60 border border-brand-border/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>El Desafío / Necesidad del Negocio</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {project.problem}
                  </p>
                </div>

                {/* The Solution (La Solución de Software) */}
                <div className="p-5 rounded-2xl bg-brand-card/60 border border-brand-border/70 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-emerald uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>La Solución Desarrollada</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {project.solution}
                  </p>
                </div>

                {/* Key Features List */}
                <div>
                  <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-brand-cyan" />
                    <span>Funcionalidades & Capacidades Clave</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Highlights */}
                <div>
                  <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-3 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-brand-emerald" />
                    <span>Detalles de Arquitectura & Base de Datos</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {project.architectureHighlights.map((arch, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0 mt-1.5"></span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs uppercase font-mono text-slate-400 tracking-wider block mb-2.5">
                    Stack Tecnológico del Proyecto
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-brand-card border border-brand-border text-slate-200 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Context & Confidentiality note */}
                <div className="p-4 rounded-xl bg-brand-card border border-brand-border/60 text-xs text-slate-400 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-0.5">
                      {project.isEnterprise ? "Proyecto Corporativo en Producción" : "Proyecto Público / Investigación"}
                    </strong>
                    <p className="leading-relaxed">
                      {project.isEnterprise 
                        ? "Desplegado en la infraestructura operativa de Softys Perú S.A.C. Código fuente, esquemas internos y credenciales resguardados bajo estricto acuerdo de confidencialidad (NDA)."
                        : "Código e investigación accesible con fines de validación técnica y académica."}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="sticky bottom-0 bg-brand-surface/95 backdrop-blur-md px-6 py-4 border-t border-brand-border flex items-center justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-brand-card hover:bg-brand-border text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                Cerrar Ficha
              </button>

              {project.paperUrl && (
                <a
                  href={project.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan hover:bg-sky-400 text-slate-950 font-semibold text-xs shadow-glow-cyan transition-all"
                >
                  <span>Ver Tesis en Repositorio UCV</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan hover:bg-sky-400 text-slate-950 font-semibold text-xs shadow-glow-cyan transition-all"
                >
                  <span>Ver en GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
