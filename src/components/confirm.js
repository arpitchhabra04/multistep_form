import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { TextField, List, ListItem } from "material-ui";
class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    console.log(this.props);
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Data" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={values.firstName}
            />
            <ListItem primaryText="Last Name" secondaryText={values.lastName} />
            <ListItem primaryText="Email" secondaryText={values.email} />
            <ListItem
              primaryText="Occupation"
              secondaryText={values.occupation}
            />
            <ListItem primaryText="City" secondaryText={values.city} />
            <ListItem primaryText="Bio" secondaryText={values.bio} />
          </List>
          <br />
          <RaisedButton
            label="Confirm"
            primary="true"
            onClick={this.continue}
            style={styles.button}
          />
          <RaisedButton
            label="Back"
            secondary="true"
            onClick={this.back}
            style={styles.button}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 20
  }
};
export default Confirm;
