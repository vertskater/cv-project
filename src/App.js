import { Component } from "react";
import Person from "./components/PersonData";
import "./style/App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    );
  }
}

export default App;
