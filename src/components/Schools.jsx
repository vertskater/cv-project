import * as React from "react";
import uniqid from "uniqid";

export default function Schools({ schools, clickHandler, editHandler }) {
  return (
    <div className="school">
      <table>
        <tbody>
          {schools.map((school) => {
            return (
              <tr key={uniqid()}>
                <td>{school.school}</td>
                <td>{school.start}</td>
                <td>{school.end}</td>
                <td
                  onClick={() =>
                    editHandler(school.school, school.start, school.end)
                  }
                >
                  edit
                </td>
                <td
                  className="del-school"
                  onClick={() => clickHandler(school.school)}
                >
                  delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
