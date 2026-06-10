// tailwind.config.ts
// NOTE: Tailwind v4 uses CSS-based configuration (@theme in globals.css).
// This file is intentionally minimal and kept only for editor tooling compatibility.
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config