import * as PaletteColorOptions from "@mui/material/styles/createPalette";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    dangerBackground: {
      main: string;
    };
    warningBackground: {
      main: string;
    };
    primaryText: {
      main: string;
    };
    overlay: {
      main: string;
    };
    line: {
      main: string;
    };
    disabled: {
      main: string;
    };
    textSecondary: {
      main: string;
    };
    warningText: {
      main: string;
    }
  }
  interface PaletteOptions {
    dangerBackground?: PaletteColorOptions;
    warningBackground?: PaletteColorOptions;
    primaryText?: PaletteColorOptions;
    overlay?: PaletteColorOptions;
    line?: PaletteColorOptions;
    disabled?: PaletteColorOptions;
    textSecondary?: PaletteColorOptions;
    warningText?: PaletteColorOptions;
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00b5ec",
    },
    success: {
      main: "#6ada44",
    },
    error: {
      main: "#ff5757",
    },
    secondary: {
      main: "#8d8d8d",
    },
    dangerBackground: {
      main: "#ffdbdb",
    },
    warningBackground: {
      main: "#fffee4",
    },
    primaryText: {
      main: "#686868",
    },
    overlay: {
      main: "#ababab",
    },
    line: {
      main: "#00d242",
    },
    disabled: {
      main: "#b6b6b6",
    },
    text: {
      primary: "#686868",
    },
    textSecondary: {
      main: "#fff",
    },
    background: {
      default: "#f6f7f7",
    },
    warningText: {
      main: "#ff5757",
    }
  },
});
