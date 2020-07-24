import React, {Component} from 'react'
import NavBar from "./components/NavBar.js";
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import BookOnline from './components/BookOnline'
import Contact from './components/Contact'
import Services from './components/Services.js'
import logo from './logo.jpg'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{

  render() {
    return(

      <BrowserRouter>

      <div className="App" class="container-md p-3 my-3 border bg-dark text-white text-center">
 
        {/* <div class="container-md p-3 my-3 bg-dark text-white text-center">  */}
          <h1>Welcome to Kulture Salon</h1>
          <p>We're here for all your hair needs!</p>
          <a href="./home" ><img src={logo} title="Home" style={{width: "900px", height:"400px"}} initial-scale="1"/></a>

          <NavBar/> 
          <Route path="/Home" component={Home}/>
          <Route path="/bookonline" component={BookOnline}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/services" component={Services}/>
       
        {/* </div> */}
        

        


        



        
      </div>
    </BrowserRouter>
  );
  }

    
  }

export default App;
