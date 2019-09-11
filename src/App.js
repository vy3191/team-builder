import React, {useState, useEffect} from 'react';
import FormElement from './FormElement';
import './App.css';
import Card from './Card';
import Data from './data';
console.log(Data)

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
     const getData =async () => {
       const promiseValue = Promise.resolve(Data);
             promiseValue.then( response => {
                 console.log(response);
                 setData(response)
             })
             .catch(err =>{
                console.log(err);
             });      
     }
     getData();
  },[]);

  const addUserData = (inputData) => {
     console.log(inputData);
     setData([...data, inputData]);
  }
  return (
    <div className="App">
      <h1>Form Management-React</h1>
      <FormElement data={data} addUserData={addUserData} />
      {data.map( (element, index) => {
          return(
            <Card key={index} element={element} />
          )
      })}
    </div>
  );
}

export default App;
