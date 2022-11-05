import { useState } from "react";

import DateForm from "components/DateForm";
import Result from "components/Result";

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div>
      <DateForm setResult={setResult} />
      {result && <Result resultData={result} />}
    </div>
  );
}

export default App;
