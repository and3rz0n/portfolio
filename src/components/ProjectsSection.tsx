import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectDrawer } from './ProjectDrawer';
import { ArrowUpRight, Shield, Box, Monitor, Sparkles, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Todos los Proyectos', count: PROJECTS.length },
    { id: 'enterprise', label: 'Sistemas Corporativos Softys', count: PROJECTS.filter(p => p.category === 'enterprise').length },
    { id: 'web3d', label: 'Desarrollo Web & 3D', count: PROJECTS.filter(p => p.category === 'web3d').length },
    { id: 'bi', label: 'Business Intelligence & Datos', count: PROJECTS.filter(p => p.category === 'bi').length },
    { id: 'tools', label: 'Software Nativo & Herramientas', count: PROJECTS.filter(p => p.category === 'tools').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="proyectos" className="py-24 relative bg-brand-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>CASOS DE ESTUDIO DESTACADOS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyectos & Soluciones en Producción
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-light">
            Suites corporativas desplegadas en plantas industriales, simulación 3D interactiva, software nativo en Rust y tableros de BI.
          </p>
        </motion.div>

        {/* Filter Tabs with animated pill */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-brand-border/60">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'text-slate-950 shadow-glow-cyan'
                    : 'bg-brand-surface text-slate-300 hover:text-white border border-brand-border hover:border-slate-500'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-brand-cyan rounded-xl z-0"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span className={`relative z-10 px-1.5 py-0.5 rounded text-[10px] font-mono ${
                  isActive 
                    ? 'bg-slate-900/30 text-slate-950 font-bold' 
                    : 'bg-brand-card text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-2xl bg-brand-surface/90 border border-brand-border/80 hover:border-brand-cyan/50 p-6 flex flex-col justify-between shadow-card hover:shadow-glow-cyan/20 transition-all duration-300"
              >
                <div>
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-brand-cyan px-2.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 flex items-center gap-1.5">
                      {project.id === 'pallet-calculator-3d' && <Box className="w-3 h-3" />}
                      {project.id === 'filepackager-desktop' && <Monitor className="w-3 h-3" />}
                      {project.category === 'enterprise' && <Building2 className="w-3 h-3" />}
                      <span>{project.categoryLabel}</span>
                    </span>
                    
                    {project.isEnterprise ? (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Shield className="w-3.5 h-3.5 text-brand-emerald" />
                        <span>Softys</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <span>Público</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Highlighted Metrics Chips */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {project.impactMetrics.map((metric, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-brand-card/90 border border-brand-border/60">
                        <div className="text-xs font-bold font-mono text-brand-cyan truncate">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Tech Stack & CTA */}
                <div className="pt-4 border-t border-brand-border/60 flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-brand-card text-[10px] font-mono text-slate-300 border border-brand-border/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-brand-card text-[10px] font-mono text-slate-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200 group-hover:text-brand-cyan pt-1">
                    <span>Ver Ficha Completa</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Slide-over Drawer with spring animation */}
      <ProjectDrawer
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
