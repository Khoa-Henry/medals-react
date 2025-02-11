import { useState } from "react";

const NewCountry = (props) => {
  const { dialogRef, submitNewCountry } = props;

  const [countryName, setCountryName] = useState("");

  const closeDialog = () => dialogRef.current?.close();

  const onSave = () => {
    submitNewCountry(countryName);
    closeDialog();
    setCountryName("");
  };

  return (
    <div>
      <dialog ref={dialogRef} style={{ padding: "20px", borderRadius: "8px" }}>
        <h2>Enter New Country Name</h2>
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          placeholder="Country Name"
          required
        />
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <button onClick={onSave} disabled={countryName.length === 0}>
            Save
          </button>
          <button onClick={closeDialog}>Cancel</button>
        </div>
      </dialog>
    </div>
  );
};

export default NewCountry;
