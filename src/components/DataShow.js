import { Component } from "react";

export default class DataShow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props.data;
    return <div>this is Showdata</div>;
  }
}
