import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/about';
import HomePage from './Pages/homepg';
import Projects from './Pages/projects';


function App() {
  return (
    <div>
      <Routes>

      <Route path='/' element = {<HomePage/>} />

      <Route path='/about' element = {<About/>} />

      <Route path='/proj' element = {<Projects/>} />

      </Routes>

    </div>
  );
}

export default App;
