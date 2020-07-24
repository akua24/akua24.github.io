import React, {Component} from 'react'
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar.js";
import {BrowserRouter, Route} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import { withTranslation } from 'react-i18next';
import { translate, Trans } from "react-i18next";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Home from './components/Home'
import BookOnline from './components/BookOnline'
import Contact from './components/Contact'
import Services from './components/Services.js'
import logo from './logo.jpg'
import './styles.css'
import { i18n } from "./i18n";
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component{

  state = {
    value: "en"
  };

  handleChange = event => {
    console.log("selected val is ", event.target.value);
    let newlang = event.target.value;
    this.setState(prevState => ({ value: newlang }));
    console.log("state value is", newlang);
    this.props.i18n.changeLanguage(newlang);
  };

  render() {

    const { t } = this.props;
    const { classes } = this.props;

    return(

      <BrowserRouter>

      <div className="App" class="container-md p-3 my-3 border bg-dark text-white text-center">
 
        {/* <div class="container-md p-3 my-3 bg-dark text-white text-center">  */}
          <h1>Welcome to Kulture Salon</h1>
          <p>We're here for all your hair needs!</p>
          <a href="./home" ><img src={logo} title="Home" style={{width: "900px", height:"400px"}} initial-scale="1"/></a>

          <NavBar/> 
          <Grid container spacing={24}>
            <Grid  item xs={12} className="container center">
              <div >
                  <form className="p-3 my-3 border bg-light text-dark bg-primary" component="fieldset">
                    <FormLabel className="container text-success p-3 my-3 " component="legend">Choose Preferred Language</FormLabel>
                    <RadioGroup className="container border bg-gray" style={{flexDirection: "row"}} aria-label="Gender" name="gender1" value={this.state.value} onChange={this.handleChange}>
                      <FormControlLabel
                        value="en"
                        control={<Radio />}
                        label="English"
                      />
                      <FormControlLabel value="fr" control={<Radio />} label="French"/>

                      <FormControlLabel
                        value="spa"
                        control={<Radio />}
                        label="Spanish"
                      />
                      
                    </RadioGroup>
                  </form>
                </div>
            </Grid>
          </Grid>
        
          <br/><br/>
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
