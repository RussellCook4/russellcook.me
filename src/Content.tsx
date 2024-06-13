import styled from "styled-components";

const FadeOutParagraph = styled.p`
  line-height: 1.5;
  max-height: 4.5em; /* Adjust this value to control the visible text area */
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  /* Fallback for browsers that do not support mask-image */
  background: linear-gradient(to bottom, #fff 60%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white; /* Ensure text color is white for browsers not supporting the gradient */
`;


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

  return (
    <div style={containerStyle}>
      <img src={imageSrc} alt="Abstract Art" style={imageStyle} />
      <div style={textStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <FadeOutParagraph>{contentText}</FadeOutParagraph>
      </div>
    </div>
  );
};

export default ContentSection;

