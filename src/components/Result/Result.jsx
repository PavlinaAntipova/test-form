import { getNumberMonthFormat, isDate } from "helper/functions";

const Result = ({resultData}) => {
    return <ul>
        {Object.keys(resultData).map(item => <li key={item}>
            <span>{item}</span>
            <span>{resultData[item] ? isDate(resultData[item]) ? getNumberMonthFormat(resultData[item]) : resultData[item]: 'no data'}</span>
        </li>)}
    </ul>
}

export default Result;