import styled from "@emotion/styled";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";
import { IconIoIosCloseCircleOutline } from "../UI/IconCloseStyle";
import {NavLink} from 'react-router-dom'
import {devices} from '../../layout/responsive/DevicesBreakPoints'

const WrapperNav = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px){
    flex-direction: row-reverse;
    padding: 0rem 1rem;
  }
`;

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
  
  @media  ${devices.tablet} {
    position: static; 
    width: 100%;
  } 
`;

const NavbarItems = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 60%;
  padding: 1rem 0;
  background-color: var(--color-secondary);
  color: var(--text--primary-color);
  transition: right .7s ease;
  display: flex;
  flex-direction: column;
  
  &.active{
    right: 0%;
    transition: right .7s ease;
  }

  @media  ${devices.tablet} {
    position: static;
    width: 100%;
    padding: 0;
    justify-content: center;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 1rem;

  @media  ${devices.tablet} {
    display: none;
  }
`;

const NavLinksWeapper = styled.div`
  display: flex;
  flex-direction: column;

  @media  ${devices.tablet} {
    flex-direction: row;
    gap: 25px;
    /* border: 2px solid green; */
  }
`;

const NavbarLinks = styled(NavLink)`
  border-bottom: 1px solid var(--color-primary);
  padding: 1em 0;
  padding-left: 1em;
  color: var(--text--primary-color);
  text-decoration: none;
  /* color: red; */

  &:hover{
    background-color: var(--color-primary);
    color: var(--color-secondary);
    /* color: red; */

  }
  &.active{
    /* color: var(--color-secondary); */
    color: var(--text--primary-color);
    background-color: var(--color-primary);
    font-weight: 500;
  }

  @media  ${devices.tablet} {
    /* display: flex; */
    /* flex-direction: row; */
    /* border: 2px solid red; */
    padding: .5em 1em;
    /* row-gap: 15px; */
    /* gap: 20px; */
  }

`;

const NavRowIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  z-index: 20;
  font-size: 1.6rem;
  color: var(--text--primary-color);
`;

const IconAiOutlineMenu = styled(AiOutlineMenu)`
  &:hover{
    color: var(--color-primary);
  }

  @media  ${devices.tablet} {
    display: none;
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
      <NavRowIcons>
        <IconAiOutlineMenu onClick={() => setActive(true)}/>
        <IconBiSearchAlt2 />
      </NavRowIcons>
      <ShadowDiv className={ active ? "active" : ""} id="shadow">
        <NavbarItems className={ active ? "active" : ""}>
          <IconsWrapper>
            <span onClick={handleTheme}> <BsMoon/> </span>
            <span onClick={() => setActive(false)}> <IconIoIosCloseCircleOutline/>  </span>
          </IconsWrapper>
          <NavLinksWeapper>
            <NavbarLinks end to='champions' className={ ({isActive}) => isActive ? 'active' : '' } >Campeones</NavbarLinks>
            <NavbarLinks end to='aspects' className={ ({isActive}) => isActive ? 'active' : '' } >Aspects</NavbarLinks>
          </NavLinksWeapper>
        </NavbarItems>
      </ShadowDiv>
    </WrapperNav>
  )
}
