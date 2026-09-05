/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Hôpital Saint-Claire Design Tokens
        ink: {
          DEFAULT: '#0D1B2A',
          muted: '#3A4D6B',
        },
        snow: '#F8FAFC',
        cloud: '#E8EFF5',
        heal: {
          DEFAULT: '#00A3A1',
          hover: '#008B89',
          light: '#E0F5F4',
        },
        vital: {
          DEFAULT: '#E85D3A',
          hover: '#D14A2E',
          light: '#FDECE8',
        },
        gold: {
          DEFAULT: '#C8A951',
          light: '#F5EEDC',
        },
        // Semantic aliases
        primary: {
          DEFAULT: '#00A3A1',
          hover: '#008B89',
          light: '#E0F5F4',
        },
        secondary: {
          DEFAULT: '#0D1B2A',
          muted: '#3A4D6B',
        },
        accent: {
          DEFAULT: '#E85D3A',
          hover: '#D14A2E',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#F8FAFC',
          muted: '#E8EFF5',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        ui: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Modular scale 1.25
        'display-xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-xl': ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-md': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.35', fontWeight: '500' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55', fontWeight: '400' }],
        'label': ['0.875rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.02em' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
        'stat': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', fontWeight: '700', fontFamily: 'Fraunces, serif' }],
      },
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
      },
      maxWidth: {
        'container': '1200px',
        'container-narrow': '960px',
        'prose': '720px',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(13, 27, 42, 0.08), 0 4px 16px -4px rgba(13, 27, 42, 0.06)',
        'card-hover': '0 8px 24px -4px rgba(13, 27, 42, 0.12), 0 12px 32px -8px rgba(13, 27, 42, 0.08)',
        'elevated': '0 12px 40px -8px rgba(13, 27, 42, 0.15), 0 4px 16px -4px rgba(13, 27, 42, 0.1)',
        'modal': '0 24px 64px -12px rgba(13, 27, 42, 0.2), 0 8px 24px -8px rgba(13, 27, 42, 0.15)',
        'focus': '0 0 0 3px rgba(0, 163, 161, 0.4)',
        'focus-vital': '0 0 0 3px rgba(232, 93, 58, 0.4)',
      },
      transitionDuration: {
        'fast': '150ms',
        'DEFAULT': '200ms',
        'slow': '300ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out forwards',
        'slide-up': 'slideUp 300ms ease-out-expo forwards',
        'slide-down': 'slideDown 200ms ease-out forwards',
        'scale-in': 'scaleIn 150ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backdropBlur: {
        'glass': '16px',
      },
      backgroundImage: {
        'gradient-heal': 'linear-gradient(135deg, #00A3A1 0%, #008B89 100%)',
        'gradient-vital': 'linear-gradient(135deg, #E85D3A 0%, #D14A2E 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C8A951 0%, #B89648 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(13,27,42,0) 0%, rgba(13,27,42,0.6) 100%)',
      },
    },
  },
  plugins: [],
};