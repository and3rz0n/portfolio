export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'enterprise' | 'web3d' | 'bi' | 'tools';
  categoryLabel: string;
  badge: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  techStack: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
  isEnterprise: boolean;
  companyOrContext: string;
}

export interface MetricHighlight {
  value: string;
  label: string;
  description: string;
  iconName: string;
  color: 'cyan' | 'emerald' | 'amber' | 'purple';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  fullName: "Anderson Joe Cabanillas Palacios",
  preferredName: "Anderson Cabanillas",
  title: "Ingeniero de Sistemas",
  subtitle: "Operaciones • Business Intelligence • Desarrollo Web & IA",
  shortBio: "Transformo procesos operativos complejos en aplicaciones web ágiles, tableros de control de datos (Power BI) y soluciones de automatización e inteligencia artificial.",
  fullBio: "Ingeniero de Sistemas con más de 8 años de trayectoria en operaciones de cadena de suministro (Softys Perú) y desarrollo de software. Me especializo en conectar las necesidades reales del negocio con soluciones tecnológicas modernas: desde el control de inventarios y bases de datos analíticas (PostgreSQL / Power BI), hasta suites web integrales de planta (React, TypeScript, Supabase, PWA), gráficos 3D (Three.js) y herramientas de alto rendimiento en Rust.",
  location: "Lima, Perú",
  email: "anderson.cabanillas@gmail.com",
  secondaryEmail: "anderson.neo.2000@gmail.com",
  phone: "+51 973 607 522",
  whatsappUsername: "and3rz0n",
  github: "https://github.com/and3rz0n",
  linkedin: "https://www.linkedin.com/in/anderson-joe-cabanillas-palacios-b6728857/",
  thesisUrl: "https://repositorio.ucv.edu.pe/handle/20.500.12692/163844",
  stats: {
    yearsExperience: "8+",
    projectsInProduction: "8+",
    queryTimeReduction: "52%",
    budgetErrorReduction: "2.3%",
  }
};

export const METRICS: MetricHighlight[] = [
  {
    value: "-52%",
    label: "Tiempo de Consulta de Datos",
    description: "Consultas que tardaban más de 1 minuto ahora se resuelven en 33 segundos mediante un Data Mart.",
    iconName: "Timer",
    color: "cyan"
  },
  {
    value: "2.3%",
    label: "Margen de Error en Costos",
    description: "Reducción drástica del margen de error presupuestal (desde un 23.7% inicial).",
    iconName: "TrendingDown",
    color: "emerald"
  },
  {
    value: "8+ Años",
    label: "Experiencia en Operaciones",
    description: "Liderando control de inventarios, almacenes y digitalización de procesos en Softys Perú.",
    iconName: "Boxes",
    color: "amber"
  },
  {
    value: "100%",
    label: "Operación Sin Papel",
    description: "Sustitución de formatos impresos por aplicaciones web intuitivas usadas desde el celular.",
    iconName: "ShieldCheck",
    color: "purple"
  }
];

export const CORE_PILLARS = [
  {
    id: "supply-chain",
    title: "Operaciones & Cadena de Suministro",
    subtitle: "Entendimiento profundo de los procesos de negocio",
    description: "Control riguroso de inventarios, gestión de almacenes y despachos. Capacidad para identificar cuellos de botella en la operación diaria e integrarlos de forma fluida con sistemas empresariales como SAP.",
    icon: "Boxes",
    badges: ["Control de Inventarios", "Gestión de Almacenes", "SAP ERP", "Estandarización de Procesos"]
  },
  {
    id: "bi-data",
    title: "Análisis de Datos & Business Intelligence",
    subtitle: "Información clara para tomar decisiones acertadas",
    description: "Diseño de modelos de datos y cuadros de mando visuales en Power BI. Transformación de grandes volúmenes de datos dispersos en reportes comprensibles que permiten anticipar problemas y controlar costos.",
    icon: "BarChart3",
    badges: ["Power BI", "Modelado de Datos", "PostgreSQL", "Métricas de Control", "Reportes Ejecutivos"]
  },
  {
    id: "fullstack-automation",
    title: "Desarrollo Web, 3D & Software Nativo",
    subtitle: "Herramientas modernas construidas para resolver problemas",
    description: "Creación de aplicaciones web interactivas (React, TypeScript, Three.js 3D), software de escritorio nativo de alto rendimiento en Rust (Tauri v2) y automatizaciones de productividad con IA.",
    icon: "Code2",
    badges: ["React / TypeScript", "Three.js 3D", "Rust & Tauri v2", "Supabase", "Gobernanza de IA"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Desarrollo Web & 3D",
    description: "Aplicaciones web modernas, visualización 3D interactiva y apps móviles PWA",
    skills: [
      { name: "React 19 / 18", level: "Avanzado", highlight: true },
      { name: "TypeScript", level: "Avanzado", highlight: true },
      { name: "Three.js & Gráficos 3D en Web", level: "Avanzado", highlight: true },
      { name: "Tailwind CSS", level: "Avanzado", highlight: true },
      { name: "Aplicaciones Web Progresivas (PWA)", level: "Avanzado", highlight: true },
      { name: "Generación de Reportes PDF A4 (jsPDF)", level: "Avanzado" },
      { name: "Gráficos Interactivos (Recharts)", level: "Avanzado" },
    ]
  },
  {
    title: "Software Nativo & Nube",
    description: "Programación de escritorio de alta velocidad y servicios backend en la nube",
    skills: [
      { name: "Rust & Tauri v2 (Desktop Apps)", level: "Avanzado", highlight: true },
      { name: "Supabase (PostgreSQL en la Nube)", level: "Avanzado", highlight: true },
      { name: "Extensiones para Google Chrome (V3)", level: "Avanzado", highlight: true },
      { name: "Seguridad y Control de Accesos por Rol", level: "Avanzado" },
      { name: "Despliegues en Vercel", level: "Avanzado" },
      { name: "Scripts y Procesamiento en Python", level: "Intermedio-Avanzado", highlight: true },
    ]
  },
  {
    title: "Business Intelligence & Datos",
    description: "Modelos analíticos que transforman datos en decisiones estratégicas",
    skills: [
      { name: "Power BI (Tableros de Control Ejecutivos)", level: "Avanzado", highlight: true },
      { name: "Diseño de Data Marts (HEFESTO / Kimball)", level: "Avanzado", highlight: true },
      { name: "Fórmulas de Negocio y Métricas DAX", level: "Avanzado", highlight: true },
      { name: "Limpieza y Transformación de Datos (ETL)", level: "Avanzado" },
      { name: "Análisis Estadístico e Indicadores de Gestión", level: "Avanzado" },
    ]
  },
  {
    title: "IA, Procesos & Calidad",
    description: "Liderazgo en adopción de IA, control de calidad y gestión operativa",
    skills: [
      { name: "Gobernanza de Inteligencia Artificial", level: "Certificado", highlight: true },
      { name: "Agentes de IA & Prompting Estratégico", level: "Certificado", highlight: true },
      { name: "Integración con SAP MM (Gestión de Materiales)", level: "Avanzado", highlight: true },
      { name: "Control de Calidad de Software (QA / Pruebas)", level: "Avanzado" },
      { name: "Manuales Operativos Estándar (SOPs)", level: "Especialista" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "portal-apt",
    title: "Portal Operativo APT — Suite Integral de Planta Softys",
    subtitle: "Suite modular: Mantenimiento TPM, Asistencia SAP, Vacaciones, Seguridad de Flota y Rotulado RF",
    category: "enterprise",
    categoryLabel: "Plataforma Corporativa Integral",
    badge: "Misión Crítica • En Producción",
    status: "Producción Activa",
    summary: "Plataforma web unificada de 12 módulos que digitaliza integralmente la operación de planta: desde inspecciones de montacargas y rotación de baterías, hasta actas de comités TPM con dictado por voz, cruce de asistencia con SAP ALV y planificación de vacaciones.",
    problem: "Las plantas operaban con procesos fragmentados en papel y múltiples hojas de cálculo: chequeos mecánicos de montacargas que no alertaban a tiempo, comités TPM que tomaban horas en transcribir actas, diferencias entre la asistencia en planta y los reportes de SAP ALV, y sobreacumulación de vacaciones sin proyección anual.",
    solution: "Se diseñó y programó una suite web empresarial instalable (PWA) con React 19, TypeScript y Supabase que integra 12 módulos: Mantenimiento Autónomo TPM con matriz ECRS y actas A4 en PDF; control de asistencia con cruce SAP ALV; planificador anual de vacaciones por sectores; inspección pre-uso MTC de 33 puntos con alerta roja automática; cuarto digital de baterías con algoritmo FIFO; y rotulado rápido DUN14/Lotes para pistolas RF.",
    impactMetrics: [
      { label: "Módulos Integrados", value: "12 Sistemas", detail: "TPM, Asistencia, Vacaciones, Flota, Baterías, DUN14, etc." },
      { label: "Cero Papel", value: "100%", detail: "Actas oficiales, actas de comité y checklists digitalizados en PDF." },
      { label: "Sincronización SAP", value: "En Tiempo Real", detail: "Cruce asistencial y validación automática de turnos de guardia." }
    ],
    techStack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS", "Supabase (PostgreSQL)", "PWA", "Recharts", "jsPDF", "Web Speech API"],
    keyFeatures: [
      "Mantenimiento Autónomo TPM: Registro de anomalías 5S, matriz de riesgo ECRS, y comités en vivo con dictado por voz y actas en 1 hoja A4.",
      "Tareo Asistencial SAP: Ingesta de reportes SAP ALV, cálculo reactivo de horas extra y cruce de cumplimiento asistencial por grupos.",
      "Programación Anual de Vacaciones: Matriz de 12 meses por sectores, venta de vacaciones y proyección legal automática (+2.5 d/mes).",
      "Inspección de Flota MTC: Chequeo de 33 puntos de seguridad con bloqueo y generación de Tarjeta Roja inmediata a Mantenimiento.",
      "Cuarto de Baterías Digital: Monitoreo de 21 bahías con proyección de hora de recarga y asignación de prioridad de uso FIFO.",
      "Rotulado y Trazabilidad: Generador Code128 de códigos DUN14 y lotes, etiquetas de bandeo 4x3'' y carnets con códigos de barra para SAP RF.",
      "Gobernanza de Planta: Forzado de actualización en tiempo real a todas las terminales móviles PWA sin cerrar sesión de operadores."
    ],
    architectureHighlights: [
      "Arquitectura de 12 módulos independientes con control granular de permisos por rol (operador, supervisor, admin, developer).",
      "Triple respaldo fotográfico en cascada para evidencias de averías: ImgBB → Supabase Storage → Base64 WebP.",
      "Motor recursivo en cliente para procesar consultas masivas de miles de filas sin congelar el navegador.",
      "Diseño táctil ergonómico con protección anti-zoom para terminales industriales Zebra, Honeywell y smartphones."
    ],
    isEnterprise: true,
    companyOrContext: "Softys Perú S.A.C."
  },
  {
    id: "sistema-reconocimientos",
    title: "Softys Reconocimientos — Muro Social Corporativo & Gamificación",
    subtitle: "Plataforma de cultura organizacional, feed de reconocimientos en tiempo real y diplomas automáticos",
    category: "enterprise",
    categoryLabel: "Cultura & Gestión de Talento",
    badge: "Versión 2.8 • En Producción",
    status: "Producción Activa",
    summary: "Plataforma social gamificada para que los colaboradores de Softys Perú reconozcan el talento de sus compañeros, alineado a pilares culturales con notificaciones bidireccionales y certificaciones.",
    problem: "Los reconocimientos al desempeño se gestionaban de forma aislada o esporádica, sin visibilidad colectiva entre plantas ni métricas de impacto en la cultura interna de la empresa.",
    solution: "Se desarrolló una red social interna en React + Vite + Supabase con muro global interactivo, reacciones, comentarios anidados, triggers en PostgreSQL para alertas automáticas, ranking analítico por pilares y generación de diplomas digitales.",
    impactMetrics: [
      { label: "Automatización", value: "SQL Triggers", detail: "Alertas automáticas en base de datos para likes y comentarios." },
      { label: "Seguridad", value: "Escudo 2.8", detail: "Actualización forzosa de credenciales y validación de celular." },
      { label: "Gamificación", value: "Nivel & Racha", detail: "Medición de participación activa e impacto cultural por sede." }
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "Triggers PL/pgSQL", "Context API", "Sonner"],
    keyFeatures: [
      "Centro de Notificaciones 2.0 con agrupación inteligente de interacciones para no saturar la pantalla.",
      "Navegación contextual con modales flotantes para responder o reaccionar sin perder la posición en el muro.",
      "Ranking analítico mensual que cruza estrellas acumuladas vs. impacto en los pilares de la compañía.",
      "Generador de diplomas digitales descargables y optimizados para compartir en redes.",
      "Escudo de seguridad con botón de actualización masiva de contraseñas para el administrador."
    ],
    architectureHighlights: [
      "Lógica de base de datos automatizada con triggers en PostgreSQL para aligerar la carga del frontend.",
      "Filtros de integridad matemática para excluir reconocimientos archivados del ranking.",
      "Diseño en modo oscuro nativo adaptado a computadoras y teléfonos corporativos."
    ],
    isEnterprise: true,
    companyOrContext: "Softys Perú S.A.C."
  },
  {
    id: "softys-descuentos",
    title: "Sistema de Descuentos a Transportistas & BI de Fletes",
    subtitle: "Arquitectura de Business Intelligence de tres niveles para control de desvíos y penalizaciones",
    category: "enterprise",
    categoryLabel: "BI Operativo & Transporte",
    badge: "Softys • En Producción",
    status: "Producción Activa",
    summary: "Aplicación web corporativa para el cálculo automático de pérdida comercial y desviación volumétrica en despachos de transporte, con tableros diarios, locales y nacionales.",
    problem: "Las penalizaciones por ocupabilidad, pérdida de bultos o desviación de cubicaje se gestionaban en hojas de cálculo con riesgo de fórmulas erróneas y sin segregación de datos por sede.",
    solution: "Se creó un sistema con dashboards en tres niveles (Diario con cruce de turnos nocturnos, Sede para análisis histórico y Nacional con mapa de calor comparativo entre sedes), protegido con Gate de seguridad por DNI.",
    impactMetrics: [
      { label: "Escala BI", value: "3 Niveles", detail: "Turno diario, planta local y comparativa nacional." },
      { label: "Seguridad", value: "DNI Gate", detail: "Auditoría de cada cambio o anulación administrativa." },
      { label: "Cálculo en Vivo", value: "m³ y S/", detail: "Cálculo instantáneo de desvíos volumétricos y costos." }
    ],
    techStack: ["React 18", "Vite", "Tailwind CSS", "Recharts", "Supabase", "date-fns", "SheetJS (XLSX)"],
    keyFeatures: [
      "Filtro inteligente de turnos que contempla el turno amanecida cruzando días calendario (23:00 - 07:00).",
      "Mapa de calor anual apilado con ranking de sedes y efecto focus para análisis de un mes específico.",
      "Modal asistido de producto con instrucciones de códigos de transacción SAP MM (ZMM7001 / MM60).",
      "Buscador predictivo Search-to-Select con cierre automático al hacer clic fuera del menú.",
      "Paginación virtualizada en el DOM para manejar miles de datos sin congelar la pantalla."
    ],
    architectureHighlights: [
      "Segmentación de permisos por centro_id limitando a cada supervisor a su propia jurisdicción.",
      "Motor extractor asíncrono que consulta en bloques de 1,000 en 1,000 para exportar todo a Excel.",
      "Cálculo estricto de fórmulas de negocio: Pérdida (S/) = Precio × Bultos; Desviación = (Programado + Precarga) - Transporte."
    ],
    isEnterprise: true,
    companyOrContext: "Softys Perú S.A.C."
  },
  {
    id: "pallet-calculator-3d",
    title: "Simulador 3D de Paletizado & Optimización de Carga",
    subtitle: "Modelado 3D interactivo en el navegador para calcular la máxima capacidad de carga en pallets",
    category: "web3d",
    categoryLabel: "Desarrollo Web & 3D Industrial",
    badge: "Three.js 3D • Producción",
    status: "Completado & Operativo",
    summary: "Aplicación web que simula en 3D interactivo el apilamiento y distribución óptima de cajas y bultos sobre pallets industriales, calculando volumen útil, peso máximo y patrones de amarre.",
    problem: "En almacenes y despachos, calcular cuántas cajas caben en un pallet y cómo distribuirlas de manera estable se hacía manualmente o por ensayo y error, lo que provocaba pallets inestables, sobrecostos de flete y desperdicio de espacio en camiones.",
    solution: "Se desarrolló una calculadora inteligente con visor 3D en Three.js con controles orbitales. Permite ingresar medidas en milímetros o centímetros, seleccionar el tipo de pallet (Europallet, Industrial, etc.), elegir patrones de amarre entrelazados (3A, 4A molino, 5A, etc.) y verificar instantáneamente si la carga supera el peso límite de 2,000 kg.",
    impactMetrics: [
      { label: "Visor 3D en Vivo", value: "Three.js", detail: "Rotación y visualización orbital por pisos en tiempo real." },
      { label: "Formatos de Pallet", value: "4 Estándares", detail: "Europallet, Industrial, GMA y medidas personalizadas." },
      { label: "Cálculo de Volumen", value: "m³ y kg", detail: "Verificación automática de sobrepeso y porcentaje de superficie." }
    ],
    techStack: ["React 19", "TypeScript", "Three.js", "OrbitControls", "HTML5 Canvas", "Tailwind CSS", "Supabase"],
    keyFeatures: [
      "Simulador 3D en tiempo real con capacidad de girar, acercar y aislar capas de cajas.",
      "Conversor de medidas métricas integrado (milímetros, centímetros y metros).",
      "Catálogo de patrones de estiba entrelazados para garantizar la estabilidad de la carga.",
      "Detección de voladizo perimétrico para evitar que las cajas sobresalgan del pallet.",
      "Generación y guardado de configuraciones de paletizado en la nube para reutilización rápida."
    ],
    architectureHighlights: [
      "Renderizado gráfico fluido con Three.js optimizado para correr sin tirones en cualquier navegador.",
      "Algoritmo de cálculo volumétrico que optimiza la densidad de cajas por capa.",
      "Soporte de persistencia dual: base de datos en Supabase con respaldo local en el navegador."
    ],
    repoUrl: "https://github.com/and3rz0n",
    isEnterprise: false,
    companyOrContext: "Ingeniería Logística & Algoritmos 3D"
  },
  {
    id: "data-mart-bi",
    title: "Sistema de Inteligencia de Negocios & Control de Costos",
    subtitle: "Proyecto de investigación aplicada para agilizar consultas gerenciales y precisión presupuestal",
    category: "bi",
    categoryLabel: "Análisis de Datos & Business Intelligence",
    badge: "Tesis Aprobada • UCV 2024",
    status: "Publicada en Repositorio UCV",
    summary: "Estructura de base de datos analítica (Data Mart) y tableros interactivos en Power BI que reducen el tiempo necesario para consultar el estado de proyectos y eliminan desvíos presupuestales.",
    problem: "La información sobre el avance y costo de los proyectos estaba dispersa en muchas hojas de cálculo distintas. Esto provocaba que consultar el estado de una obra tomara más de un minuto y que las proyecciones de gasto tuvieran un margen de error del 23.7%.",
    solution: "Se diseñó y construyó un repositorio centralizado de datos (siguiendo las metodologías reconocidas HEFESTO y Kimball) en PostgreSQL, programando rutinas automáticas de limpieza nocturna y conectándolo a tableros ejecutivos en Power BI para una visualización clara.",
    impactMetrics: [
      { label: "Tiempo de Consulta", value: "-52%", detail: "El tiempo para revisar un proyecto bajó de 70.4 a 33.7 segundos." },
      { label: "Precisión Presupuestal", value: "2.3% Error", detail: "El error en cálculo de costos se redujo drásticamente desde un 23.7%." },
      { label: "Aceptación de Usuarios", value: "76%", detail: "Aprobación y satisfacción muy alta comprobada mediante encuestas." }
    ],
    techStack: ["Power BI", "PostgreSQL", "Metodología HEFESTO", "Ralph Kimball", "Fórmulas DAX", "SPSS (Validación Estadística)"],
    keyFeatures: [
      "Tableros interactivos donde los directivos pueden filtrar proyectos por zona geográfica, estado y costo.",
      "Actualización automática de datos programada para la madrugada sin intervención humana.",
      "Detección preventiva de obras con riesgo de retraso o sobrecostos.",
      "Validación estadística científica que demostró formalmente la efectividad de la solución."
    ],
    architectureHighlights: [
      "Análisis sobre una muestra real de 240 proyectos.",
      "Organización de datos en formato estrella para que cualquier consulta responda en segundos.",
      "Tesis aprobada con acceso público oficial en el repositorio de la Universidad César Vallejo."
    ],
    paperUrl: "https://repositorio.ucv.edu.pe/handle/20.500.12692/163844",
    isEnterprise: false,
    companyOrContext: "Univ. César Vallejo / Sector Telecomunicaciones"
  },
  {
    id: "logigastos",
    title: "LogiGastos — Control y Liquidación de Gastos de Transporte",
    subtitle: "Aplicación móvil y web para registrar fletes especiales, viajes y liquidación contable",
    category: "web3d",
    categoryLabel: "Desarrollo Web & Finanzas",
    badge: "Misión Crítica • En Producción",
    status: "Producción Activa",
    summary: "Plataforma digital para que transportistas registren gastos imprevistos de ruta y el equipo de finanzas los audite y apruebe de forma rápida y transparente.",
    problem: "Los transportistas enviaban comprobantes por canales desordenados, las tarifas de viajes especiales tardaban semanas en revisarse y la tesorería no tenía forma clara de verificar si un gasto ya había sido pagado.",
    solution: "Se desarrolló una aplicación web con versión móvil para choferes y auditores. Cuenta con un reloj de plazo máximo de 7 días para ingresar tarifas, lectura automática de planillas de viajes y un sistema de aprobación por etapas antes de enviar el pago a tesorería.",
    impactMetrics: [
      { label: "Plazo de Tarifas", value: "7 Días", detail: "Cronómetro visual que evita demoras acumuladas en pagos." },
      { label: "Lectura de Planillas", value: "Automática", detail: "Cruce instantáneo de rutas de entrega entre Lima y Provincias." },
      { label: "Aprobación Segura", value: "2 Niveles", detail: "Revisión técnica inicial y visto bueno final de auditoría." }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PWA Móvil", "Integración con SAP"],
    keyFeatures: [
      "Aplicación que se puede instalar en la pantalla de inicio del teléfono como una app nativa.",
      "Formulario inteligente que detecta si el transportista está corrigiendo un gasto para no duplicarlo.",
      "Panel de control para supervisores con tarjetas compactas para aprobar varios viajes con un solo clic.",
      "Alerta visual cuando una factura tiene más de 7 días de emitida para evitar desfases de mes contable."
    ],
    architectureHighlights: [
      "Protección para que solo usuarios autorizados vean montos y órdenes de compra.",
      "Capacidad de exportar miles de registros a Excel en un instante sin colapsar el navegador.",
      "Historial de auditoría donde queda registrado con fecha exacta quién aprobó cada monto."
    ],
    isEnterprise: true,
    companyOrContext: "Cadena de Suministro / Transporte"
  },
  {
    id: "filepackager-desktop",
    title: "FilePackager Studio — Software de Escritorio de Alto Rendimiento",
    subtitle: "Aplicación de escritorio nativa desarrollada en Rust y Tauri para procesamiento y compresión masiva",
    category: "tools",
    categoryLabel: "Software de Escritorio & Rust",
    badge: "Rust Nativo • Tauri v2",
    status: "Completado & Operativo",
    summary: "Aplicación de escritorio multiplataforma (Windows/macOS) que procesa, descomprime, aplana y organiza grandes volúmenes de archivos comprimidos y paquetes de imágenes a velocidad de código compilado.",
    problem: "Manipular cientos de archivos comprimidos (.zip, .cbz) o carpetas con miles de imágenes en exploradores tradicionales suele congelar el sistema, consume demasiada memoria RAM y requiere abrir programas externos manualmente.",
    solution: "Se programó una aplicación de escritorio moderna con arquitectura híbrida: un núcleo de sistema de archivos ultrarrápido escrito en Rust (Tauri v2) combinado con una interfaz visual moderna y reactiva en React 19, TypeScript y Zustand.",
    impactMetrics: [
      { label: "Velocidad Nativa", value: "Rust Core", detail: "Procesamiento de archivos en hilos paralelos sin congelar la ventana." },
      { label: "Consumo de RAM", value: "Ultraligero", detail: "Menos de 60 MB de memoria en ejecución, muy por debajo de Electron." },
      { label: "Multi-Volumen", value: "Por Lotes", detail: "Escaneo y reempaquetado de directorios completos con un solo botón." }
    ],
    techStack: ["Rust (Tauri v2)", "React 19", "TypeScript", "Zustand", "Tailwind CSS", "Sistema de Archivos Nativo"],
    keyFeatures: [
      "Escaneo y detección automática de archivos comprimidos y subcarpetas anidadas.",
      "Extracción y reordenamiento de secuencias de imágenes con preservación de nombres.",
      "Panel con contraseñas maestras automáticas para archivos protegidos.",
      "Interfaz oscura profesional con respuesta táctil instantánea y sin barras de espera molestas.",
      "Compatibilidad nativa con el sistema operativo sin depender de emuladores pesados."
    ],
    architectureHighlights: [
      "Llamadas asíncronas seguras entre JavaScript y Rust mediante la API Tauri Invoke.",
      "Manejo de estado global predecible con Zustand para soportar directorios de miles de ítems.",
      "Instalable nativo (.exe / .msi) con huella de instalación de pocos megabytes."
    ],
    repoUrl: "https://github.com/and3rz0n",
    isEnterprise: false,
    companyOrContext: "Ingeniería de Sistemas & Software Nativo"
  },
  {
    id: "chrome-extension-img",
    title: "Image Grabber & Downloader — Extensión para Google Chrome",
    subtitle: "Herramienta que facilita la descarga y organización masiva de imágenes de páginas web",
    category: "tools",
    categoryLabel: "Automatización & Navegación Web",
    badge: "Manifest V3 • Extensión Lista",
    status: "Proyecto Concluido",
    summary: "Extensión para el navegador que permite explorar cualquier sitio web, filtrar solo las imágenes de alta calidad y descargarlas ordenadas en carpetas con nombres personalizados.",
    problem: "Descargar imágenes una por una de catálogos web es una tarea tediosa y lenta, especialmente en sitios que bloquean descargas directas o que solo cargan las imágenes mientras bajas por la página.",
    solution: "Se construyó una extensión oficial para Google Chrome que se abre en un panel lateral derecho. Cuenta con un botón de escaneo con descenso automático, filtros por tamaño de imagen, conversor de formatos modernos a JPG/PNG y empaquetado en archivo comprimido ZIP.",
    impactMetrics: [
      { label: "Descarga Masiva", value: "1 Clic", detail: "Descarga de decenas de imágenes empaquetadas en un solo archivo ZIP." },
      { label: "Panel Persistente", value: "SidePanel", detail: "No se cierra al hacer clic en la página que estás revisando." },
      { label: "Filtro Inteligente", value: "Por Tamaño", detail: "Descarta automáticamente logos diminutos y rastreadores web." }
    ],
    techStack: ["JavaScript Moderno", "APIs de Google Chrome (Manifest V3)", "Compresión ZIP en Navegador", "CSS3 Moderno"],
    keyFeatures: [
      "Se abre discretamente en el lateral de Chrome sin estorbar tu navegación.",
      "Baja suavemente por la página para activar la carga de fotos antes de recolectarlas.",
      "Permite elegir si deseas solo fotos grandes en alta definición (HD) o cualquier tamaño.",
      "Renombra automáticamente los archivos con números consecutivos (01, 02, 03) y la fecha de hoy."
    ],
    architectureHighlights: [
      "Cumple al 100% las normativas de seguridad más exigentes de Google (Manifest V3).",
      "No envía datos a servidores externos; todo el proceso ocurre dentro de tu propia computadora.",
      "Incluye conversor que transforma imágenes web (.webp) a formatos estándar como PNG y JPG."
    ],
    repoUrl: "https://github.com/and3rz0n",
    isEnterprise: false,
    companyOrContext: "Productividad Digital & Automatización"
  }
];

export const WORK_EXPERIENCE = [
  {
    role: "Analista de Control de Inventarios & Automatización Operativa",
    company: "SOFTYS PERÚ S.A.C.",
    period: "Octubre 2016 – Presente",
    location: "Lima, Perú",
    type: "Jornada Completa",
    highlights: [
      "Liderazgo en la gestión integral de inventarios en centros de distribución y almacenes industriales, garantizando la exactitud entre el stock físico y contable.",
      "Análisis de balances y conciliación de stock, identificando desviaciones a tiempo en coordinación con Almacén, Transporte e Importaciones.",
      "Diseño y desarrollo de la suite web 'Portal APT' (React 19, TypeScript, Supabase, PWA), digitalizando 12 módulos: comités TPM con voz, asistencia SAP, vacaciones y flota.",
      "Desarrollo de la plataforma 'Softys Reconocimientos' (Muro social y gamificación v2.8) y el 'Sistema de Descuentos a Transportistas' con dashboards en Recharts.",
      "Automatización de rutinas en Python y macros avanzadas integradas con SAP MM, reduciendo drásticamente las horas dedicadas a tareas manuales.",
      "Creación de modelos de datos y cuadros de mando en Power BI para cobertura de inventarios, rotación de productos y KPIs de la cadena de suministro.",
      "Redacción de Procedimientos Operativos Estándar (SOPs) y liderazgo de capacitaciones técnicas a equipos de operaciones."
    ]
  },
  {
    role: "Analista de Calidad de Software (QA)",
    company: "GEMBA GROUP S.A.C.",
    period: "Julio 2022 – Diciembre 2022",
    location: "Lima, Perú",
    type: "Prácticas Profesionales",
    highlights: [
      "Revisión y pruebas rigurosas de aplicaciones de software antes de su puesta en producción bajo metodología ágil Scrum.",
      "Diseño y ejecución de planes de prueba para asegurar que las funciones respondan según los requerimientos del cliente.",
      "Verificación de servicios web y APIs mediante la herramienta Postman.",
      "Registro y seguimiento de mejoras y correcciones de errores en Jira en comunicación directa con los desarrolladores."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "Universidad César Vallejo (UCV)",
    period: "2019 – Diciembre 2024",
    status: "Concluida • Tesis de Titulación Aprobada & Publicada",
    details: "Tesis: 'Implementación de un Data Mart para el proceso de control de obras en una empresa de telecomunicaciones' (Metodologías HEFESTO y Kimball, PostgreSQL y Power BI).",
    url: "https://repositorio.ucv.edu.pe/handle/20.500.12692/163844"
  }
];

export const CERTIFICATIONS = [
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud Training (Coursera)",
    category: "ai",
    type: "Inteligencia Artificial"
  },
  {
    name: "AI, Empathy & Ethics",
    issuer: "University of California, Santa Cruz (Coursera)",
    category: "ai",
    type: "Ética & Gobernanza en IA"
  },
  {
    name: "Building an AI Governance Program",
    issuer: "LinkedIn Learning",
    category: "ai",
    type: "Gobernanza & Cumplimiento de IA"
  },
  {
    name: "Strategic AI Prompting for Managers",
    issuer: "LinkedIn Learning",
    category: "ai",
    type: "Liderazgo & Prompting Estratégico"
  },
  {
    name: "Preparing Your Organization for AI Agents",
    issuer: "LinkedIn Learning",
    category: "ai",
    type: "Agentes de IA & Gestión del Cambio"
  },
  {
    name: "Introducing Generative AI into Your Organization",
    issuer: "LinkedIn Learning",
    category: "ai",
    type: "Liderazgo Técnico en IA"
  },
  {
    name: "Cisco Networking Academy (CCNA)",
    issuer: "Universidad César Vallejo / Cisco",
    category: "management",
    type: "Redes & Telecomunicaciones"
  },
  {
    name: "Sprint Review & Steercos Ejecutivos Impecables",
    issuer: "Certificación Especializada",
    category: "management",
    type: "Marco Ágil SCRUM"
  },
  {
    name: "Emprendimiento y Gestión de Proyectos",
    issuer: "Universidad César Vallejo",
    category: "management",
    type: "Gestión Estratégica"
  }
];
