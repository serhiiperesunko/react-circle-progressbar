import ProgressBar from "./components/progress-bar/ProgressBar";
import {useState} from "react";

function App() {
  const [value, setValue] = useState(0)
  return <>
    <ProgressBar value={value}/>
    <button onClick={() => setValue(value + 1)}>click</button>
  </>
}

export default App;