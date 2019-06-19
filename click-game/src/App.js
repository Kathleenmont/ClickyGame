import React, { Component } from "react";
import images from "./images.json";
import "./App.css";
import Jumbotron from "./components/jumbotron/index";
import ScoreHeader from "./components/scoreHeader/index";
import MemoryCard from "./components/memoryCard/index";
import Container from "./components/cardContainer/index";
import shuffle from 'shuffle-array';
let keyList = [];

class App extends Component {
  constructor(props) {
    super(props)
    this.cardShuffle = this.cardShuffle.bind(this);
    this.cardClick = this.cardClick.bind(this);
  }
  
  state = {
    images,
    score: 0
  };

  cardShuffle = (state) => {
    shuffle(this.state.images);
    this.setState ({
      images
    })
  }

  

  cardClick = (id) => {
    let key = this.state.images[id].id;
    let score = this.state.score;
    let myKey = key;
    console.log(myKey)

    if (!keyList.includes(myKey)) {
      
      score++;
      this.setState({
        score: score
      });
      console.log("key " + key)
      keyList.push(myKey);
      console.log("keyList: " + keyList)
      // console.log("Object BEFORE" + JSON.stringify(this.state.images));
      this.cardShuffle(this.state);
      
      // console.log("Object " + JSON.stringify(this.state.images[id -1]));
      
    } else {
      score = 0
      keyList = [];
      this.setState ({
        score: score
      });
      alert("you lost")
    } 
  }

  render() {
    console.log("Object AFTER" + JSON.stringify(this.state.images));
    return (
      <Container>
        <Jumbotron />
        <ScoreHeader score={this.state.score} />
        {this.state.images.map(image => (
          <MemoryCard 
          cardClick={this.cardClick} 
          cardShuffle={this.cardShuffle}
          key={image.id} 
          id={image.id}
          name={image.name} 
          image={image.image} 
          />
        ))}
      </Container>
    );
  }
}

export default App;
