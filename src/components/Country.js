import { useState } from "react";

const Country = () => {
  const [name, setname] = useState("United States");
  const [gold, setGold] = useState(0);

  const handleOnClick = () => {
    setGold(gold + 1);
  };

  return (
    <div
      style={{
        border: "solid 1px",
        width: "16rem",
        margin: ".5rem",
        borderRadius: ".5rem",
      }}
    >
      <h2 style={{ borderBottom: "solid 1px", padding: ".35rem", margin: "0" }}>
        {name}
      </h2>
      <div
        style={{
          padding: ".35rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Gold medals: {gold}
        <button
          style={{
            padding: ".25rem",
            width: "1.5rem",
            margin: "0 3px",
            borderRadius: "8px",
            border: "solid 1px",
            cursor: "pointer",
          }}
          onClick={handleOnClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Country;
