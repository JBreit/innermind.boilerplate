/*
  eslint-disable @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-member-access
*/
import shell from 'shelljs';

shell.mkdir('-p', [
  'dist/public/assets/js/',
  'dist/public/assets/fonts/',
  'dist/public/assets/img/',
]);

shell.cp('-R', 'src/public/assets/js', 'dist/public/assets/');
shell.cp('-R', 'src/public/assets/fonts', 'dist/public/assets/');
shell.cp('-R', 'src/public/assets/img', 'dist/public/assets/');
