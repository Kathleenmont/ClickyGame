import React, { Component } from "react";
import images from "./images.json";
import "./App.css";
import Jumbotron from "./components/jumbotron/index";
import ScoreHeader from "./components/scoreHeader/index";
import MemoryCard from "./components/memoryCard/index"

class App extends Component {
  state = {
    images,
    score: 0
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <ScoreHeader score={this.state.score} />
        {this.state.images.map(image => (
        <MemoryCard 
        key={image.id}
        name={image.name}
        image={image.image}
        />
        ))}
      </div>
    );
  }
}

export default App;
