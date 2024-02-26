import React from "react";
import { createDate, createMonth, getMothesNames } from "../../utils/helpers/date/index";
import { getWeekDaysNames } from "../../utils/helpers/date/getWeekDaysNames";

interface UseCalendarParams {
    locale?: string;
    selectedDate: Date;
    firstWeekDay: number;
}

export const useCalendar = ({firstWeekDay = 2, locale = 'default', selectedDate: date}: UseCalendarParams) => {

    const [mode, setMode] = React.useState<'days' | 'monthes' | 'years'>('days');
    const [selectedDate, setSelectedDay] = React.useState(createDate({date}));
    const [selectedMonth, setSelectedMonth] = React.useState(createMonth({date: new Date(selectedDate.year, selectedDate.monthIndex), locale}));

    const [selectedYear, setSelectedYear] = React.useState(selectedDate.year);

    const mothesNames = React.useMemo(() => getMothesNames(locale), [])
    const weekNames = React.useMemo(() => getWeekDaysNames(firstWeekDay, locale), [])

    console.log(weekNames)
 
    return {};
}

export default useCalendar;