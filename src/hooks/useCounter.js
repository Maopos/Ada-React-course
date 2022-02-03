import { useState } from "react";

const useCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const aumentar = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(value);
  };

  return [counter, aumentar, reset];
};

export default useCounter;
