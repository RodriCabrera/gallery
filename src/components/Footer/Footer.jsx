import React from "react";
import { Container, Text, TextBox, Wrapper } from "./Footer.elements";

const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <TextBox>
            <Text>ART LATIN AMERICA © 2022</Text>
            <Text>Website by Rodrigo Cabrera</Text>
          </TextBox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer;
