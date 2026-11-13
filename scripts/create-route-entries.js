import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  {
    directory: "docs",
    title: "Documentación · Unidad",
    description: "Documentación completa de comandos, permisos, música, economía, administración y sistemas del bot Unidad.",
  },
  {
    directory: "privacidad",
    title: "Política de Privacidad · Unidad",
    description: "Política de Privacidad de Unidad: datos procesados, finalidades, conservación y derechos.",
  },
  {
    directory: "terminos",
    title: "Condiciones del Servicio · Unidad",
    description: "Condiciones del Servicio de Unidad: reglas de uso, disponibilidad y responsabilidades.",
  },
];

const source = await readFile(join("dist", "index.html"), "utf8");

for (const route of routes) {
  const outputDirectory = join("dist", route.directory);
  const html = source
    .replace(/<title>.*?<\/title>/u, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?">/u, `<meta name="description" content="${route.description}">`);

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(join(outputDirectory, "index.html"), html, "utf8");
}

// GitHub Pages sirve 404.html para cualquier ruta que no exista: con la app ahí,
// el enrutador lleva al inicio en lugar de mostrar el 404 genérico de GitHub.
await writeFile(join("dist", "404.html"), source, "utf8");
