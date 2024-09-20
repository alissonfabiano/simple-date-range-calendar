import { createTheme } from '@mui/material/styles';

export const royalBlueTheme = createTheme({
  palette: {
    primary: {
      main: '#4169E1',
      light: '#6A83E8',
      dark: '#27408B',
    },
    secondary: {
      main: '#1E90FF',
    },
    background: {
      default: '#E3EFFF',
      paper: '#C7DFFF',
    },
    text: {
      primary: '#27408B',
      secondary: '#6A83E8',
      disabled: '#A0C8FF',
    },
    action: {
      hover: 'rgba(65, 105, 225, 0.1)',
      selected: 'rgba(65, 105, 225, 0.2)',
      disabled: 'rgba(65, 105, 225, 0.3)',
      focus: 'rgba(65, 105, 225, 0.5)',
    },
    info: {
      main: 'rgba(65, 105, 225, 0.3)',
      dark: 'rgba(65, 105, 225, 0.7)',
    },
    divider: 'rgba(65, 105, 225, 0.2)',
  },
});

export const pinkTheme = createTheme({
  palette: {
    primary: {
      main: '#E91E63',
      light: '#F48FB1',
      dark: '#C2185B',
    },
    secondary: {
      main: '#D81B60',
    },
    background: {
      default: '#FDE2E4',
      paper: '#FAD1D7',
    },
    text: {
      primary: '#880E4F',
      secondary: '#AD1457',
      disabled: '#F8BBD0',
    },
    action: {
      hover: 'rgba(233, 30, 99, 0.1)',
      selected: 'rgba(233, 30, 99, 0.2)',
      disabled: 'rgba(233, 30, 99, 0.3)',
      focus: 'rgba(233, 30, 99, 0.5)',
    },
    info: {
      main: 'rgba(233, 30, 99, 0.3)',
      dark: 'rgba(233, 30, 99, 0.7)',
    },
    divider: 'rgba(233, 30, 99, 0.2)',
  },
});

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#388E3C',
      light: '#66BB6A',
      dark: '#2E7D32',
    },
    secondary: {
      main: '#43A047',
    },
    background: {
      default: '#E8F5E9',
      paper: '#C8E6C9',
    },
    text: {
      primary: '#1B5E20',
      secondary: '#388E3C',
      disabled: '#A5D6A7',
    },
    action: {
      hover: 'rgba(56, 142, 60, 0.1)',
      selected: 'rgba(56, 142, 60, 0.2)',
      disabled: 'rgba(56, 142, 60, 0.3)',
      focus: 'rgba(56, 142, 60, 0.5)',
    },
    info: {
      main: 'rgba(56, 142, 60, 0.3)',
      dark: 'rgba(56, 142, 60, 0.7)',
    },
    divider: 'rgba(56, 142, 60, 0.2)',
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f0f0f0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#5f6368',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(25, 118, 210, 0.12)',
    },
    info: {
      main: 'rgba(0, 0, 0, 0.12)',
      dark: 'rgba(0, 0, 0, 0.6)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
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
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(144, 202, 249, 0.12)',
    },
    info: {
      main: 'rgba(255, 255, 255, 0.12)',
      dark: 'rgba(255, 255, 255, 0.6)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
});
