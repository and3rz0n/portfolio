import React, { useState } from 'react';
import { SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolioData';
import { Layers, Award, Terminal, Smartphone, ShieldCheck, ExternalLink } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="habilidades" className="py-20 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-emerald mb-4">
              <span>HABILIDADES & COMPETENCIAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Especialidades Técnicas & Enfoque de Trabajo
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-light">
            Un resumen de las herramientas, lenguajes y metodologías que utilizo para crear soluciones que funcionan en el mundo real.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Interactive Skill Matrix (Cols 7 on Desktop) */}
          <div className="md:col-span-7 rounded-3xl bg-brand-surface/80 border border-brand-border/90 p-7 flex flex-col justify-between shadow-card hover:border-slate-500 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-brand-cyan">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Habilidades por Área
                    </h3>
                    <p className="text-xs text-slate-400">
                      Haz clic en cada categoría para ver las herramientas principales
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <button
                    key={cat.title}
                    onClick={() => setActiveCategory(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeCategory === idx
                        ? 'bg-brand-cyan text-slate-950 font-semibold shadow-glow-cyan'
                        : 'bg-brand-card text-slate-300 hover:text-white border border-brand-border'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>

              {/* Category Description */}
              <p className="text-xs font-mono text-brand-cyan/80 mb-4">
                &gt; {SKILL_CATEGORIES[activeCategory].description}
              </p>

              {/* Skills Tags Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs transition-colors ${
                      skill.highlight
                        ? 'bg-brand-card/90 border-brand-cyan/40 text-white'
                        : 'bg-brand-card/50 border-brand-border/60 text-slate-300'
                    }`}
                  >
                    <span className="font-medium flex items-center gap-2">
                      {skill.highlight && <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>}
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-brand-surface border border-brand-border">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Herramientas aplicadas en entornos reales de trabajo</span>
              <span className="text-brand-emerald">Activo</span>
            </div>
          </div>

          {/* Card 2: Scientific Research & UCV Thesis (Cols 5 on Desktop) */}
          <div className="md:col-span-5 rounded-3xl bg-gradient-to-br from-brand-surface via-brand-card to-brand-surface border border-brand-border/90 p-7 flex flex-col justify-between shadow-card hover:border-brand-emerald/50 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-emerald">
                  <Award className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-[11px] font-mono font-medium">
                  Tesis Publicada 2024
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-emerald transition-colors">
                Investigación en Inteligencia de Negocios
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light mb-5">
                Proyecto de titulación universitaria: creación de un repositorio de datos analítico (Data Mart) en PostgreSQL y tableros en Power BI para el control y seguimiento de obras y proyectos.
              </p>

              {/* Research Metric Chips */}
              <div className="space-y-2 font-mono text-xs mb-6">
                <div className="p-2.5 rounded-xl bg-brand-bg/90 border border-brand-border flex items-center justify-between">
                  <span className="text-slate-400">Muestra Analizada:</span>
                  <span className="text-white font-semibold">240 Proyectos Reales</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-bg/90 border border-brand-border flex items-center justify-between">
                  <span className="text-slate-400">Tiempo de Consulta:</span>
                  <span className="text-brand-emerald font-semibold">52% Más Rápido (33.7s)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-bg/90 border border-brand-border flex items-center justify-between">
                  <span className="text-slate-400">Satisfacción de Usuarios:</span>
                  <span className="text-brand-cyan font-semibold">76% Muy Satisfechos</span>
                </div>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.thesisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-brand-surface hover:bg-brand-border text-slate-200 text-xs font-semibold border border-brand-border transition-colors group-hover:border-brand-emerald/40"
            >
              <span>Leer en Repositorio Institucional UCV</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-emerald" />
            </a>
          </div>

          {/* Card 3: Philosophy / Engineering Mindset (Cols 4) */}
          <div className="md:col-span-4 rounded-3xl bg-brand-surface/80 border border-brand-border/90 p-7 flex flex-col justify-between shadow-card hover:border-slate-500 transition-all">
            <div>
              <div className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-brand-amber w-fit mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Del Problema Real a la Solución
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                Mi experiencia en planta me permite identificar de primera mano qué retrasa al equipo: registros manuales, hojas extraviadas o datos desactualizados. Construyo herramientas que simplifican el día a día del operador y del directivo.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-brand-card border border-brand-border/60 text-[11px] font-mono text-slate-300">
              <span className="text-brand-amber">🎯 Criterio:</span> &ldquo;Una buena herramienta debe ser intuitiva, rápida y no requerir manuales complicados para usarse.&rdquo;
            </div>
          </div>

          {/* Card 4: Mobile & Industrial PWA UX (Cols 4) - SIMPLIFIED TEXT */}
          <div className="md:col-span-4 rounded-3xl bg-brand-surface/80 border border-brand-border/90 p-7 flex flex-col justify-between shadow-card hover:border-slate-500 transition-all">
            <div>
              <div className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-brand-cyan w-fit mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Diseñado para Celulares y Planta
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                Las aplicaciones que construyo están pensadas para usarse en el trabajo de campo con cualquier teléfono o terminal móvil:
              </p>
              <ul className="text-xs text-slate-300 space-y-2 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                  <span>Botones amplios y cómodos, aptos para uso en piso de almacén.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                  <span>Navegación estable y sin desajustes molestos al escribir en pantalla.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                  <span>Carga rápida y funcionamiento ágil incluso con señal débil de internet.</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-brand-border/60">
              Probado en smartphones y terminales industriales
            </div>
          </div>

          {/* Card 5: Quality Assurance & SOP Governance (Cols 4) */}
          <div className="md:col-span-4 rounded-3xl bg-brand-surface/80 border border-brand-border/90 p-7 flex flex-col justify-between shadow-card hover:border-slate-500 transition-all">
            <div>
              <div className="p-2.5 rounded-xl bg-brand-card border border-brand-border text-brand-purple w-fit mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Calidad, Pruebas & Estandarización
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                Aseguramiento de que cada sistema cumpla con estándares de calidad y procesos documentados:
              </p>
              <ul className="text-xs text-slate-300 space-y-2 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                  <span>Elaboración de manuales y procedimientos operativos estándar (SOPs).</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                  <span>Pruebas rigurosas previas para garantizar que no haya fallas en producción.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                  <span>Capacitación clara al personal operativo para adopción inmediata.</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-brand-border/60">
              Procesos ordenados y trazabilidad total
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
