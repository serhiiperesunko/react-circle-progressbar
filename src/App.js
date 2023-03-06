import ProgressBar from "./components/progress-bar/ProgressBar";
import {useState} from "react";

function App() {
  const [value, setValue] = useState(0)
  return <>
    <ProgressBar value={value}/>
    <input type="number"
           min={0}
           max={100}
           placeholder="number"
           style={{
      position: "relative",
      top:100,
      zIndex: 99
    }} onChange={(e) => setValue(e.target.value)} onClick={(e) => {
      if(e.target.value !== ""){
        setValue(e.target.value)
      } else {
        setValue(0)
      }

    }}/>
  </>
}

export default App;