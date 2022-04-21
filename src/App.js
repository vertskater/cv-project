import { Component } from "react";
import Person from "./components/PersonData";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./style/App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
