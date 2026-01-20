import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Daisy Foundation Brand Colors - Bright & Cheerful for Daycare
        daisy: {
          // Vibrant Greens (nature, growth, safety)
          forest: {
            DEFAULT: "#2D7D3E", // Bright Forest Green - Primary brand color (WCAG AA: 4.6:1 on white)
            50: "#F0FDF4",
            100: "#DCFCE7",
            200: "#BBF7D0",
            300: "#86EFAC",
            400: "#4ADE80",
            500: "#22C55E",
            600: "#16A34A",
            700: "#2D7D3E", // Base color - vibrant green
            800: "#166534",
            900: "#14532D",
            950: "#052E16",
          },
          // Playful Blue-Green (calm, trust, freshness)
          teal: {
            light: "#5EEAD4",
            DEFAULT: "#14B8A6", // Teal - playful accent
            deep: "#0D9488",
          },
          // Warm Sunshine Yellow (energy, joy, optimism)
          sunshine: {
            DEFAULT: "#FBBF24", // Sunshine Yellow - Primary accent (WCAG AAA: 8.4:1 on black)
            light: "#FDE047",
            warm: "#F59E0B",
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#FCD34D",
            400: "#FBBF24", // Base Sunshine
            500: "#F59E0B",
            600: "#D97706",
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
          },
          // Coral Pink (warmth, care, compassion)
          coral: {
            light: "#FCA5A5",
            DEFAULT: "#F87171", // Coral - secondary accent
            deep: "#EF4444",
          },
          // Soft Purple (creativity, imagination)
          lavender: {
            light: "#DDD6FE",
            DEFAULT: "#A78BFA", // Lavender accent
            deep: "#8B5CF6",
          },
          // Sky Blue (peace, serenity, trust)
          sky: {
            light: "#BAE6FD",
            DEFAULT: "#38BDF8", // Sky Blue
            deep: "#0284C7",
          },
        },

        // Semantic colors mapped to vibrant Daisy brand
        primary: {
          DEFAULT: "#2D7D3E", // Bright Forest Green
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#14B8A6", // Teal
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FBBF24", // Sunshine Yellow
          foreground: "#1F2937", // Dark gray for contrast
        },
        muted: {
          DEFAULT: "#F0FDF4", // Very light green tint
          foreground: "#166534",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1F2937",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1F2937",
        },
        border: "#BBF7D0",
        input: "#D1D5DB",
        ring: "#2D7D3E",

        // Status colors (vibrant & clear)
        destructive: {
          DEFAULT: "#EF4444", // Bright red for errors
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#22C55E", // Bright green for success
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#F59E0B", // Warm orange for warnings
          foreground: "#FFFFFF",
        },
        info: {
          DEFAULT: "#38BDF8", // Sky blue for info
          foreground: "#FFFFFF",
        },

        // Backgrounds
        background: "#FFFFFF",
        foreground: "#1F2937", // Softer dark gray instead of near-black
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Responsive typography
        "display-lg": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }], // 72px
        "display-md": ["3.75rem", { lineHeight: "1.1", fontWeight: "700" }], // 60px
        "display-sm": ["3rem", { lineHeight: "1.2", fontWeight: "700" }], // 48px
        "heading-xl": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }], // 36px
        "heading-lg": ["1.875rem", { lineHeight: "1.3", fontWeight: "600" }], // 30px
        "heading-md": ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }], // 24px
        "heading-sm": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }], // 20px
        "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // 18px
        "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }], // 14px
        "caption": ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }], // 12px
      },
      boxShadow: {
        // Daisy-themed shadows - softer, colorful
        "daisy-sm": "0 1px 3px 0 rgba(45, 125, 62, 0.12), 0 1px 2px -1px rgba(45, 125, 62, 0.08)",
        "daisy-md": "0 4px 6px -1px rgba(45, 125, 62, 0.12), 0 2px 4px -2px rgba(45, 125, 62, 0.08)",
        "daisy-lg": "0 10px 15px -3px rgba(45, 125, 62, 0.12), 0 4px 6px -4px rgba(45, 125, 62, 0.08)",
        "daisy-xl": "0 20px 25px -5px rgba(45, 125, 62, 0.15), 0 8px 10px -6px rgba(45, 125, 62, 0.08)",
        "daisy-glow": "0 0 20px rgba(251, 191, 36, 0.3)", // Sunshine glow effect
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Daisy-themed gradients - vibrant & playful
        "daisy-forest": "linear-gradient(135deg, #2D7D3E 0%, #22C55E 100%)",
        "daisy-teal": "linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)",
        "daisy-sunshine": "linear-gradient(135deg, #F59E0B 0%, #FDE047 100%)",
        "daisy-hero": "linear-gradient(135deg, #2D7D3E 0%, #14B8A6 50%, #38BDF8 100%)",
        "daisy-warm": "linear-gradient(135deg, #FBBF24 0%, #F87171 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
