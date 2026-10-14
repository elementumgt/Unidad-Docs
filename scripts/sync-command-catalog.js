import { execFileSync } from "node:child_process";
import { readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const botRoot = resolve(process.env.BOT_REPOSITORY_PATH || join(docsRoot, "..", "bot-unidad"));
const commandsRoot = join(botRoot, "src", "commands");
const outputPath = join(docsRoot, "src", "docs", "content", "commandCatalogSnapshot.js");
const referenceCommit = "125b0311bdd0ba7e95a12804e31f6ba626e6f407";

function serializeParameter(option) {
  const result = {
    name: option.name,
    description: option.description,
    type: option.type,
    required: Boolean(option.required),
    autocomplete: Boolean(option.autocomplete),
    choices: (option.choices ?? []).map(({ name, value }) => ({ name, value })),
  };

  for (const [source, target] of [
    ["min_value", "minValue"],
    ["max_value", "maxValue"],
    ["min_length", "minLength"],
    ["max_length", "maxLength"],
  ]) {
    if (option[source] !== undefined) result[target] = option[source];
  }

  result.channelTypes = option.channel_types ?? [];
  return result;
}

function collectUsages(node, path = []) {
  const children = (node.options ?? []).filter((option) => option.type === 1 || option.type === 2);
  if (children.length) {
    return children.flatMap((child) => collectUsages(child, [...path, child.name]));
  }

  return [{
    path,
    description: node.description,
    parameters: (node.options ?? []).map(serializeParameter),
  }];
}

async function loadCommands() {
  const files = (await readdir(commandsRoot)).filter((file) => file.endsWith(".js")).sort();
  const commands = [];

  for (const file of files) {
    const module = await import(pathToFileURL(join(commandsRoot, file)));
    if (!module.data) continue;
    const command = module.data.toJSON();
    commands.push({
      name: command.name,
      description: command.description,
      defaultMemberPermissions: command.default_member_permissions ?? null,
      dmPermission: command.dm_permission ?? null,
      usages: collectUsages(command),
    });
  }

  return commands.sort((left, right) => left.name.localeCompare(right.name));
}

const sourceCommit = execFileSync("git", ["rev-parse", "HEAD"], {
  cwd: botRoot,
  encoding: "utf8",
}).trim();
const commands = await loadCommands();
const snapshot = { sourceCommit, referenceCommit, commands };
const source = `// Generated from bot-unidad command builders. Run npm run docs:sync to update.\nexport const commandCatalogSnapshot = ${JSON.stringify(snapshot, null, 2)};\n`;

await writeFile(outputPath, source, "utf8");
const operations = commands.reduce((total, command) => total + command.usages.length, 0);
console.log(`Synchronized ${commands.length} commands and ${operations} operations from ${sourceCommit}.`);
