import {createTheme} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    black: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    black: true;
    white: true;
  }
}
const verdeNight = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#13FF75",
      light: "#A7FFC2",
      dark: "#00AB55",
    },
    secondary: {
      main: "#00AB55",
    },
    black: {
      main: "#000000",
      light: "#000000",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    white: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000",
    },
    info: {
      main: "#54D8FF",
    },
    text: {
      primary: "#ffffff",
      secondary: "#D7D9DC",
      disabled: "#97999D",
    },
    background: {
      paper: "rgba(167, 255, 194, 0.05)",
      default: "#131413",
    },
    grey: {
      600: "#DDDDDD26",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "'DM Sans', sans-serif",
    subtitle2: {
      fontSize: 11,
    },
    subtitle1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 13,
    },
    body1: {
      fontSize: 16,
    },
    h4: {
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      fontSize: 24,
    },
  },
  shape: {
    borderRadius: 6,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1020,
      lg: 1264,
      xl: 1920,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        color: "secondary",
        variant: "outlined",
      },
      styleOverrides: {
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeLarge: {
          fontSize: 16,
        },
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
        outlined: ({ownerState}) => ({
          ...(ownerState.color === "secondary"
            ? {
                borderColor: "#00AB55",
                color: "#ffffff",
              }
            : {}),
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          borderRadius: 6,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          fontSize: 11,
          fontWeight: 700,
        },
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "black",
        },
        arrow: {
          color: "black",
        },
      },
    },
  },
});

export default verdeNight;
