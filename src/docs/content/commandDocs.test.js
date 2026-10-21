import { describe, expect, it } from "vitest";
import { actionCount, commandCount, commandGroups, documentedSource } from "./commandDocs.js";
import { commandCatalogSnapshot } from "./commandCatalogSnapshot.js";

// Lo esperado sale de la instantánea generada desde el bot (npm run docs:sync):
// si el bot agrega un comando que commandDocs.js no clasifica, esta prueba falla.
const expectedActions = Object.fromEntries(
  commandCatalogSnapshot.commands.map(command => [command.name, command.usages.length]),
);
const expectedOperations = Object.values(expectedActions).reduce((total, count) => total + count, 0);

describe("command documentation", () => {
  const commands = commandGroups.flatMap(group => group.commands);

  it("covers the complete committed registry", () => {
    expect(commandCount).toBe(commandCatalogSnapshot.commands.length);
    expect(actionCount).toBe(expectedOperations);
    expect(Object.fromEntries(commands.map(command => [command.name, command.usage.length]))).toEqual(expectedActions);
    expect(commands.map(command => command.name).sort()).toEqual(commandCatalogSnapshot.commands.map(command => command.name).sort());
    expect(documentedSource.current).toMatch(/^[0-9a-f]{40}$/);
    expect(documentedSource.since).toBe("125b0311bdd0ba7e95a12804e31f6ba626e6f407");
  });

  it("documents every action, option, constraint and executable example", () => {
    for (const command of commands) {
      expect(command.summary.es).toBeTruthy();
      expect(command.summary.en).toBeTruthy();
      expect(command.access.es).toBeTruthy();
      expect(command.access.en).toBeTruthy();
      for (const usage of command.usage) {
        expect(usage.syntax).toMatch(new RegExp(`^/${command.name}(?: |$)`));
        expect(usage.example).toMatch(new RegExp(`^/${command.name}(?: |$)`));
        expect(usage.example).not.toContain("[");
        expect(usage.example).not.toContain("]");
        expect(usage.description.es).toBeTruthy();
        expect(usage.description.en).toBeTruthy();
        for (const parameter of usage.parameters) {
          expect(parameter.name).toBeTruthy();
          expect(parameter.type.es).toBeTruthy();
          expect(parameter.type.en).toBeTruthy();
          expect(parameter.description.es).toBeTruthy();
          expect(parameter.description.en).toBeTruthy();
        }
      }
    }
  });

  it("uses the bot's real English text instead of placeholders", () => {
    const placeholder = /^(Runs the |Value accepted by |Documentation for \/)/;
    for (const command of commands) {
      expect(command.summary.en).not.toMatch(placeholder);
      for (const usage of command.usage) {
        expect(usage.description.en).not.toMatch(placeholder);
        for (const parameter of usage.parameters) expect(parameter.description.en).not.toMatch(placeholder);
      }
    }
  });

  it("contains no duplicate command or operation syntax", () => {
    expect(new Set(commands.map(command => command.name)).size).toBe(commandCount);
    const syntax = commands.flatMap(command => command.usage.map(usage => usage.syntax));
    expect(new Set(syntax).size).toBe(actionCount);
  });
});
