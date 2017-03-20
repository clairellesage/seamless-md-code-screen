"use strict";

import React, { Component } from 'react';
import patientData from './patient7.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {patientName: "", organizationName: "", patientGender: "", numberOfConditions: 0, listAllConditions: []};
  }

  patientName(data) {
    for (i in patientData.name) {
      let firstName = patientData.name[i].given[0];
      let lastName = patientData.name[i].family[0];
      return this.setState({patientName: `${firstName} ${lastName}`)
    }
  }

  render() {
    console.log("Rendering <App/>")
    return (
      <div className="wrapper">
        <p>Name of patient: {this.state.patientName}</p>
        <p>Organization name: {this.state.organizationName}</p>
        <p>Patient gender: {this.state.patientGender}</p>
        <p>Number of conditions: {this.state.numberOfConditions}</p>
        <p>
          <ul>List all conditions:
            <li></li>
          </ul></p>
      </div>
      );
  }
}

export default App;