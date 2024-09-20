import { JSX as JSX_2 } from 'react/jsx-runtime';
import { Theme } from '@mui/material';

export declare const Calendar: ({ styles, startDate, endDate, onDateRangeChange, onDateRangeIsSelected, }: CalendarProps) => JSX_2.Element;

declare interface CalendarProps {
    startDate?: Date | null;
    endDate?: Date | null;
    onDateRangeChange?: (startDate: Date | null, endDate: Date | null) => void;
    onDateRangeIsSelected?: (startDate: Date, endDate: Date) => void;
    styles?: {
        borderRadius?: number;
        width?: number | string;
    };
}

export declare const darkTheme: Theme;

export declare const greenTheme: Theme;

export declare const lightTheme: Theme;

export declare const pinkTheme: Theme;

export declare const royalBlueTheme: Theme;

export { }
