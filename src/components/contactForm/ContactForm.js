import emailjs from "emailjs-com";
import React from "react";
import {Form, Button} from "react-bootstrap"

function ContactForm() {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_xyz2ifp', e.target, 'user_SRRmmWyKKFX7KcIeNiaLa')
            .then((result) => {
            console.log(result.text);
            }, (error) => {
            console.log(error.text);
            });
        e.target.reset();
    };

    return (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="dark" type="submit" className="btn-lg" id="submit">
          Submit
        </Button>
      </Form>
    );
};

export default ContactForm;