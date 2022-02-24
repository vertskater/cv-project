import { Component } from "react";
import DataInput from "./DataInput";
import DataShow from "./DataShow";

export default class PersonData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalData: {
        name: "Max",
        lastname: "Mustermann",
        dateOfBirth: new Date(),
        adress: "Musterweg 1",
        zip: 8010,
        country: "Austria",
        imgsrc: "testurl",
      },
      isEdit: true,
      dataPerson: [],
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  editData() {
    this.setState({ isEdit: !this.state.isEdit });
  }
  render() {
    return (
      <div className="personal-data-input">
        {this.state.isEdit ? (
          <DataInput data={this.state.personalData} />
        ) : (
          <DataShow data={this.state.personalData} />
        )}
        <button onClick={() => this.editData()}>
          {this.state.isEdit ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
}
