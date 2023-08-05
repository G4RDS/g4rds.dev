import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  'html, body': {
    h: '100%',
    bg: 'gray.950',
    color: 'token(colors.text.base)',
    fontSize: '16px',
    lineHeight: '1.5em',
    fontFamily:
      "'Space Grotesk', 'Hiragino Sans', HiraKakuPro-W3, HiraKakuProN-W3, 'Hiragino Kaku Gothic Pro', 'Hiragino Kaku Gothic ProN', sans-serif",
  },
  a: {
    color: '#0284c7',
    textDecoration: 'none',
  },
  'ul, ol': {
    listStyle: 'none',
  },
});

export default defineConfig({
  preflight: true,
  gitignore: true,
  globalCss,
  outdir: 'styled-system',
  include: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            50: { value: '#f8fafc' },
            100: { value: '#f1f5f9' },
            200: { value: '#e2e8f0' },
            300: { value: '#cbd5e1' },
            400: { value: '#94a3b8' },
            500: { value: '#64748b' },
            600: { value: '#475569' },
            700: { value: '#334155' },
            800: { value: '#1e293b' },
            900: { value: '#0f172a' },
            950: { value: '#020617' },
            alpha50: { value: 'rgba(100, 116, 139, 0.5)' },
          },
          red: {
            50: { value: '#FEF2F2' },
            100: { value: '#FEE2E2' },
            200: { value: '#FECACA' },
            300: { value: '#FCA5A5' },
            400: { value: '#F87171' },
            500: { value: '#EF4444' },
            600: { value: '#DC2626' },
            700: { value: '#B91C1C' },
            800: { value: '#991B1B' },
            900: { value: '#7F1D1D' },
            alpha50: { value: 'rgba(239, 68, 68, 0.5)' },
          },
          sky: {
            50: { value: '#f0f9ff' },
            100: { value: '#e0f2fe' },
            200: { value: '#bae6fd' },
            300: { value: '#7dd3fc' },
            400: { value: '#38bdf8' },
            500: { value: '#0ea5e9' },
            600: { value: '#0284c7' },
            700: { value: '#0369a1' },
            800: { value: '#075985' },
            900: { value: '#0c4a6e' },
            alpha50: { value: 'rgba(14, 165, 233, 0.5)' },
          },
          blue: {
            50: { value: '#eff6ff' },
            100: { value: '#dbeafe' },
            200: { value: '#bfdbfe' },
            300: { value: '#93c5fd' },
            400: { value: '#60a5fa' },
            500: { value: '#3b82f6' },
            600: { value: '#2563eb' },
            700: { value: '#1d4ed8' },
            800: { value: '#1e40af' },
            900: { value: '#1e3a8a' },
            950: { value: '#172554' },
          },
          indigo: {
            50: { value: '#eef2ff' },
            100: { value: '#e0e7ff' },
            200: { value: '#c7d2fe' },
            300: { value: '#a5b4fc' },
            400: { value: '#818cf8' },
            500: { value: '#6366f1' },
            600: { value: '#4f46e5' },
            700: { value: '#4338ca' },
            800: { value: '#3730a3' },
            900: { value: '#312e81' },
            950: { value: '#1e1b4b' },
          },
          green: {
            50: { value: '#f0fdf4' },
            100: { value: '#dcfce7' },
            200: { value: '#bbf7d0' },
            300: { value: '#86efac' },
            400: { value: '#4ade80' },
            500: { value: '#22c55e' },
            600: { value: '#16a34a' },
            700: { value: '#15803d' },
            800: { value: '#166534' },
            900: { value: '#14532d' },
            alpha50: { value: 'rgba(34, 197, 94, 0.5)' },
          },
        },
        easings: {
          easeInOut: { value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
          easeOut: { value: 'cubic-bezier(0.0, 0, 0.2, 1)' },
          easeIn: { value: 'cubic-bezier(0.4, 0, 1, 1)' },
          sharp: { value: 'cubic-bezier(0.4, 0, 0.6, 1)' },
        },
      },
      semanticTokens: {
        colors: {
          text: {
            light: { value: '{colors.gray.100}' },
            base: { value: '{colors.gray.300}' },
            dark: { value: '{colors.gray.500}' },
          },
          border: {
            image: { value: 'rgba(0, 0, 0, 0.05)' },
          },
        },
      },
    },
  },
});
