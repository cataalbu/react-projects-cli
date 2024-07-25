export function formatProjectCode() {
  // Run code formatter
  spawnSync('yarn', ['prettier', '.', '--write'], {
    cwd: path.join(projectName),
  });
}
