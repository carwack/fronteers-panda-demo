import { defineConfig } from "@pandacss/dev";

import { buttonRecipe } from '@styles/recipes/Button.recipe'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          airbnb: {
            accent: { value: "{colors.pink.800}", description: "The Airbnb light accent color" },
            accentLight: { value: "{colors.pink.200}", description: "The Airbnb light accent color" },
          },
          button: {
            black: { value: "#222222", description: "The black color to use in buttons"},
            bg: {
              DEFAULT: { value: "white", description: "The default background color of the button" },
              state: { value: "#F7F7F7", description: "The background color of the button when in a state"},
            }
          },
          sneaker: {
            red: { value: "#A62121", description: "The red color to use in sneakers"},
            accent: { value: "{colors.gray.800}", description: "The accent color to use in sneakers"},
            accentLight: { value: "{colors.gray.200}", description: "The light accent color to use in sneakers"},
          }
        }
      },
      recipes: {
        button: buttonRecipe
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
