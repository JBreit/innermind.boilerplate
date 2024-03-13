module.exports = {
  'src/**/*.{cjs, cts,mjs,mts,js,jsx,ts,tsx,vue}': [
    'npm run prettier:format',
    'npm run lint:fix',
    'git add *'
  ],
  '*.md': [
    'npm run mdlint:fix',
    'git add *'
  ],
  '.editorconfig': [
    'npx prettier --write',
  ],
  'LICENSE': [
    'npx prettier --write',
  ],
  'package.json': [
    'npx prettier --config .prettierrc.cjs ./package.json --write',
    'npm run prettier:package',
    'git add *'
  ],
};
