import { Component } from "react";
import "../style/Input.scss";

export default class DataInput extends Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.props.changeValues(
      e.target.name.value,
      e.target.lastname.value,
      e.target.birthdate.value,
      e.target.street.value,
      e.target.zip.value,
      e.target.country.value
    );
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <form onSubmit={(e) => this.handleChange(e)}>
          <div className="column2">
            <label htmlFor="firstname">Name:</label>
            <input
              type="text"
              id="firstname"
              name="name"
              required
              defaultValue={data.name}
            />
            <label htmlFor="lastname">Lastname:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              defaultValue={data.lastname}
            />
            <label htmlFor="birthdate">Date of birth</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              required
              defaultValue={data.dateOfBirth}
            />
          </div>
          <div className="column2">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              required
              defaultValue={data.adress}
            />
            <label htmlFor="zip">ZIP-Code</label>
            <input
              type="number"
              id="zip"
              name="zip"
              required
              defaultValue={data.zip}
            />
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              required
              defaultValue={data.country}
            />
          </div>
          <input type="submit" value="save"></input>
        </form>
      </div>
    );
  }
}
