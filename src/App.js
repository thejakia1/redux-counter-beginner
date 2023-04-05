import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Store/action";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center mt-20 text-4xl">
      <button
        className="bg-blue-600 px-5 rounded-full text-white"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <h1 className="mx-3">Counter: {counter}</h1>
      <button
        className="bg-blue-600 px-5 rounded-full text-white"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}

export default App;
