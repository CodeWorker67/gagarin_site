/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gagarin: {
          neon: '#60a5fa',
          'neon-bright': '#93c5fd',
          'neon-dim': '#2563eb',
          royal: '#1e40af',
          cyan: '#22d3ee',
          blue: '#1d4ed8',
          dark: '#050814',
          'dark-alt': '#0c1428',
          card: '#0f1a35',
          border: 'rgba(37, 99, 235, 0.22)',
          muted: '#64748b',
          'muted-soft': '#94a3b8',
          green: '#22d3ee',
        },
        accent: '#2563eb',
        success: '#22d3ee',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'card': '28px',
        'btn': '14px',
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(37, 99, 235, 0.12), 0 24px 48px rgba(0, 0, 0, 0.5), 0 0 60px rgba(29, 78, 216, 0.1)',
        'neon': '0 4px 24px rgba(29, 78, 216, 0.4), 0 0 0 1px rgba(96, 165, 250, 0.28) inset',
        'neon-hover': '0 6px 32px rgba(37, 99, 235, 0.55), 0 0 0 1px rgba(147, 197, 253, 0.35) inset',
        'glow': '0 0 20px rgba(96, 165, 250, 0.28)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.38)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'bg-shimmer': 'bgShimmer 22s ease-in-out infinite',
        'title-shimmer': 'titleShimmer 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.22)' },
          '100%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.45)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        bgShimmer: {
          '0%, 100%': { backgroundPosition: '0% 40%' },
          '35%': { backgroundPosition: '100% 55%' },
          '65%': { backgroundPosition: '85% 20%' },
        },
        titleShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
