import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },

        // primary: {
        //   100: "#d2d2d2",
        //   200: "#a5a5a5",
        //   300: "#797979",
        //   400: "#4c4c4c",
        //   500: "#1f1f1f",
        //   600: "#191919",
        //   700: "#131313",
        //   800: "#0c0c0c",
        //   900: "#060606",
        // },

        primary: {
          100: "#d0d0d0",
          200: "#a0a0a0",
          300: "#717171",
          400: "#202020",
          500: "#121212",
          600: "#0e0e0e",
          700: "#0b0b0b",
          800: "#070707",
          900: "#040404",
        },

        redAccent: {
          100: "#e7cfcf",
          200: "#cf9f9f",
          300: "#b66f70",
          400: "#9e3f40",
          500: "#860f10",
          600: "#6b0c0d",
          700: "#50090a",
          800: "#360606",
          900: "#1b0303",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        // primary: {
        //   900: "#d2d2d2",
        //   800: "#a5a5a5",
        //   700: "#797979",
        //   600: "#4c4c4c",
        //   500: "#1f1f1f",
        //   400: "#191919",
        //   300: "#131313",
        //   200: "#0c0c0c",
        //   100: "#060606",
        // },

        primary: {
          100: "#040404",
          200: "#070707",
          300: "#0b0b0b",
          400: "#f2f0f0",
          500: "#121212",
          600: "#202020",
          700: "#717171",
          800: "#a0a0a0",
          900: "#d0d0d0",
        },
        redAccent: {
          100: "#1b0303",
          200: "#360606",
          300: "#50090a",
          400: "#6b0c0d",
          500: "#860f10",
          600: "#9e3f40",
          700: "#b66f70",
          800: "#cf9f9f",
          900: "#e7cfcf",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.redAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.redAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
