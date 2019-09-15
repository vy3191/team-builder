import React,{useState,useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const FormElement = (props)=> {   
    const user = {name:'', email:'', role:''}   
    const [inputData, setInputData] = useState(user);
    const [member, setEditMember] = useState(user);
    const {handleClose,handleShow,show} = props;
    
    
    useEffect(() => {

        setEditMember(props.memberToEdit);

    },[props.memberToEdit]);
    
   

    const handleChange = (event) => {
        setInputData({...inputData, [event.target.name]:[event.target.value]});
    }       
  
    const handleSubmit = (event) => {        
        event.preventDefault();
        props.addUserData(inputData);
        setInputData({name:'', email:'', role:''});
    }
   
  const edit = () => {
     console.log(inputData);
     props.setMemberToEdit(inputData);
  }
 
  console.log(props.modalOff)
    return (
      <>
      <Form  onSubmit={handleSubmit}>
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
      <div>         
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      { !(member.name && member.email && member.role) } ?
            <p>Loading...</p> :
            <Form  className="modal-form" onSubmit={handleSubmit}>
                <FormGroup>              
                  <Input type="text" 
                        name="name" 
                        id="exampleEmail" 
                        placeholder="Your Name"
                        onChange={handleChange} 
                        value={member.name}
                        />
                </FormGroup>
                <FormGroup>              
                  <Input type="email"
                        name="email" 
                        id="exampleEmail" 
                        placeholder="Your Email"               
                        onChange={handleChange} 
                        value={member.email} />
                </FormGroup>
                <FormGroup>
                  
                  <Input type="text" 
                        name="role" 
                        id="examplePassword"
                        placeholder="Your Role"              
                        onChange={handleChange} 
                        value={member.role} />
                </FormGroup>        
              </Form>   
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>  
    </>
    );
  }

  export default FormElement;