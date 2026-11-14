const isText = (value) => typeof value === "string" && value.trim().length > 0;
const isBilingual = (value) => Boolean(value) && isText(value.es) && isText(value.en);

function validateBlock(block) {
  if (block.type === "list") {
    const { es, en } = block.items ?? {};
    return Array.isArray(es) && Array.isArray(en)
      && es.length > 0
      && es.length === en.length
      && [...es, ...en].every(isText);
  }
  if (block.type === "subtitle" && !isBilingual(block.title)) return false;
  return isBilingual(block.text);
}

export function validateDocument(document) {
  if (![document.title, document.summary, document.updated].every(isBilingual)) return false;

  const ids = document.sections.map((section) => section.id);
  if (new Set(ids).size !== ids.length || document.sections.length < 10) return false;

  return document.sections.every((section) => (
    isBilingual(section.title)
    && section.blocks.length > 0
    && section.blocks.every(validateBlock)
  ));
}
