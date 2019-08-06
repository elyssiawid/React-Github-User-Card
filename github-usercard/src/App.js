import React from "react";
import "./App.css";
import Cards from "./components/Cards";
import axios from "axios";
import Followers from "./components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Cards: "",
      key: ["Cheese"]
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/elyssiawid")
      .then(response => this.setState({ Cards: response.data }))
      .catch(err => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/elyssiawid/followers")
      .then(response => this.setState({ key: response.data }))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("kiwi", this.state.key);
    return (
      <div className="App">
        <Cards user={this.state.Cards} />
        {this.state.key.map(follower => (
          <Followers follower={follower} />
        ))}
      </div>
    );
  }
}

export default App;
