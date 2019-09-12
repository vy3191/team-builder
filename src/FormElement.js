import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const FormElement = (props)=> {      
    const [inputData, setInputData] = useState({name:'', email:'', role:''});
 
    const handleChange = (event) => {
        setInputData({...inputData, [event.target.name]:[event.target.value]});
    }       
  
    const handleSubmit = (event) => {        
        event.preventDefault();
        props.addUserData(inputData);
        setInputData({name:'', email:'', role:''});
    }
   
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" 
                 name="name" 
                 id="exampleEmail" 
                 placeholder="Your Name"
                 onChange={handleChange} 
                 value={inputData.name}
                 />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email"
                 name="email" 
                 id="exampleEmail" 
                 placeholder="Your Email"               
                 onChange={handleChange} 
                 value={inputData.email} />
        </FormGroup>
        <FormGroup>
          <Label for="role">Role</Label>
          <Input type="text" 
                 name="role" 
                 id="examplePassword"
                 placeholder="Your Role"              
                 onChange={handleChange} 
                 value={inputData.role} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }

  export default FormElement;