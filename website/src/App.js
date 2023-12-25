// src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const[data, setData] = useState([]);

  useEffect(() => {
    axios.get().then((response) => {
      setData(response.data);
    });
  }, [])


  return (
    <div className="App">
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
