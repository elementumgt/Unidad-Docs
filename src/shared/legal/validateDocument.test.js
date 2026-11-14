import { describe, expect, it } from "vitest";
import { bilingual, list, paragraph, subtitle } from "./documentBuilders.js";
import { validateDocument } from "./validateDocument.js";

const sections = Array.from({ length: 10 }, (_, index) => ({
  id: `s${index}`,
  title: bilingual(`Sección ${index}`, `Section ${index}`),
  blocks: [paragraph("Texto", "Text")],
}));
const base = {
  title: bilingual("Título", "Title"),
  summary: bilingual("Resumen", "Summary"),
  updated: bilingual("14 de noviembre de 2026", "November 14, 2026"),
  sections,
};
const withBlock = (block) => ({ ...base, sections: [{ ...sections[0], blocks: [block] }, ...sections.slice(1)] });

describe("validateDocument", () => {
  it("acepta un documento completo", () => {
    expect(validateDocument(base)).toBe(true);
    expect(validateDocument(withBlock(list(["a", "b"], ["a", "b"])))).toBe(true);
    expect(validateDocument(withBlock(subtitle("T", "T", "x", "y")))).toBe(true);
  });

  it("rechaza título, resumen o fecha incompletos", () => {
    expect(validateDocument({ ...base, title: bilingual("Título", "") })).toBe(false);
    expect(validateDocument({ ...base, summary: undefined })).toBe(false);
    expect(validateDocument({ ...base, updated: bilingual("", "November 14, 2026") })).toBe(false);
  });

  it("rechaza subtítulos sin título y listas con distinta longitud", () => {
    expect(validateDocument(withBlock(subtitle("", "Title", "x", "y")))).toBe(false);
    expect(validateDocument(withBlock(list(["a", "b"], ["a"])))).toBe(false);
    expect(validateDocument(withBlock(list(["a", ""], ["a", "b"])))).toBe(false);
  });
});
