const Medal = (props) => {
  const { medal, amount, handleDecrement, handleIncrement, countryId } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".35rem 0",
        fontSize: "20px",
      }}
    >
      <div>{medal} medals </div>
      <div>
        <button
          disabled={amount === 0}
          onClick={() => handleDecrement(countryId, medal)}
        >
          -
        </button>{" "}
        {amount}{" "}
        <button onClick={() => handleIncrement(countryId, medal)}>+</button>
      </div>
    </div>
  );
};

export default Medal;
