import { useState, useRef } from "react";
import { Link } from "react-router-dom";
function Stopwatch() {
  const [time, setTime] = useState(0); // Ui state (updates the screen)
  const timerRef = useRef(null); // Mutable ref (stores interval ID)
  const [count, setcount] = useState(0);
  const update = useRef(null);
  const add = () => {
    update.current++;
  };
  const clear = () => {
    update.current = 0;
  };
  const start = () => {
    if (timerRef.current !== null) return; 
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1); // Ui update
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <>
    <Link className="btn btn-secondary m-3" to={'/'} style={{marginLeft:"10px"}}>Home</Link>
    <div className="container text-center mt-5">
      
      <h1 className="mb-4">{time} seconds</h1>

      <div className="mb-3">
        <button className="btn btn-success me-2" onClick={start}>
          Start
        </button>
        <button className="btn btn-danger me-2" onClick={stop}>
          Stop
        </button>
        <button className="btn btn-secondary" onClick={reset}>
          Reset
        </button>
      </div>

      <h1 className="mb-4">{count}</h1>

      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={add}>
          Add
        </button>
        <button
          className="btn btn-warning me-2"
          onClick={() => setcount(update.current)}
        >
          Update
        </button>
        <button className="btn btn-dark" onClick={clear}>
          Reset Value
        </button>
      </div>
    </div>
    </>
  );
}
export default Stopwatch;
