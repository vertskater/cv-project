import * as React from "react";
import uniqid from "uniqid";

export default function Experiences({ works, clickHandler, editHandler }) {
  return (
    <div className="school">
      <table>
        <thead>
          <tr>
            <td>Work</td>
            <td>Description</td>
            <td>Start Date</td>
            <td>End Date</td>
          </tr>
        </thead>
        <tbody>
          {works.map((work) => {
            return (
              <tr key={uniqid()}>
                <td>{work.work}</td>
                <td>{work.description}</td>
                <td>{work.start}</td>
                <td>{work.end}</td>
                <td
                  className="edit-work"
                  onClick={() =>
                    editHandler(
                      work.work,
                      work.description,
                      work.start,
                      work.end
                    )
                  }
                >
                  edit
                </td>
                <td
                  className="del-work"
                  onClick={() => clickHandler(work.work)}
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
