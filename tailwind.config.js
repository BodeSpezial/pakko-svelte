// tailwind.config.js

module.exports = {
  purge: {
      content: ['./src/**/*.{html,svelte}', './src/**/*.{js,jsx,ts,tsx,vue}'],
      defaultExtractor: content => [
          ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
          ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ]
  },
  variants: {
      extend: {
       ringWidth: ['hover', 'active'],
      }
    }
};

