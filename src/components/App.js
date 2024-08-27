
import React, { useEffect, useState } from "react";
import '@babel/polyfill';
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error(`An error occurred: ${error}`);
        setError(error);
        setLoading(false);
      }
    };
 
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data Fetched from API</h1>
      {error && (<p>{`An error occurred: ${error}`}</p>)}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default App
