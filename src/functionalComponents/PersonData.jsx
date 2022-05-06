import { useState, useEffect } from "react";
import DataInput from "./DataInput";
import DataShow from "./DataShow";

export default function PersonData() {
  const [personalData, setPersonalData] = useState({
    name: "Max",
    lastname: "Mustermann",
    dateOfBirth: new Date().toLocaleDateString(),
    adress: "Musterweg 1",
    zip: 8010,
    country: "Austria",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setPersonalData((prevState) => ({
      ...prevState,
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      dateOfBirth: e.target.birthdate.value,
      adress: e.target.street.value,
      zip: e.target.zip.value,
      country: e.target.country.value,
    }));
  };
  const editData = () => {
    setIsEdit(() => (isEdit ? false : true));
  };

  /* const changeValues = (name, lastname, dateOfBirth, adress, zip, country) => {

  }; */

  return (
    <div className="personal-data-input">
      {isEdit ? (
        <DataInput data={personalData} handleChange={handleChange} />
      ) : (
        <DataShow data={personalData} />
      )}

      <button onClick={() => editData()}>{isEdit ? "Done" : "Edit"}</button>
    </div>
  );
}
