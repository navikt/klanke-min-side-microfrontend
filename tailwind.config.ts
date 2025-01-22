import navTailwind from '@navikt/ds-tailwind';
import type { Config } from 'tailwindcss';

// biome-ignore lint/style/noDefaultExport: Tailwind config requires default export
export default {
  presets: [navTailwind],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      containers: {
        xs: 'var(--a-breakpoint-xs)', // 0
        sm: 'var(--a-breakpoint-sm)', // 480
        md: 'var(--a-breakpoint-md)', // 768
        lg: 'var(--a-breakpoint-lg)', // 1024
        xl: 'var(--a-breakpoint-xl)', // 1280
        '2xl': 'var(--a-breakpoint-2xl)', // 1440
      },
    },
  },
} satisfies Config;
