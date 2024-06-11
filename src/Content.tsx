const ContentSection = ({
  title,
  contentText,
  imageSrc,
}: {
  title: string;
  contentText: string;
  imageSrc: string;
}) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const imageStyle = {
    width: "400px",
    height: "auto",
    marginRight: "20px",
  };

  const textStyle = {
    flex: 1,
    paddingLeft: "20px",
  };

  const titleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <img src={imageSrc} alt="Abstract Art" style={imageStyle} />
      <div style={textStyle}>
        <h1 style={titleStyle}>{title} </h1>
        <p style={paragraphStyle}>{contentText}</p>
      </div>
    </div>
  );
};

export default ContentSection;
