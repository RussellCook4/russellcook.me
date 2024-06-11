const Header = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const textStyle = {
    flex: 1,
    paddingLeft: "20px",
  };

  const imageStyle = {
    height: "auto",
    width: "400px",
    marginLeft: "20px",
  };

  const quoteStyle = {
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h2>This is my online note bank. Feel free to take a peek.</h2>
        <p>currently a data scientist at spotify</p>
        <p style={quoteStyle}>smart quote about tings</p>
      </div>
      <div>
        <img
          src="/russ.jpeg"
          alt="Russell Cook by Tomas Maillo"
          style={imageStyle}
        />
        <p>Russell Cook by Tomas Maillo</p>
      </div>
    </div>
  );
};

export default Header;
