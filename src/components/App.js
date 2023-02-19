import { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  const [data, setData] = useState([
    "apples", "bnana"
  ]);
  return (
    <div className="App">
      <Dropdown data={data}/>
    </div>
  );
}

export default App;
