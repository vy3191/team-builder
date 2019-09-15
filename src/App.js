import React, {useState, useEffect} from 'react';
import FormElement from './FormElement';
import './App.css';
import Card from './Card';
import Data from './data';
console.log(Data)

function App() {
  const [data, setData] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState();
  const [show, setShow] = useState(false);
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

  const editUser = (inputData) => {
     setMemberToEdit(inputData);
    //  console.log(inputData);
     setShow(true);
  }

  const addUserData = (inputData) => {
     console.log(inputData);
     setData([...data, inputData]);
  }

  const deleteUser = (inputData) => {
      const newData = data.filter( element => element.name !== inputData.name)
      setData(newData)
  }

  const handleClose = () => {
    setShow(false)
  };

  const handleShow = () => {
    setShow(true)
   };

  return (
    <div className="App">
      <h1>Form Management-React</h1>
      <FormElement data={data} 
                   addUserData={addUserData}
                   deleteUser={deleteUser}
                   setMemberToEdit={setMemberToEdit}
                   memberToEdit={memberToEdit}
                   show={show}
                   handleClose={handleClose}
                   handleShow={handleShow}
                   />
      <Card data={data}            
            deleteUser={deleteUser}
            editUser={editUser}
            />      
    </div>
  );
}

export default App;
