# Simple Date Range Calendar

![npm](https://img.shields.io/npm/v/simple-date-range-calendar)
![license](https://img.shields.io/npm/l/simple-date-range-calendar)
![downloads](https://img.shields.io/npm/dw/simple-date-range-calendar)

**Simple Date Range Calendar** is a powerful and customizable React component designed to make date range selection simple and intuitive. It supports both light and dark themes, providing a seamless integration into any application.

## Features

- **Date Range Selection**: Easily select a range of dates.
- **Light and Dark Mode**: Seamless theme integration with support for light and dark modes.
- **Animations**: Smooth transitions and animations for an enhanced user experience.

## Installation

To install the library, use the following command:

```sh
npm install simple-date-range-calendar
```

or with Yarn:

```sh
yarn add simple-date-range-calendar
```

## Usage

Here is a basic example of how to use the `simple-date-range-calendar` component:

```jsx
import React, { useState } from 'react';
import { Calendar } from 'simple-date-range-calendar';
import { addMonths, startOfMonth, subMonths } from 'date-fns';

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [darkMode, setDarkMode] = useState(false);

  const handleMonthChange = (direction) => {
    setCurrentMonth((prevMonth) =>
      direction === 'prev' ? subMonths(prevMonth, 1) : addMonths(prevMonth, 1)
    );
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: darkMode ? '#333' : '#fff' }}>
      <button onClick={handleThemeChange}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Calendar
        theme={darkMode ? 'dark' : 'light'}
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
      />
    </div>
  );
};

export default App;
```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Material-UI**: A popular React UI framework for building responsive, accessible, and customizable user interfaces.
- **date-fns**: A modern JavaScript date utility library.
- **framer-motion**: A production-ready motion library for React.

## Theming

The `simple-date-range-calendar` component supports both light and dark themes. You can easily switch between themes by passing the appropriate theme prop.

### Example

```jsx
<Calendar theme="light" /> // Light mode
<Calendar theme="dark" />  // Dark mode
```

## Author

**Alisson Fabiano**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your suggestions.

## Support

For any questions or support, please open an issue on the [GitHub repository](https://github.com/alissonfabiano/simple-date-range-calendar).

## Repository

Check out the [GitHub repository](https://github.com/alissonfabiano/simple-date-range-calendar) for more information, examples, and source code.