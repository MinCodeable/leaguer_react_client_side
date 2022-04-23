import styled from "@emotion/styled";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import { IconIoIosCloseCircleOutline } from "../UI/IconCloseStyle";

const WrapperNav = styled.div``;

const ShadowDiv = styled.div`
  position: fixed;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  &.active{
    width: 100%;
    background-color: var(--color-pop-bkg);
  }
`;

const NavbarItems = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 50%;
  padding: 1rem 0;
  background-color: var(--color-secondary);
  color: white;
  transition: right 1.5s ease;
  
  &.active{
    right: 0%;
    transition: right 1.5s ease;
  }
`;

const NavbarLink = styled.div`
  border-bottom: 1px solid var(--color-primary);
  padding: 1em 0;
  padding-left: 1em;
  &:hover{
    background-color: var(--color-primary);
    color: black;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 1rem;
`;

const Burger = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 20;
  font-size: 1.6rem;
  color: var(--text--primary-color);
`;

const IconAiOutlineMenu = styled(AiOutlineMenu)`
  &:hover{
    color: var(--color-primary);
  }
`;

const IconBiSearchAlt2 = styled(BiSearchAlt2)`
  &:hover{
    color: var(--color-primary);
  }
`;



export default function Navbar() {
  const [active, setActive] = useState(false);

  function handleTheme(){
    const bodyClass = document.body.classList;
    if(bodyClass.contains("light")){
      bodyClass.replace("light", "dark")
    }else{
      bodyClass.add("light")
    }
  }

  return (
    <WrapperNav>
      <Burger>
        <IconAiOutlineMenu onClick={() => setActive(true)}/>
        <IconBiSearchAlt2 />
      </Burger>
      <ShadowDiv className={ active ? "active" : ""}>
        <NavbarItems className={ active ? "active" : ""}>
          <IconsWrapper>
            <span onClick={handleTheme}> <BsMoon/> </span>
            <span onClick={() => setActive(false)}> <IconIoIosCloseCircleOutline/>  </span>
          </IconsWrapper>
          <br />
          <NavbarLink>Campeones</NavbarLink>
          <NavbarLink>Aspects</NavbarLink>
        </NavbarItems>
      </ShadowDiv>
    </WrapperNav>
  )
}
