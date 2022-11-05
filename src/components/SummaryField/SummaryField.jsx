import { Field, useFormikContext } from "formik";

import SummarySelect from "components/SummarySelect";


const SummaryField = ({name, isOpenSelect, setIsOpenSelect}) => {
       const { values } = useFormikContext();
    
    return (<Field component={SummarySelect} name={name} value={values[name]} isOpenSelect={isOpenSelect} setIsOpenSelect={setIsOpenSelect}/>);
}

export default SummaryField;