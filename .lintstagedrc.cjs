module.exports = {
  'src/**/*.{cjs, cts,mjs,mts,js,jsx,ts,tsx,vue}': [
    'npm run prettier:format',
    'npm run lint:fix',
  ],
  '*.md': [
    'npm run mdlint:fix',
  ],
  '.editorconfig': [
    'prettier --write',
  ],
  'LICENSE': [
    'prettier --write',
  ],
  'package.json': [
    'npx prettier --config .prettierrc.cjs ./package.json --write',
    'npm run prettier:package',
  ],
};
