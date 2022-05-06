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
        dateOfBirth: new Date().toLocaleDateString(),
        adress: "Musterweg 1",
        zip: 8010,
        country: "Austria",
        imgsrc: "placeholder.png",
      },
      isEdit: false,
    };
    this.changeValues = this.changeValues.bind(this);
  }
  handleChange = (e) => {
    e.preventDefault();
    this.changeValues(
      e.target.name.value,
      e.target.lastname.value,
      e.target.birthdate.value,
      e.target.street.value,
      e.target.zip.value,
      e.target.country.value
    );
  };

  editData() {
    this.setState({ isEdit: !this.state.isEdit });
  }
  changeValues(name, lastname, dateOfBirth, adress, zip, country) {
    this.setState({
      personalData: {
        name: name,
        lastname: lastname,
        dateOfBirth: dateOfBirth,
        adress: adress,
        zip: zip,
        country: country,
      },
    });
  }
  render() {
    return (
      <div className="personal-data-input">
        {this.state.isEdit ? (
          <DataInput
            data={this.state.personalData}
            handleChange={this.handleChange}
          />
        ) : (
          <DataShow data={this.state.personalData} />
        )}
        <button onClick={() => this.editData()}>
          {this.state.isEdit ? "Done" : "Edit"}
        </button>
      </div>
    );
  }
}
