import path from "node:path";

export const LUMENTIS_FOLDER = ".lumentis";
export const WIZARD_STATE_FILE = "wizard.json";
export const MESSAGES_FOLDER = "messages";
export const lumentisFolderPath = path.join(process.cwd(), LUMENTIS_FOLDER);
export const wizardStatePath = path.join(lumentisFolderPath, WIZARD_STATE_FILE);

export const WRITING_STYLE_SIZE_LIMIT = 10000;

export const MAX_HEADING_CHAR_LENGTH = 50;
export const NUMBER_OF_CHARACTERS_TO_FLUSH_TO_FILE = 200;

// MUST UPDATE `AI_PROVIDERS` IN ai.ts WHEN NEW PROVIDER ADDED
export const AI_MODELS_UI = [
  {
    name: "Claude 3 Opus",
    provider: "anthropic",
    model: "claude-3-opus-20240229",
    smarterDescription: "This is the ferrari. Expensive but so good.",
    pageDescription: "Smartest - Use for expensive but awesome results!"
  },
  {
    name: "Claude 3 Sonnet",
    provider: "anthropic",
    model: "claude-3-sonnet-20240229",
    smarterDescription: "Perfectly fine!",
    pageDescription: "Middle child - still kind of expensive"
  },
  {
    name: "Claude 3 Haiku",
    provider: "anthropic",
    model: "claude-3-haiku-20240307",
    smarterDescription: "Cheapest, not preferred for this stage",
    pageDescription: "Fast and cheap - get what we pay for"
  },
  {
    name: "OpenAI GPT-3.5 Turbo (1106)",
    provider: "openai",
    model: "gpt-3.5-turbo-1106",
    tokenCountingModel: "gpt-3.5-turbo", // required bc OpenAI token counting is frustrating
    smarterDescription:
      "Pretty cheap, good at JSON, bit dumb for the management stuff",
    pageDescription: "Fast, cheap, lower rate limit than Claude"
  },
  {
    name: "OpenAI GPT-4 Turbo",
    provider: "openai",
    model: "gpt-4-turbo-2024-04-09",
    tokenCountingModel: "gpt-4", // required bc OpenAI token counting is frustrating
    smarterDescription: "Bit expensive but smart",
    pageDescription:
      "Good for high quality docs when you need to make a lot and are willing to pay"
  }
] as const;

// MUST UPDATE `AI_PROVIDERS` IN ai.ts WHEN NEW PROVIDER ADDED
export const AI_MODELS_INFO: Record<
  string,
  {
    provider: "anthropic" | "openai";
    tokenCountingModel?: string;
    inputTokensPerM: number;
    outputTokensPerM;
  }
> = {
  "claude-3-opus-20240229": {
    provider: "anthropic",
    inputTokensPerM: 15,
    outputTokensPerM: 75
  },
  "claude-3-sonnet-20240229": {
    provider: "anthropic",
    inputTokensPerM: 3,
    outputTokensPerM: 15
  },
  "claude-3-haiku-20240307": {
    provider: "anthropic",
    inputTokensPerM: 0.25,
    outputTokensPerM: 1.25
  },
  "gpt-4-turbo-2024-04-09": {
    provider: "openai",
    tokenCountingModel: "gpt-4", // required bc OpenAI token counting is frustrating
    inputTokensPerM: 10,
    outputTokensPerM: 30
  },
  "gpt-3.5-turbo-1106": {
    provider: "openai",
    tokenCountingModel: "gpt-3.5-turbo", // required bc OpenAI token counting is frustrating
    inputTokensPerM: 0.5,
    outputTokensPerM: 1.5
  }
} as const;

export const EDITORS = [
  { name: "nano", command: "nano" },
  { name: "vim but know you can never leave", command: "vim" },
  { name: "emacs", command: "emacs" }
  // TODO: We should work very hard to re-enable these
  // { name: "vscode", command: "code" },
  // { name: "zed", command: "zed" },
  // { name: "sublime", command: "subl" },
] as const;

export const RUNNERS = [
  {
    name: "bun",
    command: "bun",
    installPrefix: "add"
  },
  {
    name: "npm",
    command: "npm",
    installPrefix: "install"
  },
  {
    name: "yarn",
    command: "yarn",
    installPrefix: "add"
  },
  {
    name: "pnpm",
    command: "pnpm",
    installPrefix: "add"
  }
] as const;
