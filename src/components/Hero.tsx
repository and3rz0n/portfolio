import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting - Ultra-optimized CSS radial gradients (Zero GPU blur penalty) */}
      <div className="absolute inset-0 hero-glow-cyan pointer-events-none" />
      <div className="absolute inset-0 hero-glow-emerald pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Top Pill / Role Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs font-mono text-brand-cyan mb-5 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span>Ingeniería de Sistemas • Operaciones, BI & 3D</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Transformo procesos <br className="hidden sm:inline" />
              operativos en <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-emerald">
                soluciones digitales claras.
              </span>
            </h1>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-light">
              Soy <strong className="text-white font-medium">Anderson Cabanillas</strong>. Ingeniero de Sistemas especializado en 
              conectar la realidad del piso de operaciones con la tecnología: 
              <span className="text-brand-cyan font-medium"> control de inventarios y almacenes (Softys Perú)</span>, 
              <span className="text-brand-emerald font-medium"> simulación 3D & tableros en Power BI</span> y 
              <span className="text-white font-medium"> aplicaciones web ágiles y software de alto rendimiento</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#proyectos"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-sky-500 hover:from-sky-400 hover:to-brand-cyan text-slate-950 font-semibold text-sm shadow-glow-cyan hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Ver Proyectos Destacados</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-surface hover:bg-brand-card text-slate-200 border border-brand-border hover:border-slate-600 font-medium text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.thesisUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-brand-surface/60 hover:bg-brand-surface text-slate-400 hover:text-brand-emerald border border-brand-border/60 font-mono text-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                title="Tesis de Grado UCV sobre Data Marts"
              >
                <span>Tesis UCV</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>

            {/* Quick Tech Badges */}
            <div className="pt-6 border-t border-brand-border/70 w-full">
              <span className="text-xs uppercase font-mono text-slate-400 tracking-wider block mb-3">
                Ecosistema Tecnológico de Producción
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'React 19', 
                  'TypeScript', 
                  'Three.js 3D',
                  'Rust & Tauri',
                  'Power BI', 
                  'PostgreSQL', 
                  'Supabase', 
                  'SAP ERP', 
                  'Gobernanza de IA'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-brand-surface border border-brand-border/70 text-slate-300 font-mono text-xs hover:border-brand-cyan/40 hover:text-brand-cyan transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Industrial System Terminal Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 w-full gpu-layer"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame without GPU-heavy blur */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-cyan/30 to-brand-emerald/30 rounded-2xl opacity-50 pointer-events-none"></div>
              
              <div className="relative rounded-2xl bg-brand-surface border border-brand-border shadow-xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-brand-card border-b border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <span className="ml-2 font-mono text-[11px] text-slate-400">monitoreo-operaciones.live</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded border border-brand-emerald/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse"></span>
                    <span>EN EJECUCIÓN</span>
                  </div>
                </div>

                {/* Terminal Body with Easy-to-understand Terminology */}
                <div className="p-5 font-mono text-xs space-y-4 text-slate-300 bg-brand-bg/95">
                  
                  {/* Prompt Line */}
                  <div className="flex items-center gap-2 text-slate-400 border-b border-brand-border/40 pb-2">
                    <span className="text-brand-cyan">$</span>
                    <span className="text-slate-100">resumen_indicadores --estado=activo</span>
                  </div>

                  {/* Metric 1: Data Mart Tesis UCV - Velocidad de Datos */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-brand-card/90 border border-brand-border/70 flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Data Mart & BI — Tesis de Grado UCV</span>
                      <span className="text-brand-cyan font-bold text-xs sm:text-sm">Consultas 52.1% más rápidas (70.4s ➔ 33.7s)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan text-[10px] sm:text-[11px] border border-brand-cyan/30 font-semibold shrink-0 ml-2">
                      p &lt; 0.05
                    </span>
                  </div>

                  {/* Metric 2: Control Presupuestal Tesis UCV - Precisión Financiera */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-brand-card/90 border border-brand-border/70 flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Control Presupuestal de Obras — Tesis UCV</span>
                      <span className="text-brand-emerald font-bold text-xs sm:text-sm">Error reducido de 23.7% a 2.28% (RAE)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-brand-emerald/15 text-brand-emerald text-[10px] sm:text-[11px] border border-brand-emerald/30 font-semibold shrink-0 ml-2">
                      ALTA PRECISIÓN
                    </span>
                  </div>

                  {/* Metric 3: Portal Operativo Softys - 12 Módulos en Planta */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-brand-card/90 border border-brand-border/70 flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Portal Operativo de Planta — Softys Perú</span>
                      <span className="text-white font-bold text-xs sm:text-sm">12 módulos en producción (TPM por voz, Asistencia SAP)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-500/15 text-sky-300 text-[10px] sm:text-[11px] border border-sky-500/30 font-semibold shrink-0 ml-2">
                      PLANTA INDUSTRIAL
                    </span>
                  </div>

                  {/* Metric 4: Auditoría de Fletes y Descuentos */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-brand-card/90 border border-brand-border/70 flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Liquidación de Fletes & Descuentos — Softys Perú</span>
                      <span className="text-brand-emerald font-bold text-xs sm:text-sm">Cálculo de penalidades diario 100% digital</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-brand-emerald/15 text-brand-emerald text-[10px] sm:text-[11px] border border-brand-emerald/30 font-semibold shrink-0 ml-2">
                      AUTOMATIZADO
                    </span>
                  </div>

                  {/* Active Services Status in clear language */}
                  <div className="pt-1.5 text-[11px] text-slate-400 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                        <span>Conexión directa con ERP SAP (Python/VBScript)</span>
                      </span>
                      <span className="text-slate-400 font-mono">ACTIVO</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                        <span>Simulador 3D interactivo de cubicaje de carga</span>
                      </span>
                      <span className="text-slate-400 font-mono">THREE.JS</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                        <span>SLA liquidación de gastos de transporte</span>
                      </span>
                      <span className="text-brand-emerald font-mono">&le; 7 DÍAS</span>
                    </div>
                  </div>

                  {/* Terminal Footer info */}
                  <div className="pt-2 border-t border-brand-border/40 text-[10px] text-slate-400 flex items-center justify-between">
                    <span>Softys &bull; Lima, Perú</span>
                    <span className="text-brand-cyan">Sistemas en Producción</span>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
