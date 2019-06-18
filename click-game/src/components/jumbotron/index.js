import React, { Component } from 'react';
import "./style.css";

class Jumbotron extends Component {
    render() {
    return (
        <div className="jumbotron jumbotron-fluid bg-dark">
          <h1>Memory Game</h1>
          <h3>Click as many images as you can without clicking the same image twice. </h3>
        </div>
    )
    }
}

export default Jumbotron;