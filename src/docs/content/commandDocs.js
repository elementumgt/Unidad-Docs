import { commandCatalogSnapshot } from "./commandCatalogSnapshot.js";

const t = (es, en) => ({ es, en });

// Todo el contenido (español, inglés, categorías y acceso) llega desde Unidad-Bot
// con npm run docs:sync. Aquí solo se decide cómo presentarlo.
const { categories, access, defaultAccess } = commandCatalogSnapshot;
const typeLabels = { 3: t("Texto", "Text"), 4: t("Entero", "Integer"), 5: t("Sí/No", "Boolean"), 6: t("Usuario", "User"), 7: t("Canal", "Channel"), 8: t("Rol", "Role"), 9: t("Mención", "Mentionable"), 10: t("Número", "Number"), 11: t("Archivo", "Attachment") };
const exampleValues = { active: "true", amount: "100", bday: "17 de abril", boolean: "true", cancion: "Daft Punk One More Time", comando: "time set day", direccion: "play.ejemplo.com", jugador: "Steve", mensaje: "Hola mineros", cantidad: "10", category: "#soporte", channel: "#general", code: "VW5pZGFk", color: "#5865F2", confirmar: "CONFIRMAR", country: "Guatemala", description: "Descripción de ejemplo", duration: "2h", emoji: "<:unidad:123456789012345678>", feedback: "Excelente experiencia", id: "1", invite: "https://discord.gg/example", ip: "play.example.org", language: "en", limit: "10", message: "Mensaje de ejemplo", minutos: "30", motivo: "Incumplimiento de reglas", name: "Unidad", nivel: "50", nombre: "Unidad", number: "24", pagina: "1", palabra: "spam", posicion: "2", prize: "Membresía", question: "¿Todo saldrá bien?", reason: "Vuelvo pronto", role: "@Miembro", rol: "@Miembro", segundos: "60", setup: "starboard", site: "https://example.org", stars: "5", suggestion: "Agregar una noche de trivia", text: "Hola comunidad", time: "2h", timezone: "America/Guatemala", tipo: "general", type: "bug", user: "@Ana", user1: "@Ana", user2: "@Alex", user3: "@Sam", usuario: "@Ana", value: "global", valor: "true", winners: "1", word: "unidad", "image-url": "https://example.org/image.png" };

function routeFor(command, usage) { return `/${command.name}${usage.path.length ? ` ${usage.path.join(" ")}` : ""}`; }
function syntaxFor(command, usage) { const parameters = usage.parameters.map(parameter => parameter.required ? `<${parameter.name}>` : `[${parameter.name}]`).join(" "); return `${routeFor(command, usage)}${parameters ? ` ${parameters}` : ""}`; }
function exampleFor(command, usage) {
  const required = usage.parameters.filter(parameter => parameter.required);
  const parameters = (required.length ? required : usage.parameters.slice(0, 1)).map(parameter => {
    const value = parameter.choices?.[0]?.value ?? exampleValues[parameter.name] ?? (parameter.type === 6 ? "@Ana" : parameter.type === 7 ? "#general" : parameter.type === 8 ? "@Miembro" : parameter.type === 4 || parameter.type === 10 ? String(parameter.minValue ?? 1) : parameter.type === 5 ? "true" : "ejemplo");
    return `${parameter.name}:${value}`;
  });
  return `${routeFor(command, usage)}${parameters.length ? ` ${parameters.join(" ")}` : ""}`;
}
function parameterDetails(parameter) {
  const constraints = [];
  if (parameter.minValue !== undefined) constraints.push(`min ${parameter.minValue}`);
  if (parameter.maxValue !== undefined) constraints.push(`max ${parameter.maxValue}`);
  if (parameter.minLength !== undefined) constraints.push(`minLength ${parameter.minLength}`);
  if (parameter.maxLength !== undefined) constraints.push(`maxLength ${parameter.maxLength}`);
  if (parameter.autocomplete) constraints.push("autocomplete");
  const choices = language => parameter.choices?.length ? [parameter.choices.map(choice => `${language === "es" ? choice.name : choice.nameEn}=${choice.value}`).join(", ")] : [];
  const constraintText = language => [...constraints, ...choices(language)].join(" · ");
  return { name: parameter.name, type: typeLabels[parameter.type] ?? t(`Tipo ${parameter.type}`, `Type ${parameter.type}`), required: parameter.required, description: t(parameter.description, parameter.descriptionEn), constraints: t(constraintText("es"), constraintText("en")) };
}

const byName = new Map(commandCatalogSnapshot.commands.map(command => [command.name, command]));
export const commandGroups = categories.map(group => ({ ...group, commands: group.commands.map(name => {
  const command = byName.get(name); if (!command) throw new Error(`Missing command snapshot: ${name}`); byName.delete(name);
  return { name, summary: t(command.description, command.descriptionEn), access: access[name] ?? defaultAccess, defaultMemberPermissions: command.defaultMemberPermissions, dmPermission: command.dmPermission, usage: command.usages.map(usage => ({ syntax: syntaxFor(command, usage), example: exampleFor(command, usage), description: t(usage.description, usage.descriptionEn), parameters: usage.parameters.map(parameterDetails) })) };
}) }));
if (byName.size) throw new Error(`Unclassified command documentation: ${[...byName.keys()].join(", ")}`);

export const commandCount = commandGroups.reduce((total, group) => total + group.commands.length, 0);
export const actionCount = commandGroups.flatMap(group => group.commands).reduce((total, command) => total + command.usage.length, 0);
export const documentedSource = { current: commandCatalogSnapshot.sourceCommit, since: commandCatalogSnapshot.referenceCommit };
export function commandNavigationGroups() { return commandGroups.map(group => ({ id: group.id, label: group.title, items: group.commands.map(command => ({ id: `command-${command.name}`, label: { es: `/${command.name}`, en: `/${command.name}` } })) })); }
