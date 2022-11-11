import { useState } from "react";

import DateForm from "components/Form/DateForm";
import Result from "components/Form/Result";

const DateFormPage = () => {
    const [result, setResult] = useState(null);

    return <>
        <DateForm setResult={setResult} />
        {result && <Result resultData={result} />}
    </>
}

export default DateFormPage;