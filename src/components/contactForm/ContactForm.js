import emailjs from "emailjs-com";
import React from "react";

function Contact() {
    
    function sendEmail(e) {

    };

    return (
      <form class="block form-horizontal" id="contact-form">
        <h1 class="block-header">Contact</h1>
        <hr />
        <div class="mb-3">
          <label for="exampleInputName1" class="col-sm-2 form-label">Name</label>
          <div class="col-sm-5">
            <input class="form-control" id="nameInput" placeholder="Name"/>
          </div>
        </div>
        <div class="mb-3">
          <label id="exampleInputEmail" class="col-sm-2 form-label">E-mail</label>
          <div class="col-sm-5">
            <input type="email" class="form-control" id="emailInput"  placeholder="E-mail"/>
          </div>
        </div>
        <div class="mb-3">
          <label id="exampleInputMessage1" class="col-sm-2 form-label">Message</label>
          <div class="col-sm-5">
            <textarea class="form-control" rows="3" id="messageInput" placeholder="Message"></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-dark">Submit</button>
      </form>
    );
};