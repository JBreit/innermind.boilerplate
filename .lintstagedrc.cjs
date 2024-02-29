module.exports = {
  'src/**/*.{cjs,mjs,js,jsx,vue}': [
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
    'npx prettier --config .prettierrc ./package.json --write',
    'npm run prettier:package',
  ],
};
