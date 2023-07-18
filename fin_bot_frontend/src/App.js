import { useEffect } from "react";
import axios from 'axios';
import MainFrame from './components/MainFrame';

function App() {

  useEffect(()=> {

    axios.post("/reset", {}).then(
      data => {}
    )
    
    } ,[])

  return (
    <div className="App">
      <MainFrame />
    </div>
  );
}

export default App;
