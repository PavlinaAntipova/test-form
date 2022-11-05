import { Formik, Form } from 'formik';
import { useState } from 'react';

import MonthPickerField from 'components/MonthPickerField';
import SummaryField from 'components/SummaryField';


const inputsName = ['RTB', 'NTP', 'COD'];

const DateForm = ({setResult}) => {
    const initialValues = { RTB: null, NTP: null, COD: null, TZP: null };
    const [isOpenSelect, setIsOpenSelect] = useState(false);

    const validate = values => {
        const errors = {};
        if (!values.RTB && !values.NTP && !values.COD && !values.TZP) {
            errors.emptyDate = 'Enter Other Date!';
        }
   return errors;
 };

    return (<Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
            setResult(values);
            setIsOpenSelect(false);
            actions.resetForm();
        }}
        validate={validate}>
        {({
            values,
            errors,
            setFieldValue,
            handleSubmit,
            handleBlur
        }) => {

            return (<Form onSubmit={handleSubmit}>
            
                {inputsName.map(name => <div key={name}>
                    <label htmlFor={name}>{name}</label>
                    <MonthPickerField name={name} value={values[name]} onChange={setFieldValue} placeholder={true} onFocus={setIsOpenSelect} />
                </div>)}
                <SummaryField name='TZP' isOpenSelect={isOpenSelect} setIsOpenSelect={setIsOpenSelect} />
                <button type="submit">Send</button>
            </Form>);
        }}
    </Formik>);
}

export default DateForm;