import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';

import MonthPickerField from 'components/Form/DateForm/MonthPickerField';
import SummaryField from 'components/Form/DateForm/SummaryField';

import s from './DateForm.module.css';

const inputsName = ['RTB', 'NTP', 'COD'];

const DateForm = ({setResult}) => {
    const initialValues = { RTB: null, NTP: null, COD: null, TZP: null };
    const [isOpenSelect, setIsOpenSelect] = useState(false);


    const validate = values => {
        const errors = {};
        if (!values.RTB && !values.NTP && !values.COD && !values.TZP) {
            errors.emptyDate = 'Enter at least one date!';
        }
   return errors;
    };
    
    useEffect(() => {
        window.addEventListener("keydown", onEsc);

    return () => {
        window.removeEventListener("keydown", onEsc);
    }
    }, []);
    
    const onEsc = (e) => {
    if (e.code === "Escape") {
      setIsOpenSelect(false);
}
    }
    
    return (<Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            setResult(values);
            setIsOpenSelect(false);
            actions.resetForm();
            actions.setStatus('submitted');
        }}
        validate={validate}>
        {({
            values,
            errors,
            setFieldValue,
            handleSubmit
        }) => {
            if (errors?.emptyDate) {
               setIsOpenSelect(true); 
            }
            return (<Form onSubmit={handleSubmit} className={s.form}>
                {inputsName.map(name => <div key={name} className={s.inputBox}>
                    <label className='label' htmlFor={name}>{name}</label>
                    <MonthPickerField name={name} value={values[name]} onChange={setFieldValue} placeholder={name} onFocus={setIsOpenSelect} className={s.input}/>
                </div>)}
                <SummaryField name='TZP' isOpenSelect={isOpenSelect} setIsOpenSelect={setIsOpenSelect} />
                <button className={`${s.submitBtn} button`} type="submit">Send</button>
            </Form>);
        }}
    </Formik>);
}

export default DateForm;