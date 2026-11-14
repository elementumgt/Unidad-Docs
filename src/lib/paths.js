export const legalPaths = Object.freeze({
  docs: "/docs/",
  home: "/",
  privacy: "/privacidad/",
  terms: "/terminos/",
});

const pageBySegment = Object.freeze({ docs: "docs", privacidad: "privacy", terminos: "terms" });

// Recibe el pathname del enrutador, que ya no incluye el basename
// (/Unidad-Docs/), así que basta con mirar el primer segmento.
export function pageFromPath(pathname) {
  const [segment = ""] = String(pathname).toLowerCase().split("/").filter(Boolean);
  return pageBySegment[segment] ?? "home";
}
