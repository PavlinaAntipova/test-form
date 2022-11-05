import { useState, useEffect } from 'react';
import MonthPickerField from 'components/MonthPickerField';

import { getNameMonthFormat, getNameOfSimpleInput, getSymbol, isDate, isString } from "helper/functions";


const SummarySelect = ({ field, form, isOpenSelect, setIsOpenSelect }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [offset, setOffset] = useState(0);
    const options = getNameOfSimpleInput(form.values);

    useEffect(() => {
        if (form.errors?.emptyDate) {
            setIsOpenSelect(true);
        }
        if(isDate(form.values[field.name])) {
            setOffset(0);
        }
        if (offset === 0) return;
        const symbol = getSymbol(offset); 
        form.setFieldValue(field.name, `${selectedItem} ${symbol} ${offset !== 0 ? `${ offset } mo.` : ''}`);
    }, [offset]);


    const onClick = e => {
        const name = e.target.name;
        setSelectedItem(name);
        setOffset(0);
        form.setFieldValue(field.name, name);
    }

    const onChange = e => {
        const value = e.target.value;
        setOffset(+value);
    }

    const onCounterBtn = e => {
        const name = e.target.dataset.name;
        if (name === 'increase') {
            increaseBtn();
            return;
        }
        decreaseBtn();
    }

    const increaseBtn = () => {
        setOffset(prev => prev += 1);
    }

    const decreaseBtn = () => {
       setOffset(prev => prev -= 1); 
    }

    const toggleSelect = e => {
        setIsOpenSelect(prev => !prev);
    }
   
    return <div>
    <div>
        <label onClick={toggleSelect}>{form.values[field.name] ? isString(form.values[field.name]) ? form.values[field.name] : getNameMonthFormat(form.values[field.name]) : 'Date'}</label>
        {isOpenSelect && <div>
            <div onClick={onClick}>
            <p>Linked to</p>
            {options.map(item => {
                const itemValue = form.values[item];

                return <button name={item} type='button' key={item} disabled={itemValue ? false : true}>{itemValue ? `${item}: ${getNameMonthFormat(itemValue)}` : `${item}: no data`}</button>
            })}
        </div>
        {isString(form.values[field.name]) && <div>
            <p>Month(s) offset</p>
            <div onClick={onCounterBtn}>
                <button data-name='increase' type='button'>+</button>
                <button data-name='decrease' type='button'>-</button>
            </div>
            <input type="number" value={offset === 0 ? "" : offset} onChange={onChange} />
        </div>
        }
        <div>
            <p>Other date</p>
                    <MonthPickerField onChange={form.setFieldValue} name={field.name} value={form.values[field.name]} />
                    <p>{form.errors?.emptyDate && form.errors?.emptyDate}</p>
        </div>
        </div>}
        
        </div>
        </div>

}

export default SummarySelect;

