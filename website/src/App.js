import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [data, setData] = useState({});
    const [clicked, setClicked] = useState(false);
    const [dataArray, setDataArray] = useState([]);

    const handleClick = () => {
      setClicked(true);
      fetch('http://localhost:8000/api/data')  // Update with your Flask API URL
            .then(response => response.json())
            .then(data => setData(data));
      console.log(data)
    };

    const selection_sort = () => {
      setClicked(true);
      fetch('http://localhost:8000/api/data') 
            .then(response => response.json())
            .then(dataArray => setDataArray(data.data));
      console.log(dataArray)
    };

    useEffect(() => {
        fetch('http://localhost:8000/api/data')  // Update with your Flask API URL
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>{data.message}</h1>
            <button onClick={handleClick}>
              fetch data
            </button>

            <button onClick = {selection_sort}>
              selection sort
            </button>

            <p>{dataArray.join(', ')}</p>



        </div>
    );
};

export default App;
