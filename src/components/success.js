import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { TextField, List, ListItem } from "material-ui";
class Success extends Component {
  render() {
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an Email with further information</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
