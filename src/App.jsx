import Real_time from "./real-time";
import India_comp from "./india-comp";
import India_comp2 from "./India-comp2";
import "./index.css";
function App(){
  return <div>
    <center>
      <India_comp className = "pad" id = "head"></India_comp>
      <India_comp2 className = "pad" id = "mid"></India_comp2>
      <Real_time className = "pad" id = "bottom"></Real_time>

    </center>
    </div>
}

export default App;