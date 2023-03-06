import ProgressBar from "./components/progress-bar/ProgressBar";
import {useState} from "react";

function App() {
  const [value, setValue] = useState(0)
  console.log(value)
  return <>
    <ProgressBar value={value}/>
    <input type="text" onChange={(e) => setValue(e.target.value)} onClick={(e) => setValue(e.target.value)}/>
  </>
}

export default App;