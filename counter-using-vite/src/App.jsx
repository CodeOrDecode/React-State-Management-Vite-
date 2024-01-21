import Counter from "./components/Counter";
import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="maindiv">
      <Counter count={count} increment={increment} decrement={decrement}/>
    </div>
  );
}

export default App;
