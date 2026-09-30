/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        coal: '#111113',
        concrete: '#1A1A1C',
        bone: '#EDEAE3',
        ash: '#8E8E93',
        smoke: '#2A2A2D',
        blood: '#E10600',
        acid: '#D6FF3F',
        royal: '#2B3BFF',
        haze: '#8B7CFF',
        sand: '#C9B895',
        ember: '#FF5C00',
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Arial Black"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: { mega: '-0.06em', tight2: '-0.03em' },
    },
  },
  plugins: [],
};
