import { Component } from "react";

import "../style/Education.scss";

export default class EduInput extends Component {
  render() {
    const { addSchool } = this.props;
    return (
      <div>
        <form onSubmit={(e) => addSchool(e)}>
          <label htmlFor="school">School:</label>
          <input type="text" id="school" name="school" required />
          <label htmlFor="date-start">Startdate:</label>
          <input type="date" id="date-start" name="date-start" required />
          <label htmlFor="date-end">Enddate:</label>
          <input type="date" id="date-end" name="date-end" required />
          <input type="submit" value="save"></input>
        </form>
      </div>
    );
  }
}
