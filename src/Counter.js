import useCounter from "./hooks/useCounter";

const Counter = () => {
  const [counter, aumentar, reset] = useCounter(0);

  return (
    <div>
      <center>
        <h1>Counter App</h1>
        <h3>Clicks: {counter}</h3>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={reset}>Reset</button>
      </center>
    </div>
  );
};

export default Counter;
