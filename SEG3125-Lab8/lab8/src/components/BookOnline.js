import React from "react"; 
import ReactDOM from 'react-dom'

function validate(name, email) {
    
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain a @");
  }
  if (email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }

  return errors;
}

const BookOnline = () =>{

    const handleSubmit = event => {
        event.preventDefault();

        const name = ReactDOM.findDOMNode(this._nameInput).value;
        const email = ReactDOM.findDOMNode(this._emailInput).value;

        const errors = validate(name, email);

        if (errors.length > 0) {
        this.setState({ errors });
        return;
        }
        console.log("Appointment set!");
    }
                  
    
     
    return(
        <div className="container">
            <h4 className="center text-success">Let's Start by Booking an Appointment</h4>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="nameInput" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
    
    
}







export default BookOnline