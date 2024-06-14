import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'iconoir-react';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 5px;  // Add padding to push links further down
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Subtitle = styled.p`
  margin: 5px 0;
  font-size: 18px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const Image = styled.img`
  height: auto;
  width: 450px;  // Increase the width of the image
  border-radius: 10px;
`;

const ImageCaption = styled.p`
  margin-top: 5px;
  font-size: 12px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
  padding-bottom: 100px;
`;

const Link = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #61dafb;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }
`;

const Header = () => {
  const links = [
    { url: "/russellcook.pdf", text: "CV" },
    { url: "mailto:russellcook21@example.com", text: "Email" },
    { url: "https://google.com", text: "Twitter" },
    { url: "https://github.com/RussellCook4/russellcook.me", text: "GitHub" },
    { url: "https://www.linkedin.com/in/russell-cook1/", text: "LinkedIn" },
  ];

  return (
    <HeaderContainer>
      <ContentContainer>
        <TextContainer>
          <Title> hi! I'm Russell <br></br> <br></br>This is my online note bank. Feel free to take a peek.</Title>
          <Subtitle><br></br>currently a data scientist at spotify</Subtitle>
          <Subtitle><br></br>things</Subtitle>
        </TextContainer>
        <ImageContainer>
          <Image src="/russ.jpeg" alt="Russell Cook by Tomas Maillo" />
          <ImageCaption>Russell Cook by Tomas Maillo</ImageCaption>
        </ImageContainer>
      </ContentContainer>
      <LinksContainer>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.text} <ArrowUpRight height={16} width={16} style={{ marginLeft: '5px' }} />
          </Link>
        ))}
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
