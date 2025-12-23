import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/about';
import HomePage from './Pages/homepg';
import Main from './Pages/main';


function App() {

  //We define the routing for the website.
  //This defined navigation is used by the nav.js file.

  return (
    <div>
      <Routes>

      <Route path='/about' element = {<HomePage/>} />

      <Route path='/contact' element = {<About/>} />

      <Route path='/' element = {<Main/>} />

      </Routes>

    </div>
  );
}

export default App;
