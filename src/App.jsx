import React, { useEffect, useRef } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const a = useRef(0); // Initialize useRef with 0

  useEffect(() => {
    a.current = a.current + 1; // Increment a.current
    console.log(`The value of a is ${a.current}`);
  }, []);

  return (
    <div className="bg-cyan-500 w-full h-screen flex items-center justify-center">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-red-700 px-5 py-3 rounded-lg font-bold text-xl">
        The count is {count}.
      </button>
      <p>we are the national </p>
    </div>
  );
};

export default App;
