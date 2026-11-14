import React, { useState } from 'react';
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles, Shield, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ExperienceTimeline: React.FC = () => {
  const [certFilter, setCertFilter] = useState<'all' | 'ai' | 'management'>('all');

  const filteredCerts = certFilter === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === certFilter);

  return (
    <section id="trayectoria" className="py-24 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-emerald mb-4">
            <span>TRAYECTORIA & FORMACIÓN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Experiencia Laboral & Formación Continua
          </h2>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            Una trayectoria de más de 8 años en operaciones de gran escala combinada con formación de vanguardia en inteligencia artificial y metodologías ágiles.
          </p>
        </motion.div>

        {/* Top Block: Work Experience & Academic Education (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Column: Work Experience (Cols 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-cyan">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Experiencia Laboral
              </h3>
            </div>

            <div className="relative border-l border-brand-border/80 pl-6 sm:pl-8 space-y-10 ml-3">
              {WORK_EXPERIENCE.map((exp, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "200px 0px" }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-card border-2 border-brand-cyan group-hover:bg-brand-cyan transition-colors" />

                  <div className="p-6 sm:p-7 rounded-2xl bg-brand-surface/80 border border-brand-border/80 shadow-card hover:border-slate-500 transition-all">
                    
                    {/* Role & Company */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {exp.role}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan font-mono text-xs">
                        {exp.company}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Academic Highlights (Cols 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-emerald">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Formación Académica
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "200px 0px" }}
                  transition={{ duration: 0.35 }}
                  className="p-7 rounded-2xl bg-brand-surface/80 border border-brand-border/80 shadow-card"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-brand-emerald px-2 py-0.5 rounded bg-brand-emerald/10 border border-brand-emerald/20">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-sm text-slate-300 font-medium mb-4">
                    {edu.institution}
                  </div>

                  <div className="p-4 rounded-xl bg-brand-card/70 border border-brand-border/60 mb-5">
                    <span className="text-[11px] font-mono text-brand-cyan block mb-1">
                      Tesis de Grado Publicada
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      &ldquo;Implementación de un Data Mart para el proceso de control de obras en una empresa de telecomunicaciones&rdquo;.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-brand-emerald flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{edu.status}</span>
                    </span>

                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-cyan transition-colors underline underline-offset-4"
                    >
                      Ver en Repositorio UCV
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* Extra Professional Note Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-surface to-brand-card border border-brand-border/80 shadow-card text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-brand-cyan font-mono text-xs font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>Enfoque Profesional & Actualización</span>
                </div>
                <p className="font-light leading-relaxed">
                  Complemento la experiencia operativa en planta con investigación continua en nuevas tecnologías: modelos de lenguaje, automatización con agentes de IA y gobernanza de datos para empresas.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Block: Certifications & Continuous Learning (Full Width - ZERO SCROLLBAR) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px 0px" }}
          transition={{ duration: 0.4 }}
          className="pt-10 border-t border-brand-border/60"
        >
          {/* Header of Certifications */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-amber">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Certificaciones & Especialización Continua
                </h3>
                <p className="text-xs text-slate-400 font-light">
                  Acreditaciones verificadas en Inteligencia Artificial, Metodologías Ágiles y Redes
                </p>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCertFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  certFilter === 'all'
                    ? 'bg-brand-cyan text-slate-950 font-semibold shadow-glow-cyan'
                    : 'bg-brand-surface text-slate-300 hover:text-white border border-brand-border'
                }`}
              >
                Todas ({CERTIFICATIONS.length})
              </button>
              <button
                onClick={() => setCertFilter('ai')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  certFilter === 'ai'
                    ? 'bg-brand-cyan text-slate-950 font-semibold shadow-glow-cyan'
                    : 'bg-brand-surface text-slate-300 hover:text-white border border-brand-border'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>IA & Cloud ({CERTIFICATIONS.filter(c => c.category === 'ai').length})</span>
              </button>
              <button
                onClick={() => setCertFilter('management')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  certFilter === 'management'
                    ? 'bg-brand-cyan text-slate-950 font-semibold shadow-glow-cyan'
                    : 'bg-brand-surface text-slate-300 hover:text-white border border-brand-border'
                }`}
              >
                Gestión & Redes ({CERTIFICATIONS.filter(c => c.category === 'management').length})
              </button>
            </div>
          </div>

          {/* Clean 3-Column Responsive Grid without any scrollbar */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence>
              {filteredCerts.map((cert) => (
                <motion.div
                  key={cert.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="p-5 rounded-2xl bg-brand-surface/80 border border-brand-border/80 hover:border-slate-500 hover:bg-brand-card/90 transition-all shadow-card flex flex-col justify-between"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-cyan">
                        {cert.type}
                      </span>
                      {cert.category === 'ai' && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-brand-emerald">
                          <Sparkles className="w-3 h-3" />
                          <span>Verificado</span>
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors leading-snug mb-1">
                      {cert.name}
                    </h4>
                  </div>

                  <div className="text-xs text-slate-400 font-light flex items-center justify-between pt-3 border-t border-brand-border/50">
                    <span>{cert.issuer}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
