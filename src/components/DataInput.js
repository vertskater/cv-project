import { Component } from "react";

export default class DataInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <form>
          <div className="column2">
            <label htmlFor="firstname">Name:</label>
            <input type="text" id="firstname" />
            <label htmlFor="lastname">Lastname:</label>
            <input type="text" id="lastname" />
            <label htmlFor="birthdate">Date of birth</label>
            <input type="date" id="birthdate" />
          </div>
          <div className="column2">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" />
            <label htmlFor="zip">ZIP-Code</label>
            <input type="number" id="zip" />
            <label htmlFor="country">Country</label>
            <input type="text" id="country" />
          </div>
        </form>
      </div>
    );
  }
}
