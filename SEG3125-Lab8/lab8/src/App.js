import React, {Component} from 'react'
import NavBar from "./components/NavBar.js";
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import BookOnline from './components/BookOnline'
import Contact from './components/Contact'
import Services from './components/Services.js'
import logo from './logo.jpg'
import './styles.css'
import i18n from './i18n.js'
import 'bootstrap/dist/css/bootstrap.min.css'


import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { translate, withTranslation, Trans } from "react-i18next";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";


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

    const { t, i18n } = this.props;

    return(

      <BrowserRouter>

      <div className="App" class="container-md p-3 my-3 border bg-dark text-white text-center">
 
      <h1><Trans>{t("Welcome")}</Trans></h1>
          <p><Trans>{t("We're here for all your hair needs!")}</Trans></p>
          <a href="./home" ><img src={logo} title="Home" style={{width: "900px", height:"400px"}} initial-scale="1"/></a>

        <br/>
        <br/>
        <Grid class="container-md p-3 my-3 border bg-light text-dark text-center" container spacing={24}>
          <FormControl component="fieldset" >
                    <FormLabel component="legend"><Trans>{t("Language")}</Trans></FormLabel>
                    <RadioGroup className="container" style={{flexDirection:"row"}}
                      aria-label="Gender"
                      name="gender1"
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel 
                        value="en"
                        control={<Radio />}
                        label="English"
                      />
                      <FormControlLabel
                        value="fre"
                        control={<Radio />}
                        label="Francaise"
                      />

                      <FormControlLabel
                        value="spa"
                        control={<Radio />}
                        label="Espanol"
                      />
                    </RadioGroup>
                  </FormControl>
                  </Grid>
          <NavBar/>
                 
          <br/><br/>
          <Route path="/Home" component={Home}/>
          <Route path="/bookonline" component={BookOnline}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/services" component={Services}/>
              



        
      </div>
    </BrowserRouter>
  );
  }

    
  }
 
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (withTranslation("translations")(App));
