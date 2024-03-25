import React, { Children } from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: inherit;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HeroContainerPage({ children, backgroundImage }) {
  return (
    <HeroContainer
      backgroundImage={backgroundImage}
      className="2xl:h-[45rem] lg:h-[45rem] md:h-[40rem] h-svh pt-[3rem]"
    >
      {children}
    </HeroContainer>
  );
}
