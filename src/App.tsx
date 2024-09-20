import { useState } from 'react';
import { styled, Theme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, Box } from '@mui/material';
import { Calendar } from './components';
import { darkTheme, greenTheme, lightTheme, pinkTheme, royalBlueTheme } from './themes';
import { addDays } from 'date-fns';

const MaterialUISwitch = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
});

const ThemeBlock = styled('div')(({ theme, selected }: { theme: Theme; selected: boolean }) => ({
  width: 40,
  height: 40,
  backgroundColor: theme.palette.background.default,
  border: selected
    ? `3px solid ${theme.palette.primary.dark}`
    : `1px solid ${theme.palette.primary.light}`,
  borderRadius: '50%',
  cursor: 'pointer',
}));

const themes = [
  { name: 'Pink', theme: pinkTheme },
  { name: 'Royal Blue', theme: royalBlueTheme },
  { name: 'Green', theme: greenTheme },
  { name: 'Light', theme: lightTheme },
  { name: 'Dark', theme: darkTheme },
];

const App = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const handleThemeChange = (index: number) => {
    setThemeIndex(index);
  };

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" color={currentTheme.palette.text.secondary}>
            {themes[themeIndex].name}
          </Typography>
          <MaterialUISwitch>
            {themes.map((themeOption, index) => (
              <ThemeBlock
                key={themeOption.name}
                theme={themeOption.theme}
                selected={themeIndex === index}
                onClick={() => handleThemeChange(index)}
              />
            ))}
          </MaterialUISwitch>
        </Box>
        <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            color={currentTheme.palette.text.primary}
          >
            Simple Date Range Calendar Demo
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb: 4 }}>
            <Calendar startDate={addDays(new Date(), -15)} endDate={new Date()} />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
