import { useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getCurrentMonth, isString } from "helper/functions";


const MonthPickerField = ({ name, value, onChange, placeholder, onFocus }) => {

    const currentMonth = useMemo(() => getCurrentMonth(), []);
    return (<DatePicker
        selected={isString(value) ? null : value}
        onChange={(month) => onChange(name, month)}
        dateFormat="MMM.yy"
        showMonthYearPicker
        minDate={currentMonth}
        placeholderText={placeholder ? name : ""}
        id={name}
        onFocus={() => onFocus()}
    />);
}

export default MonthPickerField;