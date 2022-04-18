import { Component } from "react";
import "../style/Datashow.scss";

export default class DataShow extends Component {
  render() {
    const { data } = this.props;
    const personData = Object.values(data);

    return (
      <div className="data">
        <ul className="person-data">
          {personData.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
