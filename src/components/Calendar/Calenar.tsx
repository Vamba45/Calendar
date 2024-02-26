import { FC } from 'react';
import './Calendar.scss';
import { useCalendar } from '../hooks/useCalendar';

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDay?: number;
}

export const Calendar : FC<CalendarProps> = ({
    locale = 'default',
    firstWeekDay = 2,
    selectDate, 
    selectedDate}) => {
    
    const {} = useCalendar({locale, selectedDate, firstWeekDay})

    return (
        <div>
            Calendar component
        </div>
    )
} 