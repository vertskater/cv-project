import { Component } from "react";
import * as React from "react";
import "../style/Datashow.scss";

export default function DataShow({ data }) {
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
