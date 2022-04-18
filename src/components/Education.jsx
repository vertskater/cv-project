import { Component } from "react";
import uniqid from "uniqid";

import EduInput from "./EduInput";
import School from "../School";
import Schools from "./Schools";
import "../style/Education.scss";

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [],
      isEdit: false,
      id: uniqid(),
    };
  }
  editData() {
    this.setState({ isEdit: !this.state.isEdit });
  }
  addSchool = (e) => {
    e.preventDefault();
    const school = new School(
      e.target.school.value,
      e.target["date-start"].value,
      e.target["date-end"].value
    );
    this.setState((state) => ({
      educations: [...state.educations, school],
      id: uniqid(),
    }));
  };
  handleClick = (schoolName) => {
    this.setState((state) => ({
      educations: state.educations.filter((item) => {
        if (item.school !== schoolName) {
          return item;
        }
      }),
    }));
  };
  handleEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };
  render() {
    return (
      <div className="education">
        <h2>Education:</h2>
        {this.state.isEdit && <EduInput addSchool={this.addSchool} />}
        <button className="btn-edu" onClick={() => this.editData()}>
          {this.state.isEdit ? "Done" : "Add School"}
        </button>
        {!this.state.isEdit && (
          <Schools
            schools={this.state.educations}
            id={this.state.id}
            clickHandler={this.handleClick}
            editHandler={this.handleEdit}
          />
        )}
      </div>
    );
  }
}
