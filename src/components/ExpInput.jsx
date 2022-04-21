import { Component } from "react";

import "../style/Education.scss";

export default class ExpInput extends Component {
  render() {
    const { addExperience, dataChange, changeWork } = this.props;
    const { work, description, start, end } = changeWork;
    return (
      <div>
        <form onSubmit={(e) => addExperience(e)}>
          <label htmlFor="work">Work:</label>
          <input
            type="text"
            id="work"
            name="work"
            required
            defaultValue={dataChange ? work : ""}
          />
          <label htmlFor="work-description">Work Description:</label>
          <textarea
            type="text"
            rows="4"
            id="work-description"
            name="work-description"
            required
            defaultValue={dataChange ? description : ""}
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
