exports.prompter = async (instance, commit) => {
  const { prompter } = await import('@commitlint/cz-commitlint');

  prompter(instance, commit);
}
