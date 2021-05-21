import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios';
export default class Login extends Component {

handleSubmit=e=>
{
    e.preventDefault();
    const data={
        email:this.email,password:this.password
    }
    axios.post("",data).
    then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err)
    });
    alert('')
}

    render() {

        return (
            <>
           
            <div className="text-left col-md-4 offset-4 text-light">
                <Form onSubmit={this.handleSubmit}>
                    <h3 className="text-center mt-4">Login here</h3>
  <Form.Group controlId="formBasicEmail" className="mt-4">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" className="form-control" placeholder="Enter email" 
    onChange={e=>this.email=e.target.value} />
 
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className="form-control"
    onChange={e=>this.email=e.target.value}/>
  </Form.Group>
  <Form.Group className="text-right">
  <Button variant="btn btn-outline-success" type="submit">
    Submit
  </Button>
  </Form.Group>
</Form>
                
            </div>
            </>
        )
    }
}


