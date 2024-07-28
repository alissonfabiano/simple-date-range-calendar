import { createTheme } from "@mui/material";

declare module '@mui/material' {
  interface Palette {
    border: {
      default: string;
      previewing: string;
      today: string;
    };
    previewing: {
      border: string;
    };
  }

  interface PaletteOptions {
    border?: {
      default?: string;
      previewing?: string;
      today?: string;
    };
    previewing?: {
      border?: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#5f6368',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(25, 118, 210, 0.12)',
    },
    border: {
      default: 'rgba(0, 0, 0, 0.12)',
      previewing: 'rgba(0, 0, 0, 0.12)',
      today: 'rgba(0, 0, 0, 0.6)',
    },
    previewing: {
      border: 'rgba(0, 0, 0, 0.12)',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: 'rgb(144, 202, 249)',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(144, 202, 249, 0.12)',
    },
    border: {
      default: 'rgba(255, 255, 255, 0.12)',
      previewing: 'rgba(255, 255, 255, 0.12)',
      today: 'rgba(255, 255, 255, 0.6)',
    },
    previewing: {
      border: 'rgba(255, 255, 255, 0.12)',
    },
  },
});
