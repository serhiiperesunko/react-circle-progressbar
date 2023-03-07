import ProgressBar from "./components/progress-bar/ProgressBar";
import {useState} from "react";

function App() {
  const [value ,setValue] = useState(0)
  return <>
    <ProgressBar value={value}/>
    <div style={{
      marginTop: 20
    }}>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  </>
}

export default App;