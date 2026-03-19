# Portfolio Vladimir De La Guardia

Portfolio profesional de Software Engineer & Integration Consultant, construido con React + Vite + Tailwind CSS.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## Tabla de Contenidos

- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Características](#características)
- [Despliegue en Render](#despliegue-en-render)
- [SEO](#seo)
- [Licencia](#licencia)

## Tech Stack

| Categoría   | Tecnología        |
| ----------- | ----------------- |
| Frontend    | React 18.3        |
| Build       | Vite 5.4          |
| Estilos     | Tailwind CSS 3.4  |
| Animaciones | Framer Motion 11  |
| Iconos      | Lucide React      |
| i18n        | react-i18next     |
| Linting     | ESLint + Prettier |

## Quick Start

```bash
# Clonar el repositorio
git clone https://github.com/Pachuco5077/portfolio-vladimir.git
cd portfolio-vladimir

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Build producción
npm run build
```

## Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo en http://localhost:5173
npm run build        # Build de producción en /dist
npm run preview      # Preview del build de producción
npm run lint         # Verificar errores de linting
npm run lint:fix     # Auto-corregir errores de linting
npm run format       # Formatear código con Prettier
npm run format:check # Verificar formateo
```

## Estructura del Proyecto

```
portfolio-vladimir/
├── public/
│   ├── favicon.svg      # Favicon
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # SEO robots
│   └── sitemap.xml      # Sitemap para SEO
├── src/
│   ├── components/
│   │   ├── effects/         # Fondo interactivo
│   │   ├── layout/          # Navbar, Footer, Section
│   │   ├── sections/        # Secciones de la landing
│   │   └── ui/              # Componentes base
│   ├── context/
│   │   ├── ThemeContext     # Dark/Light mode
│   │   └── LanguageContext  # Multi-idioma
│   ├── data/
│   │   └── profile.js       # Datos del perfil
│   ├── hooks/               # Custom hooks
│   ├── i18n/
│   │   ├── es.js            # Traducciones español
│   │   ├── en.js            # Traducciones inglés
│   │   └── index.js         # Config i18next
│   ├── styles/
│   │   ├── globals.css       # Estilos globales
│   │   └── variables.css    # Variables CSS (temas)
│   ├── utils/
│   │   └── index.js         # Helpers (cn, etc.)
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Entry point
├── index.html                # HTML entry
├── vite.config.js           # Config Vite
├── tailwind.config.js       # Config Tailwind
└── package.json
```

## Características

- **Dark/Light Mode**: Detecta preferencia del sistema, permite cambio manual, guarda en localStorage
- **Multi-idioma**: Español e inglés con react-i18next, escalable para más idiomas
- **Responsive**: Mobile-first design optimizado para todos los dispositivos
- **Fondo Interactivo**: Particles con Canvas, gradientes animados, reacciona al mouse
- **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt
- **PWA Ready**: Manifest configurado para instalación en dispositivos
- **Performance**: Code splitting, lazy loading, optimización de assets

---

## Despliegue en Render

### Prerequisites

- Cuenta en [Render](https://render.com/)
- Repositorio en GitHub conectado a tu cuenta de Render
- Node.js 18+ instalado localmente (para testing local)

### Paso 1: Preparar el Repositorio

```bash
# Crear archivo .gitignore si no existe
cat > .gitignore << 'EOF'
node_modules
dist
.env
.env.local
.DS_Store
*.log
EOF

# Inicializar git (si es la primera vez)
git init
git add .
git commit -m "Initial commit: Portfolio Vladimir De La Guardia"

# Crear branch master/main
git branch -M master
```

### Paso 2: Subir a GitHub

```bash
# Crear repositorio en GitHub primero en:
# https://github.com/new

# Agregar remote (reemplaza con tu username)
git remote add origin https://github.com/Pachuco5077/portfolio-vladimir.git

# Push inicial
git push -u origin master
```

### Paso 3: Desplegar en Render

#### Opción A: Render Static Site (Gratuito)

1. **Ir a Render Dashboard**: https://dashboard.render.com

2. **Crear nuevo Static Site**:
   - Click en "New +"
   - Seleccionar "Static Site"

3. **Conectar GitHub**:
   - Autorizar acceso a tu repositorio
   - Seleccionar repositorio: `portfolio-vladimir`

4. **Configurar build**:

   ```
   Root Directory: (dejar vacío)
   Build Command: npm run build
   Publish Directory: dist
   ```

5. **Configuración avanzada** (opcional):

   ```
   Environment: Node
   Node Version: 18
   ```

6. **Crear Static Site**:
   - Click en "Create Static Site"

7. **Esperar despliegue**:
   - El build tomará ~2-3 minutos
   - Ver logs en tiempo real

#### Opción B: Render como Web Service (para SSR si se necesita)

Si necesitas server-side rendering en el futuro:

1. **Crear Web Service** en lugar de Static Site
2. **Configuración**:
   ```
   Environment: Node
   Build Command: npm run build
   Start Command: npx serve -s dist
   ```

### Paso 4: Configurar Dominio Personalizado (Opcional)

1. En tu Static Site en Render, ir a "Settings"

2. **Custom Domains**:
   - Click en "Add Custom Domain"
   - Ingresar tu dominio (ej: `vladimir-dev.com`)

3. **Configurar DNS en tu proveedor**:

   ```
   Type: CNAME
   Name: www (o @)
   Value: tu-sitio.onrender.com
   ```

4. **Forzar HTTPS**:
   - Habilitar "Enforce HTTPS" en settings

### Variables de Entorno

Si necesitas variables de entorno para el futuro:

1. Ir a "Environment" en el servicio
2. Agregar variables:
   ```
   NODE_VERSION=18
   API_URL=https://tu-api.com
   ```

---

## Solución de Problemas Comunes

### Error: "npm run build failed"

**Causa**: Versión de Node incompatible

**Solución**:

```bash
# Verificar versión de Node
node --version  # Debe ser 18+

# En Render, configurar Node Version a 18 en Settings > Environment
```

### Error: "Module not found"

**Causa**: Dependencias no instaladas

**Solución**:

```bash
# Limpiar cache e instalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Error: "Terser not found"

**Causa**: terser no instalado como devDependency

**Solución**:

```bash
npm install -D terser
```

### Página en blanco después de desplegar

**Causa**: Rutas no configuradas para SPA

**Solución**: En Render, no necesitas configuración adicional para Vite, ya que usa `dist/index.html` como entry point.

### Assets no cargan

**Causa**: Paths relativos incorrectos

**Solución**: Verificar que `base` en `vite.config.js` esté vacío o sea `/`:

```javascript
export default defineConfig({
  base: '/', // Debe ser / para root, o /tu-carpeta/ si está en subcarpeta
  // ...
})
```

---

## SEO

El sitio está optimizado para SEO con:

- **Meta tags**: description, keywords, author, robots
- **Open Graph**: Para Facebook, LinkedIn, WhatsApp
- **Twitter Cards**: Para Twitter/X
- **Sitemap**: `public/sitemap.xml`
- **Robots.txt**: `public/robots.txt`
- **Canonical URL**: Configurada en index.html
- **Structured Data**: Preparado para Schema.org
- **Alternate Languages**: Soporte ES/EN

### Actualizar SEO

Edita `index.html` para cambiar:

- `og:url` - URL canonical
- `og:image` - Imagen para redes sociales (1200x630px)
- `twitter:site` - Tu handle de Twitter

### Generar Sitemap Dinámico (Opcional)

Para sitios con contenido dinámico, considera usar:

- [react-sitemap](https://www.npmjs.com/package/react-sitemap)
- [next-sitemap](https://github.com/iamvishal345/next-sitemap) (si migras a Next.js)

---

## Performance

El build está optimizado para máxima performance:

- **Code Splitting**: Vendor chunks separados
- **Minificación**: Terser con eliminación de console.log
- **Tree Shaking**: Imports optimizados
- **Asset Optimization**: Hash en nombres de archivos

### Lighthouse Score (esperado)

| Metric         | Score |
| -------------- | ----- |
| Performance    | 90+   |
| Accessibility  | 95+   |
| Best Practices | 95+   |
| SEO            | 100   |

---

## Scripts de Despliegue Automatizado

### GitHub Actions (Opcional)

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Render

on:
  push:
    branches: [master]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Render
        uses: render-deploy-action@v1
        with:
          render-deploy-url: ${{ secrets.RENDER_DEPLOY_URL }}
```

Para usar GitHub Actions necesitas:

1. Crear un Web Service en Render
2. Obtener el Deploy URL de los settings
3. Agregarlo como secret en GitHub: `RENDER_DEPLOY_URL`

---

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## Contacto

**Vladimir De La Guardia Sosa**

- Email: [pachuco5077@gmail.com](mailto:pachuco5077@gmail.com)
- LinkedIn: [vladimir-de-la-guardia-sosa](https://linkedin.com/in/vladimir-de-la-guardia-sosa-8250a91a2)
- GitHub: [Pachuco5077](https://github.com/Pachuco5077)
- WhatsApp: [+34 614 012705](https://wa.me/34614012705)
- Web: [mastaxserv.com](https://mastaxserv.com)

---

_Construido con React + Vite + Tailwind CSS • Desplegado en Render_
