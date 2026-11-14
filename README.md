# Anderson Cabanillas Palacios — Web Portfolio & Engineering Showcase

Portafolio profesional y de alta precisión de **Anderson Joe Cabanillas Palacios** (`@and3rz0n`), Ingeniero de Sistemas especializado en la convergencia de:
- **Operaciones & Cadena de Suministro** (Control de inventarios, almacenamiento, gestión de flota, trazabilidad DUN14).
- **Business Intelligence & Data Marts** (Modelado dimensional HEFESTO/Kimball, reducción de latencia de consulta, precisión presupuestal).
- **Ingeniería de Software & Automatización** (React 19, TypeScript, Tailwind CSS, Three.js 3D, Rust/Tauri v2, Python/VBA).

---

## ⚡ Stack Tecnológico

- **Frontend Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vite.dev/)
- **Estilos & Diseño:** [Tailwind CSS v3](https://tailwindcss.com/) (Tema Industrial Dark Obsidian, Cyan `#0EA5E9` & Emerald `#10B981`)
- **Animaciones & Física:** [Framer Motion v14](https://www.framer.com/motion/) (Springs, AnimatePresence, Scroll-Reveal)
- **Visualización 3D:** Three.js / Canvas para simulación de paletizado
- **Iconografía:** Lucide React
- **Despliegue:** [Vercel](https://vercel.com/) (Configurado con SPA rewrites en `vercel.json`)

---

## 🚀 Puesta en Marcha Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (Type check + Vite build)
npm run build

# Previsualizar build de producción
npm run preview
```

---

## 🌐 Despliegue en Vercel

Este proyecto cuenta con `vercel.json` optimizado para enrutamiento Single Page Application (SPA):

```json
{
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Para conectar con Vercel:
1. Sube este repositorio a tu cuenta de GitHub (`and3rz0n/about_me`).
2. En [vercel.com](https://vercel.com/), haz clic en **"Add New Project"** e importa el repositorio.
3. Vercel detectará Vite automáticamente. Haz clic en **Deploy**.

---

© 2026 Anderson Joe Cabanillas Palacios. Todos los derechos reservados.
