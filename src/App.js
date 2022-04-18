import { Component } from "react";
import Person from "./components/PersonData";
import Education from "./components/Education";
import "./style/App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
        <Education />
      </div>
    );
  }
}

export default App;
