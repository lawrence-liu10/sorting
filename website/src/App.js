// src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});

  const fetchDataFromBackend = () => {
    console.log('fetching');
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      console.log('Data', JSON.stringify(data));
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, [])


  return (
    <div className="App">
      <h1>aaa</h1>
      <p>Data from Flask Backend: {data.message}</p>

      <button onClick={fetchDataFromBackend}>Fetch Data</button>
    </div>
  );
}

export default App;
