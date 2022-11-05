import { useState, useEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import MonthPickerField from 'components/MonthPickerField';

import { getNameMonthFormat, getNameOfSimpleInput, getSymbol, isDate, isString } from "helper/functions";


import s from './SummarySelect.module.css';

const SummarySelect = ({ field, form, isOpenSelect, setIsOpenSelect }) => {
    const {name} = field;
    const {errors, values, setFieldValue, status, setStatus} = form;
    const [selectedItem, setSelectedItem] = useState(null);
    const [offset, setOffset] = useState(null);
    const options = getNameOfSimpleInput(form.values);

    useEffect(() => {
        if (errors?.emptyDate) {
            setIsOpenSelect(true);
        }
    }, []);


    useEffect(() => {
        if (offset === null) return;
        if(isDate(values[name])) {
            setOffset(0);
        }
        const symbol = getSymbol(offset); 
        setFieldValue(name, `${selectedItem} ${symbol} ${offset !== 0 ? `${offset} mo.` : ``}`);
    }, [offset]);


    const onClick = e => {
        const targetName = e.target.name;
        setStatus(null);
        setSelectedItem(targetName);
        setOffset(0);
        setFieldValue(name, targetName);
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
        setOffset(prev => {
            if (prev === null) {
                return 0 + 1;
            }
            return prev += 1;
        });
    }

    const decreaseBtn = () => {
        setOffset(prev => {
            if (prev === null) {
                return 0 - 1;
            }
            return prev -= 1;
        }); 
    }

    const toggleSelect = e => {
        setIsOpenSelect(prev => !prev);
    }

   
    return <div>
        <div className={s.select}>
            <label className='label' onClick={() => setIsOpenSelect(true)}>{name}</label>

            <button type='button' className={s.totalBtn} data-name='totalBtn' onClick={toggleSelect}>{form.values[field.name] ? isString(values[name]) ? values[name] : getNameMonthFormat(values[name]) : 'Date'}{isOpenSelect ? <BiUpArrow /> : <BiDownArrow />}</button>

        {isOpenSelect && <div className={s.menu} data-name='menu'>
            <div onClick={onClick}>
            <p>Linked to</p>
                {options.map(item => {
                const itemValue = values[item];
                const isSelected = item === selectedItem;

                return <button className={s.simpleOption} name={item} type='button' key={item} disabled={itemValue ? false : true}>{itemValue ? <>{`${item}: ${getNameMonthFormat(itemValue)}`}</> : `${item}: no data`}<AiOutlineCheck className={(isSelected && status !== "submitted") ? `${s.icon} ${s['icon--shown']}`: `${s.icon}`}/></button>
            })}
        </div>
        {(isString(values[name]) && status !== "submitted") && <div className={s.offset}>
                    <p>Month(s) offset</p>
                    <div className={s.offsetBox}>
                <div onClick={onCounterBtn} className={s.counter}>
                <button data-name='increase' type='button'>+</button>
                <button data-name='decrease' type='button'>-</button>
            </div>
            <input className={s.input} type="number" value={offset === null ? "" : offset == 0 ? "" : offset} onChange={onChange} />
                    </div>
                    
        </div>
        }
        <div>
            <p>Other date</p>
                    <MonthPickerField onChange={setFieldValue} setSelectedItem={setSelectedItem} name={name} value={values[name]} className={errors?.emptyDate ? `${s.input} ${s['input--error']}` : `${s.input}`} placeholder="Choose date"/>
                    <p className={s.errorText}>{errors?.emptyDate && errors?.emptyDate}</p>
                </div>
                <button className={s.closeBtn} type='button' onClick={() =>  setIsOpenSelect(false)}>Done</button>
        </div>}
        </div>
        </div>

}

export default SummarySelect;

