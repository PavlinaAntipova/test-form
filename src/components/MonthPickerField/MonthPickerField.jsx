import { forwardRef, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getCurrentMonth, isString } from "helper/functions";

const MonthPickerField = ({ name, value, onChange, placeholder, onFocus, className, setSelectedItem }) => {

    const currentMonth = useMemo(() => getCurrentMonth(), []);
    return (<DatePicker
        selected={isString(value) ? null : value}
        onChange={(month) => {
            onChange(name, month);
            if (setSelectedItem) {
                setSelectedItem(null);
            }
        }}
        dateFormat="MMM.yy"
        showMonthYearPicker
        minDate={currentMonth}
        placeholderText={placeholder}
        id={name}
        onFocus={() => {
            if (onFocus) {
                onFocus(false);
            }
        }}
        className={className}
    />);
}

export default MonthPickerField;