import { describe, expect, it } from "vitest";
import { normalizeLanguage, normalizeTheme, resolveTheme } from "./preferences.js";
import { pageFromPath } from "./paths.js";

describe("preferencias", () => {
  it("usa sistema y español como valores predeterminados", () => {
    expect(normalizeTheme(null)).toBe("system");
    expect(normalizeLanguage(null)).toBe("es");
  });

  it("resuelve el tema del sistema sin modificar elecciones explícitas", () => {
    expect(resolveTheme("system", true)).toBe("dark");
    expect(resolveTheme("system", false)).toBe("light");
    expect(resolveTheme("light", true)).toBe("light");
  });

  it("resuelve las rutas del enrutador (sin basename)", () => {
    expect(pageFromPath("/")).toBe("home");
    expect(pageFromPath("/docs/")).toBe("docs");
    expect(pageFromPath("/docs")).toBe("docs");
    expect(pageFromPath("/privacidad/")).toBe("privacy");
    expect(pageFromPath("/Terminos/")).toBe("terms");
    expect(pageFromPath("/desconocida/docs/")).toBe("home");
  });
});
