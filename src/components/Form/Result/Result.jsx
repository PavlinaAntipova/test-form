import { getNumberMonthFormat, isDate } from "helper/functions";

import s from './Result.module.css';

const Result = ({resultData}) => {
    return <div className={s.result}>
        <h2 className={s.title}>Result</h2>
        <ul className={s.list}>
        {Object.keys(resultData).map(item => <li key={item} className={s.item}>
            <span className={s.name}>{item}</span>
            <span>{resultData[item] ? isDate(resultData[item]) ? getNumberMonthFormat(resultData[item]) : resultData[item]: 'no data'}</span>
        </li>)}
    </ul>
        </div>
}

export default Result;