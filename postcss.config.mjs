/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

// biome-ignore lint/style/noDefaultExport: PostCSS requires default export
export default config;
