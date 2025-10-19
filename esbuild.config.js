const esbuild = require('esbuild');

const mainOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/main.js',
  platform: 'node',
  target: 'node16',
  format: 'cjs',
  sourcemap: true,
  minify: false,
  external: ['electron'],
};

const preloadOptions = {
  entryPoints: ['src/preload.ts'],
  bundle: true,
  outfile: 'dist/preload.js',
  platform: 'node',
  target: 'node16',
  format: 'cjs',
  sourcemap: true,
  minify: false,
  external: ['electron'],
};

const rendererOptions = {
  entryPoints: ['src/renderer.ts'],
  bundle: true,
  outfile: 'dist/renderer.js',
  platform: 'browser',
  target: 'es2020',
  format: 'iife',
  sourcemap: true,
  minify: false,
};

// Build function
const build = async () => {
  try {
    await Promise.all([
      esbuild.build(mainOptions),
      esbuild.build(preloadOptions),
      esbuild.build(rendererOptions),
    ]);
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
};

// Watch function for development
const watch = async () => {
  const contexts = await Promise.all([
    esbuild.context(mainOptions),
    esbuild.context(preloadOptions),
    esbuild.context(rendererOptions),
  ]);
  await Promise.all(contexts.map((ctx) => ctx.watch()));
  console.log('Watching for changes...');
};

// Export for use in package.json scripts
module.exports = { build, watch, mainOptions, preloadOptions, rendererOptions };

// Run build if this file is executed directly
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.includes('--watch')) {
    watch();
  } else {
    build();
  }
}
