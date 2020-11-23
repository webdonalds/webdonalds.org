const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    ...process.env.NODE_ENV === 'production' ? [
      purgecss({
      content: ['./src/**/*.tsx'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    ] : [],
  ],
};
