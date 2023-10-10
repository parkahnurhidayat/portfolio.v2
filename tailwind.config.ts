import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      keyframes: {
        slideInfinite: {
          "0%": {  transform: 'translateX(0%)'},
          "100%": {transform: 'translateX(-50%)'},
        },
        slideInfiniteReverse: {
          "0%": {  transform: 'translateX(-50%)'},
          "100%": {transform: 'translateX(0%)'},
        },
      },
      animation: {
        slide: 'slideInfinite 38s linear infinite',
        slideReverse: 'slideInfiniteReverse 38s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        primay:'Pacifico',
      },
      screens:{
        '2xl':'1320px',
      }
    }
  },
  plugins: [], 
}
export default config
