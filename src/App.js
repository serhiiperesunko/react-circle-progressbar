import ProgressBar from "./components/progress-bar/ProgressBar";
import {useState} from "react";

function App() {
  const [value, setValue] = useState(0)
  return <>
    <ProgressBar value={value}/>
    <input type="text" onChange={(e) => setValue(e.target.value)}/>
    <button onClick={() => setValue(value + 1)}>+</button>
    <button onClick={() => setValue(value - 1)}>-</button>
  </>
}

export default App;