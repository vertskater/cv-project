import { Component } from "react";

import update from "immutability-helper";

import ExpInput from "./ExpInput";
import Work from "../Experience";
import Experiences from "./Experiences";
import "../style/Education.scss";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: [],
      isEdit: false,
      isChange: false,
      editexp: {},
    };
  }
  editData() {
    this.setState((state) =>
      update(state, { $set: { isEdit: !state.isEdit, isChange: false } })
    );
  }
  addExperience = (e) => {
    e.preventDefault();
    const work = new Work(
      e.target.work.value,
      e.target["work-description"].value,
      e.target["date-start"].value,
      e.target["date-end"].value
    );
    this.setState((state) => ({
      experiences: [...state.experiences, work],
    }));
  };
  handleClick = (workName) => {
    this.setState((state) => ({
      experiences: state.experiences.filter((item) => {
        if (item.work !== workName) {
          return item;
        }
      }),
    }));
  };
  handleEdit = (work, description, start, end) => {
    this.handleClick(work);
    this.setState((state) =>
      update(state, {
        $set: {
          isEdit: !state.isEdit,
          isChange: true,
          editexp: { work, description, start, end },
        },
      })
    );
  };
  render() {
    return (
      <div className="education">
        <h2>Working Experiences:</h2>
        {this.state.isEdit && (
          <ExpInput
            addExperience={this.addExperience}
            dataChange={this.state.isChange}
            changeWork={this.state.editexp}
          />
        )}
        <button className="btn-edu" onClick={() => this.editData()}>
          {this.state.isEdit ? "Done" : "Add Work"}
        </button>
        {!this.state.isEdit && (
          <Experiences
            works={this.state.experiences}
            clickHandler={this.handleClick}
            editHandler={this.handleEdit}
          />
        )}
      </div>
    );
  }
}
