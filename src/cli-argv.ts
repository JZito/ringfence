export function normalizeCliArgv(argv: string[]): string[] {
  if (argv.length >= 3 && argv[2] === "--") {
    return [argv[0]!, argv[1]!, ...argv.slice(3)];
  }

  return argv;
}
