import logo from './logo.svg';
import './App.css';
import Index from './components/index'
import React, { useState } from 'react';
import { Button,Card,Modal  } from 'react-bootstrap';


function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  return (
    <div >
        <Index/>
     </div>
    
  );
}

export default App;
