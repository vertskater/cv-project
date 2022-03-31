import { Component } from "react";
import Person from "./components/PersonData";
import InputEdu from "./components/InputEdu";
import "./style/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
      showForm: false,
    };
  }
  showForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  render() {
    return (
      <div className="App">
        <Person />
        <button className="btn-add" onClick={() => this.showForm()}>
          Add Education
        </button>
        {this.state.showForm ? <InputEdu /> : null}
      </div>
    );
  }
}

export default App;
