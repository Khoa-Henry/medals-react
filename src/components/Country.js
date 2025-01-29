import Medal from "./Medal";

const Country = (props) => {
  const { countries, setCountries, medals } = props;

  const handleDelete = (id) => {
    const foundIndex = countries.findIndex((c) => c.id === id);
    const countriesClone = [...countries];

    countriesClone.splice(foundIndex, 1);
    setCountries(countriesClone);
  };

  console.log(medals);

  return countries.map((c) => (
    <div
      style={{
        border: "solid 1px",
        width: "16rem",
        margin: ".5rem",
        borderRadius: ".5rem",
      }}
    >
      <h2
        style={{
          borderBottom: "solid 1px",
          padding: ".35rem",
          margin: "0",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        {c.name}
        <div
          class="basket"
          style={{
            padding: ".25rem",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleDelete(c.id);
          }}
        >
          🗑️
        </div>
      </h2>

      <div
        style={{
          padding: ".35rem",
        }}
      >
        {medals.current.map((m) => (
          <Medal medal={m.name} />
        ))}
      </div>
    </div>
  ));
};

export default Country;
