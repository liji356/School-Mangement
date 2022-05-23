import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AddStud from './component/AddStud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" exact element={<AddStud/>}/>
  </Routes>
  
  </BrowserRouter>
    
    
    </>

    
  );
}

export default App;
