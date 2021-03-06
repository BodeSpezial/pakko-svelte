// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
   // directory name: 'build directory'
   public: '/',
   src: '/dist',
  },
  plugins: [
   '@snowpack/plugin-svelte',
   '@snowpack/plugin-postcss',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
      tailwindConfig: './tailwind.config.js',
      open: "none",
  },
  buildOptions: {
    /* ... */
  },
};
