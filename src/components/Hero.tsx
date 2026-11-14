import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background radial gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.18, 0.12]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-brand-cyan/15 blur-[140px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.16, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-brand-emerald/15 blur-[150px] rounded-full pointer-events-none" 
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Top Pill / Role Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs font-mono text-brand-cyan mb-6 shadow-sm"
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

          {/* Right Column: Industrial System Terminal Preview with gentle hover animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame with neon glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/25 to-brand-emerald/25 rounded-2xl blur-lg opacity-60"></div>
              
              <div className="relative rounded-2xl bg-brand-surface border border-brand-border shadow-2xl overflow-hidden">
                
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

                  {/* Operational Metric 1: Montacargas & Baterías */}
                  <div className="p-3 rounded-lg bg-brand-card/90 border border-brand-border/70 flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Flota de Montacargas & Baterías</span>
                      <span className="text-white font-bold text-sm">21 Bahías con Carga Inteligente</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-brand-emerald/15 text-brand-emerald text-[11px] border border-brand-emerald/30 font-semibold">
                      ROTACIÓN ÓPTIMA
                    </span>
                  </div>

                  {/* Operational Metric 2: Consultas de datos */}
                  <div className="p-3 rounded-lg bg-brand-card/90 border border-brand-border/70 flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Data Mart & Analítica de Datos (Tesis)</span>
                      <span className="text-brand-cyan font-bold text-sm">Consultas 52% más rápidas (70s ➔ 33s)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan text-[11px] border border-brand-cyan/30 font-semibold">
                      EFICIENCIA
                    </span>
                  </div>

                  {/* Operational Metric 3: Control de costos */}
                  <div className="p-3 rounded-lg bg-brand-card/90 border border-brand-border/70 flex items-start justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Control de Costos y Presupuestos</span>
                      <span className="text-brand-emerald font-bold text-sm">Margen de error reducido al 2.3%</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-brand-emerald/15 text-brand-emerald text-[11px] border border-brand-emerald/30 font-semibold">
                      ALTA PRECISIÓN
                    </span>
                  </div>

                  {/* Active Services Status in clear language */}
                  <div className="pt-2 text-[11px] text-slate-400 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                        <span>Conexión directa con ERP SAP</span>
                      </span>
                      <span className="text-slate-400">ACTIVO</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                        <span>Simulación 3D de cubicaje en pallets</span>
                      </span>
                      <span className="text-slate-400">THREE.JS</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald" />
                        <span>Inspecciones de maquinaria 100% digital</span>
                      </span>
                      <span className="text-slate-400">SIN PAPEL</span>
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
