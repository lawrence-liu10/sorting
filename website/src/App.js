import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [data, setData] = useState({});
    const [clicked, setClicked] = useState(false);
    const [dataArray, setDataArray] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleHelloClick = () => {
      setClicked(true);
      fetch('http://localhost:8000/api/hello')  // Update with your Flask API URL
            .then(response => response.json())
            .then(data => setData(data));
      console.log(data)
    };

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const selection_sort = async () => {
      const url = 'http://localhost:8000/api/submit'; // Specify the port in the URL

      setClicked(true);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: inputValue }),
        }).then(response => response.json());
  
        if (response.ok) {
          console.log('Data successfully sent to Flask.');
          // Perform any additional actions upon successful response
        } else {
          console.error('Failed to send data to Flask.');
        }
        console.log(response)
      } catch (error) {
        console.error('Error:', error);
      }
      
    };

    useEffect(() => {
        fetch('http://localhost:8000/api/data')  // Update with your Flask API URL
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />

            <h1>{data.message}</h1>
            <button onClick={handleHelloClick}>
              fetch data
            </button>

            {/*Selection sort button*/}
            <button onClick = {selection_sort}>
              selection sort
            </button>



        </div>
    );
};

export default App;
