# React Date Range Calendar

**React Date Range Calendar** is a flexible and customizable date range calendar component for React applications. This library allows you to easily select date ranges with an intuitive interface, offering several themes out-of-the-box with full support for creating your own themes.

## Installation

Install the library using npm or yarn:

```bash
npm install simple-date-range-calendar
# or
yarn add simple-date-range-calendar
```

## Basic Usage (No Theme)

If you prefer not to use a theme, you can directly use the `Calendar` component as shown below. The component will use the default Material UI styles.

```tsx
import React from 'react';
import { Calendar } from 'simple-date-range-calendar';

const App = () => {
  return (
    <div>
      <Calendar startDate={new Date()} endDate={new Date()} />
    </div>
  );
};

export default App;
```

## Usage with Theme

The calendar component **supports** optional theming via the `ThemeProvider` from Material UI. Here's how to use the `Calendar` component with theming:

```tsx
import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Calendar, lightTheme } from 'simple-date-range-calendar';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Calendar startDate={new Date()} endDate={new Date()} />
    </ThemeProvider>
  );
};

export default App;
```

## Props

The `Calendar` component accepts the following props:

| Prop                    | Type                                                       | Description                                                            |
| ----------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| `startDate`             | `Date \| null`                                             | Optional. The starting date of the selected range. Defaults to `null`. |
| `endDate`               | `Date \| null`                                             | Optional. The ending date of the selected range. Defaults to `null`.   |
| `onDateRangeChange`     | `(startDate: Date \| null, endDate: Date \| null) => void` | Optional. Callback triggered whenever the date range changes.          |
| `onDateRangeIsSelected` | `(startDate: Date, endDate: Date) => void`                 | Optional. Callback triggered when the date range is fully selected.    |

## Themes

The library provides several themes out-of-the-box. A **theme** in this library uses the standard Material UI theming system.

### Available Default Themes

You can use any of the following default themes:

- **Pink Theme**
- **Royal Blue Theme**
- **Green Theme**
- **Light Theme**
- **Dark Theme**

### Using Default Themes

Here’s how to use one of the default themes with the calendar:

```tsx
import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Calendar, royalBlueTheme } from 'simple-date-range-calendar';

const App = () => {
  return (
    <ThemeProvider theme={royalBlueTheme}>
      <Calendar startDate={new Date()} endDate={new Date()} />
    </ThemeProvider>
  );
};

export default App;
```

### Extending an Existing Theme

You can extend any of the predefined themes by using Material UI's `createTheme` and `deepmerge` utilities. Here’s an example of how to extend the **Royal Blue Theme** and override just the background and text colors:

```ts
import { createTheme } from '@mui/material';
import { deepmerge, royalBlueTheme } from '@mui/utils';

const customTheme = createTheme(
  deepmerge(royalBlueTheme, {
    palette: {
      background: {
        default: '#f0f0f0', // New default background color
        paper: '#ffffff', // New paper background color
      },
      text: {
        primary: '#123456', // New primary text color
      },
    },
  }),
);
```

## Full Example with Theme Selector

Here is a full example that includes multiple themes and allows you to switch between them dynamically:

```tsx
import { useState } from 'react';
import { Container, Typography, Box, ThemeProvider } from '@mui/material';
import { 
  Calendar,
  darkTheme,
  greenTheme,
  lightTheme,
  pinkTheme,
  royalBlueTheme,
} from 'simple-date-range-calendar';
import { addDays } from 'date-fns';

const themes = [
  { name: 'Pink', theme: pinkTheme },
  { name: 'Royal Blue', theme: royalBlueTheme },
  { name: 'Green', theme: greenTheme },
  { name: 'Light', theme: lightTheme },
  { name: 'Dark', theme: darkTheme },
];

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = themes[themeIndex].theme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: currentTheme.palette.background.default,
        }}
      >
        <Typography variant="h2" color={currentTheme.palette.text.secondary}>
          {themes[themeIndex].name}
        </Typography>
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
          <Calendar startDate={addDays(new Date(), -15)} endDate={new Date()} />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
