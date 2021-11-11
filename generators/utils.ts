export const toCamel = (s: string) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("-", "").replace("_", "");
  });
};

export const format = async () => {
  await Deno.run({
    cmd: ["deno", "fmt", "--config", "deno.json"],
    cwd: "../",
    stdout: "piped",
  }).output();
};
