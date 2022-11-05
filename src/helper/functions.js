import moment from 'moment';


export function getCurrentMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function getNameMonthFormat(data) {
    return moment(data).format('MMM.YY');
}

export function getNumberMonthFormat(data) {
    return moment(data).format('MM/YYYY');
}

export function isString(value) {
    if (typeof value === 'string') return true;
    return false;
}

export function isDate(value) {
    if (typeof value === 'object') return true;
    return false;
}

export function getSymbol(number) {
    if (number > 0) return '+';
    return '';
}

export function getNameOfSimpleInput(data) {
        const array = Object.keys(data);
        return array.slice(0, array.length - 1);
}

