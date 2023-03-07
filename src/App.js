import ProgressBar from "./components/progress-bar/ProgressBar";
import {useState} from "react";

function App() {
  const [value ,setValue] = useState(0)
  const [speed ,setSpeed] = useState(2.75)
  return <>
    <ProgressBar value={value} counterSpeed={speed}/>
    <div style={{
      marginTop: 20
    }}>
    <input type="text" placeholder="numbers" value={value} onChange={(e) => setValue(e.target.value)}/>
    <input type="text" placeholder="counter speed" value={speed} onChange={(e) => setSpeed(e.target.value)}/>
    </div>
  </>
}

export default App;