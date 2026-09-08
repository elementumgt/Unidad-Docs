import { describe, expect, it } from "vitest";
import { actionCount, commandCount, commandGroups, documentedSource } from "./commandDocs.js";
import { commandCatalogSnapshot } from "./commandCatalogSnapshot.js";

const expectedActions = {
  activities: 1, admin: 23, afk: 2, announcement: 2, automod: 7, autosetup: 6, banword: 3, birthdays: 4,
  bot: 11, casino: 4, cmd: 3, coaching: 10, config: 10, creator: 6, eco: 4, economy: 24, event: 4,
  family: 6, fun: 27, games: 9, giveaway: 8, guild: 10, help: 1, history: 1, images: 35, invite: 1,
  invites: 7, levels: 7, lobby: 4, messages: 7, moderation: 18, module: 2, music: 17, nivel: 1,
  notepad: 5, ping: 1, play: 1, profile: 24, queue: 1, radio: 3, rank: 5, report: 1, search: 14,
  seek: 1, selfrole: 10, serverstats: 16, setup: 11, shop: 2, skip: 1, soundboard: 32,
  stickymessages: 3, stop: 1, suggestions: 3, thanks: 2, ticket: 18, tools: 15, trigger: 1, voice: 4, volume: 1,
};

describe("command documentation", () => {
  const commands = commandGroups.flatMap(group => group.commands);

  it("covers the complete committed registry", () => {
    expect(commandCount).toBe(59);
    expect(actionCount).toBe(461);
    expect(Object.fromEntries(commands.map(command => [command.name, command.usage.length]))).toEqual(expectedActions);
    expect(commands.map(command => command.name).sort()).toEqual(commandCatalogSnapshot.commands.map(command => command.name).sort());
    expect(documentedSource).toEqual({ current: "20fd09e2b3d969c91cd7a205126c86b22a5e897f", since: "125b0311bdd0ba7e95a12804e31f6ba626e6f407" });
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

  it("contains no duplicate command or operation syntax", () => {
    expect(new Set(commands.map(command => command.name)).size).toBe(commandCount);
    const syntax = commands.flatMap(command => command.usage.map(usage => usage.syntax));
    expect(new Set(syntax).size).toBe(actionCount);
  });
});
