declare module '@mui/material/styles' {
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