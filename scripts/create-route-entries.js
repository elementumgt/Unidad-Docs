import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";

// URL pública del sitio (con barra final). En GitHub Pages es la del proyecto;
// SITE_URL permite publicarlo en otro dominio sin tocar el código.
const siteUrl = new URL(process.env.SITE_URL || "https://elementumgt.github.io/Unidad-Docs/").href.replace(/\/?$/u, "/");
const imageFile = "unidad.webp";
const imageUrl = new URL(imageFile, siteUrl).href;

const routes = [
  {
    directory: "",
    title: "Centro de ayuda · Unidad",
    description: "Centro de ayuda oficial de Unidad, bot para comunidades de Discord: documentación, privacidad y condiciones.",
    type: "website",
  },
  {
    directory: "docs",
    title: "Documentación · Unidad",
    description: "Documentación completa de comandos, permisos, música, economía, administración y sistemas del bot Unidad.",
    type: "article",
  },
  {
    directory: "privacidad",
    title: "Política de Privacidad · Unidad",
    description: "Política de Privacidad de Unidad: datos procesados, finalidades, conservación y derechos.",
    type: "article",
  },
  {
    directory: "terminos",
    title: "Condiciones del Servicio · Unidad",
    description: "Condiciones del Servicio de Unidad: reglas de uso, disponibilidad y responsabilidades.",
    type: "article",
  },
];

const escapeHtml = (value) => value
  .replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const routeUrl = (route) => new URL(route.directory ? `${route.directory}/` : "", siteUrl).href;

function socialTags(route) {
  const url = routeUrl(route);
  const meta = (attribute, name, content) => `    <meta ${attribute}="${name}" content="${escapeHtml(content)}">`;
  return [
    `    <link rel="canonical" href="${escapeHtml(url)}">`,
    meta("property", "og:type", route.type),
    meta("property", "og:site_name", "Unidad"),
    meta("property", "og:locale", "es_ES"),
    meta("property", "og:locale:alternate", "en_US"),
    meta("property", "og:title", route.title),
    meta("property", "og:description", route.description),
    meta("property", "og:url", url),
    meta("property", "og:image", imageUrl),
    meta("property", "og:image:alt", "Logo de Unidad"),
    meta("name", "twitter:card", "summary"),
    meta("name", "twitter:title", route.title),
    meta("name", "twitter:description", route.description),
    meta("name", "twitter:image", imageUrl),
  ].join("\n");
}

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`dist/index.html no contiene ${label}`);
  return html.replace(pattern, replacement);
}

function htmlFor(source, route) {
  let html = replaceOnce(source, /<title>.*?<\/title>/u, `<title>${escapeHtml(route.title)}</title>`, "<title>");
  html = replaceOnce(html, /<meta name="description" content=".*?">/u, `<meta name="description" content="${escapeHtml(route.description)}">`, "la meta description");
  return replaceOnce(html, /\s*<\/head>/u, `\n${socialTags(route)}\n  </head>`, "</head>");
}

const source = await readFile(join("dist", "index.html"), "utf8");

for (const route of routes) {
  const outputDirectory = join("dist", route.directory);
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(join(outputDirectory, "index.html"), htmlFor(source, route), "utf8");
}

// GitHub Pages sirve 404.html para cualquier ruta que no exista: con la app ahí,
// el enrutador lleva al inicio en lugar de mostrar el 404 genérico de GitHub.
// Sin canonical ni Open Graph: no es una página que deba indexarse.
await writeFile(join("dist", "404.html"), source, "utf8");

// Imagen con nombre estable para Open Graph (los assets de Vite llevan hash).
await copyFile(join("assets", "media", imageFile), join("dist", imageFile));

const today = new Date().toISOString().slice(0, 10);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${escapeHtml(routeUrl(route))}</loc><lastmod>${today}</lastmod></url>`),
  "</urlset>",
  "",
].join("\n");
await writeFile(join("dist", "sitemap.xml"), sitemap, "utf8");
// Nota: los rastreadores solo leen robots.txt en la raíz del dominio; bajo
// /Unidad-Docs/ sirve si el sitio pasa a un dominio propio (SITE_URL).
await writeFile(join("dist", "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", siteUrl).href}\n`, "utf8");
