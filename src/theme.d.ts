import { PaletteOptions } from '@mui/material';

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
