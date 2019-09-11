import React from 'react';

const Card = (props) => {
  const {name, email, role} = props.element;
  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{role}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  )
}

export default Card;