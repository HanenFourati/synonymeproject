import React from 'react';
import SynonymeProjectRouteur from './Components/SynonymeProjectRouteur.js';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
     <SynonymeProjectRouteur/>
     </BrowserRouter>    
    </div>
  );
}

export default App;
