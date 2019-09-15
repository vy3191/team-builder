import React from 'react';

const Card = (props) => {

  const manageEdit = (userData) => {
        props.editUser(userData);       
  }
  
  return(
    <div>
    {
      props.data.map( userData => 
         (<div key={userData.name}>
           <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.role}</p>
          <div>
            <button onClick={() => {manageEdit(userData)}}>Edit</button>
            <button onClick={() =>props.deleteUser(userData)}>Delete</button>
          </div> 
         </div>)
      )
    }
    </div>
  )
}

export default Card;