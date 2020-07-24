import React, {useState} from "react";

const BookOnline = () =>{
            
        function handleSubmit(event) {
            event.preventDefault();
            console.log(this.state);
        }

    return(
        <div className="container">
            <h4 className="center">Let's Start by Booking an Appointment</h4>
            <form id="contact-form" /*onSubmit={this.handleSubmit.bind(this)}*/ method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control"/*value={this.state.name} onChange={() => this.setName({name: this.state.name})} *//>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" /*value={this.state.email} onChange={this.onEmailChange.bind(this)}*/ />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" /*value={this.state.message} onChange={this.onMessageChange.bind(this)}*/ />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

    // function formStates() {
    //     const [name, setName ] = useState("");
    //     const [email, setEmail ] = useState("");
    //     const [message, setMessage ] = useState("");
    // }
    
        // name: '',
        // email: '',
        // message: ''
    
    // function onNameChange(event) {
    //     this.setState({name: event.target.value})
    //     }
        
        // function    onEmailChange(event) {
        // this.setState({email: event.target.value})
        // }
        
        // function    onMessageChange(event) {
        // this.setState({message: event.target.value})
        // }
    
    
    
}







export default BookOnline