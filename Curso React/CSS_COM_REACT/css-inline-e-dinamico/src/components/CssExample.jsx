const CssExample = () => {
  const color = "red";
  const otherColor = "blue";
  const backgroundColor = "black";
  const isThatWay = true;

  return (
    <>
      <h1 style={{ color: "blue", backgroundColor: "grey" }}>
        this element is beeing styled with inline css
      </h1>
      <h1
        style={
          isThatWay
            ? { color: color, backgroundColor: backgroundColor }
            : { color: otherColor, backgroundColor: backgroundColor }
        }
      >
        this element is beeing styled with dinamic css
      </h1>
    </>
  );
};

export default CssExample;
