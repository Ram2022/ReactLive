import React, { Component } from "react";

import { Modal, Button, Container, Form } from 'react-bootstrap';

export class AddEmployee extends Component {
    
    handleSubmit(event) {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json; charset=utf-8");

        const raw = JSON.stringify({
            "name": event.target.empname.value,
            "email": event.target.empemail.value,
            "phone": event.target.empphone.value,
            "city": event.target.empcity.value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const url = "http://localhost:93/api/v1/emp/AddEmp";
        fetch(url, requestOptions)
            .then(response => response.text())
            .then((result)=>{alert(result);
                document.getElementById("myform").reset();
            })
            .catch(error => console.log('error', error));


    }
    render() {

        return (
            <>
            
            <Modal animation={false}
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="bg-primary text-center">
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className="text-center text-light">Create new employee</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <h2 className="text-center">Input the fields to add an employee </h2>
                        <Container>
                            <Form onSubmit={this.handleSubmit} id="myform">
                                <Form.Group controlId="empname">
                                    <Form.Label>Employee Name</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter name" />
                                </Form.Group>

                                <Form.Group controlId="empemail">
                                    <Form.Label>Employee Email</Form.Label>
                                    <Form.Control type="email" required placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="empphone">
                                    <Form.Label>Employee Phone</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter phone" />

                                </Form.Group>

                                <Form.Group controlId="empcity">
                                    <Form.Label>Employee City</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter city" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick ={this.props.handler}>
                                    Submit
  </Button>
                            </Form>
                        </Container>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }

}