import * as React from "react";

export default function Schools({ schools, id, clickHandler, editHandler }) {
  return (
    <div className="school">
      <table>
        <tbody>
          {schools.map((school) => {
            return (
              <tr key={id}>
                <td>{school.school}</td>
                <td>{school.start}</td>
                <td>{school.end}</td>
                <td onClick={() => editHandler()}>edit</td>
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
