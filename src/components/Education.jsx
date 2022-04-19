import { Component } from "react";
import uniqid from "uniqid";
import update from "immutability-helper";

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
      isChange: false,
      editSchool: {},
    };
  }
  editData() {
    this.setState((state) =>
      update(state, { $set: { isEdit: !state.isEdit, isChange: false } })
    );
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
  handleEdit = (school, start, end) => {
    this.handleClick(school);
    this.setState((state) =>
      update(state, {
        $set: {
          isEdit: !state.isEdit,
          isChange: true,
          editSchool: { school, start, end },
        },
      })
    );
  };
  render() {
    return (
      <div className="education">
        <h2>Education:</h2>
        {this.state.isEdit && (
          <EduInput
            addSchool={this.addSchool}
            dataChange={this.state.isChange}
            changeSchool={this.state.editSchool}
          />
        )}
        <button className="btn-edu" onClick={() => this.editData()}>
          {this.state.isEdit ? "Done" : "Add School"}
        </button>
        {!this.state.isEdit && (
          <Schools
            schools={this.state.educations}
            clickHandler={this.handleClick}
            editHandler={this.handleEdit}
          />
        )}
      </div>
    );
  }
}
