Claro, aqui está o README completo para o seu projeto:

```markdown
# Custom Calendar Component

This project is a custom-built calendar component using React, TypeScript, and date-fns, styled with Material UI themes.

## Features

- Light and dark modes
- Selectable date range
- Highlighting of the current day
- Previewing of selected date range

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/custom-calendar.git
   ```
2. Navigate to the project directory:
   ```bash
   cd custom-calendar
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the App

To start the development server, use the following command:

```bash
npm start
```
or
```bash
yarn start
```

### Running Tests

To run tests, use the following command:

```bash
npm test
```
or
```bash
yarn test
```

### File Structure

- **components/**: Contains the main components for the calendar.
  - `Calendar.tsx`: The main calendar component.
  - `CalendarHeader.tsx`: The calendar header component.
  - `DayCell.tsx`: The day cell component.
- **utils/**: Contains utility functions for date manipulation.
  - `dateUtils.ts`: Functions for generating days and formatting dates.
- **themes/**: Contains the theme definitions for light and dark modes.
  - `index.ts`: Theme configurations for light and dark modes.
- **App.tsx**: The main app component.
- **index.tsx**: The entry point of the application.
- **tests/**: Contains the unit tests for the components.

### Contributing

Contributions are welcome! Please feel free to submit a pull request.

### License

This project is licensed under the MIT License.
```

## Example Usage

Here's an example of how to use the `Calendar` component in your application:

### App.tsx

```typescript
import React from "react";
import Calendar from "./components/Calendar";

const App: React.FC = () => {
  return <Calendar />;
};

export default App;
```

### index.tsx

```typescript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

## Unit Tests

To ensure the functionality of the calendar, we have included unit tests. Here are some basic tests for the `Calendar` component:

### `tests/Calendar.test.tsx`

```typescript
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Calendar from "../components/Calendar";

test("renders calendar header correctly", () => {
  const { getByText } = render(<Calendar />);
  expect(getByText(/July 2024/)).toBeInTheDocument();
});

test("toggles dark mode correctly", () => {
  const { getByText, getByRole } = render(<Calendar />);
  const button = getByRole("button");
  
  fireEvent.click(button);
  expect(getByText(/Light Mode/)).toBeInTheDocument();
  
  fireEvent.click(button);
  expect(getByText(/Dark Mode/)).toBeInTheDocument();
});
```

By following the structure and instructions in this README, you should be able to set up, run, and contribute to the Custom Calendar Component project effectively.