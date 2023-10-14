module.exports = {
  'src/**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,vue}': ['npm run lint:fix'],
  'src/**/*.{cjs,mjs,js,jsx,cts,mts,ts,tsx,json,css,scss,vue}': [
    'prettier --write',
  ],
  '*.md': ['npm run mdlint:fix'],
};
