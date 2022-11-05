import { useState } from "react";

import DateForm from "components/DateForm";
import Result from "components/Result";

import s from './App.module.css';

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className={s.container}>
      <DateForm setResult={setResult} />
      {result && <Result resultData={result} />}
    </div>
  );
}

export default App;
