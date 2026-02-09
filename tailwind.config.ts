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
        // Vintage Botanical Palette - Cream, Beige, Brown, Gold
        vintage: {
          // Cream backgrounds (lightest tones)
          cream: {
            50: "#FDFCFA",
            100: "#FAF8F3",
            200: "#F5F3ED",
            300: "#F0EDE5",
            DEFAULT: "#F5F3ED",
          },
          // Beige tones (sections, subtle backgrounds)
          beige: {
            100: "#F0EBE3",
            200: "#E8E1D5",
            300: "#DFD6C8",
            400: "#D4C4B0",
            DEFAULT: "#E8E1D5",
          },
          // Brown (text, borders, strong accents)
          brown: {
            300: "#A6907E",
            400: "#8B6F47",
            500: "#6B5744",
            600: "#5A4637",
            700: "#4A3628",
            DEFAULT: "#6B5744", // WCAG AA: 5.8:1 on cream backgrounds
          },
          // Gold accents (primary actions, highlights)
          gold: {
            300: "#D9B978",
            400: "#C9A961",
            500: "#B89968",
            600: "#A68952",
            DEFAULT: "#C9A961",
          },
          // Sage green (foliage accents, nature elements)
          sage: {
            100: "#E4EDDF",
            200: "#CDDDC5",
            300: "#A8C49E",
            400: "#8AB87D",
            500: "#6FA364",
            DEFAULT: "#A8C49E",
          },
        },

        // Legacy daisy colors (keep for backwards compatibility during transition)
        daisy: {
          forest: {
            DEFAULT: "#6B5744",
            600: "#6B5744",
            700: "#5A4637",
          },
          sunshine: {
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#FCD34D",
            400: "#FBBF24",
            500: "#F59E0B",
            600: "#D97706",
            700: "#B45309",
            DEFAULT: "#C9A961",
          },
        },

        // NEW: Warmer daisy palette for full revision
        "daisy-gold": {
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          DEFAULT: "#FBBF24",
        },
        "daisy-cream": {
          50: "#FFFEF7",
          100: "#FEF9E7",
          200: "#FDF2D0",
          DEFAULT: "#FFFEF7",
        },
        "daisy-sage": {
          400: "#84CC16",
          500: "#65A30D",
          600: "#4D7C0F",
          700: "#3F6212",
          DEFAULT: "#4D7C0F",
        },
        "daisy-earth": {
          400: "#A16207",
          500: "#92400E",
          600: "#854D0E",
          700: "#713F12",
          DEFAULT: "#854D0E",
        },

        // Semantic colors mapped to vintage palette
        primary: {
          DEFAULT: "#C9A961", // Vintage gold
          foreground: "#FDFCFA",
        },
        secondary: {
          DEFAULT: "#6B5744", // Vintage brown
          foreground: "#FAF8F3",
        },
        accent: {
          DEFAULT: "#A8C49E", // Sage green
          foreground: "#4A3628",
        },
        muted: {
          DEFAULT: "#F5F3ED", // Cream
          foreground: "#6B5744",
        },
        card: {
          DEFAULT: "#FDFCFA", // Lightest cream
          foreground: "#4A3628",
        },
        popover: {
          DEFAULT: "#FDFCFA",
          foreground: "#4A3628",
        },
        border: "#D4C4B0", // Light beige borders
        input: "#E8E1D5", // Beige input backgrounds
        ring: "#C9A961", // Gold focus rings

        // Status colors (adjusted for vintage palette)
        destructive: {
          DEFAULT: "#C85A54", // Muted red for errors
          foreground: "#FDFCFA",
        },
        success: {
          DEFAULT: "#7A9B6F", // Muted green for success
          foreground: "#FDFCFA",
        },
        warning: {
          DEFAULT: "#D9A048", // Warm amber for warnings
          foreground: "#FDFCFA",
        },
        info: {
          DEFAULT: "#7A9FB5", // Muted blue for info
          foreground: "#FDFCFA",
        },

        // Backgrounds
        background: "#FAF8F3", // Warm cream instead of white
        foreground: "#4A3628", // Dark brown for text
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        heading: ["var(--font-playfair)", "Georgia", "Garamond", "serif"],
        script: ["var(--font-parisienne)", "Brush Script MT", "cursive"],
        accent: ["var(--font-playfair)", "Georgia", "Garamond", "serif"],
        handwriting: ["var(--font-homemade-apple)", "Brush Script MT", "cursive"],
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
        // Vintage shadows - soft brown tints
        "vintage-sm": "0 1px 3px 0 rgba(107, 87, 68, 0.10), 0 1px 2px -1px rgba(107, 87, 68, 0.06)",
        "vintage-md": "0 4px 6px -1px rgba(107, 87, 68, 0.12), 0 2px 4px -2px rgba(107, 87, 68, 0.08)",
        "vintage-lg": "0 10px 15px -3px rgba(107, 87, 68, 0.15), 0 4px 6px -4px rgba(107, 87, 68, 0.10)",
        "vintage-xl": "0 20px 25px -5px rgba(107, 87, 68, 0.18), 0 8px 10px -6px rgba(107, 87, 68, 0.12)",
        "vintage-glow": "0 0 20px rgba(201, 169, 97, 0.25)", // Gold glow effect
        // Legacy daisy shadows (for backwards compatibility)
        "daisy-lg": "0 10px 15px -3px rgba(107, 87, 68, 0.15), 0 4px 6px -4px rgba(107, 87, 68, 0.10)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-gentle": "pulseGentle 3s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "glow": "glow 2s ease-in-out infinite",
        "wave": "wave 2.5s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.02)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 169, 97, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 169, 97, 0.5)" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Vintage botanical gradients - warm and elegant
        "vintage-cream": "linear-gradient(135deg, #FDFCFA 0%, #F5F3ED 100%)",
        "vintage-beige": "linear-gradient(135deg, #F5F3ED 0%, #E8E1D5 100%)",
        "vintage-gold": "linear-gradient(135deg, #C9A961 0%, #B89968 100%)",
        "vintage-warm": "linear-gradient(135deg, #C9A961 0%, #D9B978 100%)",
        "vintage-footer": "linear-gradient(180deg, #E8E1D5 0%, #6B5744 100%)",
        "vintage-paper": "linear-gradient(135deg, #FAF8F3 0%, #F5F3ED 50%, #F0EBE3 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
