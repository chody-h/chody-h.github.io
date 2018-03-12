import React, { Component } from "react";
import { Introduction, Tagline, SocialButtons } from "./components";

const introduction = "Hi, my name is Cody!";
const tags = [
  "Developer",
  "Father",
  "Novice Woodcrafter",
  "Technology Enthusiast"
];
const links = [
  {
    name: "github",
    faIcon: "github",
    url: "https://www.github.com/chody-h"
  },
  {
    name: "linkedin",
    faIcon: "linkedin-square",
    url: "https://www.linkedin.com/in/cody-heffner/"
  },
  {
    name: "resume",
    faIcon: "file-text",
    url: "https://www.visualcv.com/cody-heffner"
  }
];

const delayStart = 0.5;
const delayInterval = localStorage.getItem("visited") ? 0.1 : 0.5;
localStorage.setItem("visited", true);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Introduction phrase={introduction} delay={delayStart} />

        <Tagline
          attributes={tags}
          delay={delayStart + delayInterval * 1}
          delayInterval={delayInterval}
        />

        <SocialButtons
          links={links}
          delay={delayStart + delayInterval * (tags.length + 2)}
        />
      </div>
    );
  }
}

export default App;
