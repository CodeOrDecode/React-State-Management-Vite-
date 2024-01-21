import "../App.css";

function Counter({ count, increment, decrement }) {
  return (
    <div className="counter">
      <h2>{count}</h2>
      <button className="counter2" onClick={increment}>
        Increment
      </button>
      <button className="counter2" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
