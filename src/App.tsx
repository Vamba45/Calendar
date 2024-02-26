import { FC, useState } from "react";
import { Calendar } from "./components/Calendar/Calenar";
import getMothesNames from "./utils/helpers/date/getMothesNames";
import { getWeekDaysNames } from "./utils/helpers/date/getWeekDaysNames";

export const App: FC = () => {
    const [selectedDate, selectDate] = useState(new Date());

    return (
        <div className="app__container">
            <Calendar selectDate={selectDate} selectedDate={selectedDate}/>
        </div>
    )
}