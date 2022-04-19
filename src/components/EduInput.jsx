import { Component } from "react";

import "../style/Education.scss";

export default class EduInput extends Component {
  render() {
    const { addSchool, dataChange, changeSchool } = this.props;
    const { school, start, end } = changeSchool;
    return (
      <div>
        <form onSubmit={(e) => addSchool(e)}>
          <label htmlFor="school">School:</label>
          <input
            type="text"
            id="school"
            name="school"
            required
            defaultValue={dataChange ? school : ""}
          />
          <label htmlFor="date-start">Startdate:</label>
          <input
            type="date"
            id="date-start"
            name="date-start"
            required
            defaultValue={dataChange ? start : ""}
          />
          <label htmlFor="date-end">Enddate:</label>
          <input
            type="date"
            id="date-end"
            name="date-end"
            required
            defaultValue={dataChange ? end : ""}
          />
          <input type="submit" value="save"></input>
        </form>
      </div>
    );
  }
}
