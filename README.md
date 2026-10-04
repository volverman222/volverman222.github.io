# Portfolio · Oscar Manuel Hernández

Web estática (HTML + CSS, sin dependencias). Recreada a partir de la versión publicada en chatgpt.site.

## Estructura
- `index.html` — portada (hero, proyectos, perfil, formación, blog, contacto)
- `styles.css` — todos los estilos (colores en `:root` al principio)
- `proyectos/<nombre>/index.html` — página de cada proyecto
- `blog/index.html` y `blog/<entrada>/index.html` — blog
- `images/` — imágenes
- `translate.js` — botón ES / EN (abre la página en Google Translate; solo funciona online)

## Ver en local
Haz doble clic en `index.html`, o desde esta carpeta:
    python3 -m http.server 8000   →  http://localhost:8000

## Publicar
Sube la carpeta a un repositorio de GitHub y activa GitHub Pages (Settings → Pages → rama `main`, carpeta raíz).
También sirve Netlify / Vercel / Cloudflare Pages arrastrando la carpeta.
