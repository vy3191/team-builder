import React from 'react';

const Card = (props) => {
  return(
    <div>
      {
      props.data.map( userData => 
         (<div key={userData.name}>
           <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.role}</p>
          <div>
            <button>Edit</button>
            <button onClick={() =>props.deleteUser(userData)}>Delete</button>
          </div> 
         </div>)
      )
    }
    </div>
  )
}

export default Card;