import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "node:process";

// Política de seguridad del sitio publicado. Solo se inyecta al compilar: en
// `npm run dev` bloquearía el cliente de HMR (scripts y websocket de Vite).
export const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'none'",
  "img-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self'",
  "connect-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

function contentSecurityPolicyPlugin() {
  return {
    name: "unidad-content-security-policy",
    apply: "build",
    transformIndexHtml(html) {
      // Justo después del charset: la política debe preceder a cualquier script.
      const charset = '<meta charset="UTF-8">';
      if (!html.includes(charset)) throw new Error("index.html necesita <meta charset=\"UTF-8\"> para insertar la CSP");
      const content = contentSecurityPolicy.replaceAll("'", "&#39;");
      return html.replace(charset, `${charset}
    <meta http-equiv="Content-Security-Policy" content="${content}">`);
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react(), contentSecurityPolicyPlugin()],
});
