import React, {useState, useEffect} from 'react';
import './App.css';
import Data from './data';
console.log(Data)

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
     const getData =async () => {
       const promiseValue = Promise.resolve(Data);
             promiseValue.then( response => {
                 console.log(response)
             })
                        
     }
     getData();
  },[]);
  return (
    <div className="App">
      <h1>Form Management-React</h1>
    </div>
  );
}

export default App;
