import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MessageCircle, MapPin, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedUser, setCopiedUser] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'user') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedUser(true);
      setTimeout(() => setCopiedUser(false), 2000);
    }
  };

  const whatsappChatUrl = `https://wa.me/51973607522?text=${encodeURIComponent(
    "Hola Anderson, vi tu portafolio y me gustaría conversar sobre un proyecto / oportunidad."
  )}`;

  return (
    <section id="contacto" className="py-24 relative bg-brand-surface/40 border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Hook & Value (Cols 7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-xs font-mono text-brand-cyan mb-4">
              <span>CANALES DIRECTOS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              ¿Listo para transformar la eficiencia de tu operación?
            </h2>
            
            <p className="text-base text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
              Disponible para proyectos de optimización logística, desarrollo de aplicaciones a medida, tableros de Business Intelligence y consultorías técnicas. Conversemos.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 max-w-lg">
              
              {/* WhatsApp by Username */}
              <div className="p-4 rounded-2xl bg-brand-card/80 border border-brand-border/80 flex items-center justify-between shadow-sm hover:border-brand-emerald/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-emerald">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">WhatsApp Directo</span>
                    <a 
                      href={whatsappChatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-brand-emerald transition-colors flex items-center gap-1.5"
                    >
                      <span>@{PERSONAL_INFO.whatsappUsername}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-emerald" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(`@${PERSONAL_INFO.whatsappUsername}`, 'user')}
                    className="p-2 rounded-lg bg-brand-surface border border-brand-border text-slate-400 hover:text-white transition-colors"
                    title="Copiar usuario"
                  >
                    {copiedUser ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={whatsappChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-brand-emerald/10 hover:bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30 text-xs font-semibold transition-all"
                  >
                    Abrir Chat
                  </a>
                </div>
              </div>

              {/* Primary Email */}
              <div className="p-4 rounded-2xl bg-brand-card/80 border border-brand-border/80 flex items-center justify-between shadow-sm hover:border-brand-cyan/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Correo Electrónico</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-brand-cyan transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-brand-surface border border-brand-border text-slate-400 hover:text-white transition-colors"
                  title="Copiar correo"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-brand-card/80 border border-brand-border/80 flex items-center gap-3 shadow-sm">
                <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-amber">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Ubicación & Disponibilidad</span>
                  <span className="text-sm font-semibold text-white">
                    Lima, Perú • Proyectos Presenciales o Remotos
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Quick Interactive Chat Box (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-brand-surface border border-brand-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-2xl rounded-full pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-cyan" />
                <span>Iniciar Conversación</span>
              </h3>
              <p className="text-xs text-slate-300 font-light mb-6">
                Escríbeme directamente por WhatsApp o envíame un mensaje por correo:
              </p>

              <div className="space-y-4">
                <a
                  href={whatsappChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-glow-emerald transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Chatear por WhatsApp (@{PERSONAL_INFO.whatsappUsername})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Contacto Profesional / Oportunidad de Proyecto")}`}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-card hover:bg-brand-border text-slate-200 font-semibold text-sm border border-brand-border transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-brand-cyan" />
                  <span>Enviar Correo Electrónico</span>
                </a>

                <div className="pt-6 border-t border-brand-border/60 flex items-center justify-around text-xs font-mono">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-slate-600">&bull;</span>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
