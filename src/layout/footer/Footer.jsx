import styled from "@emotion/styled"
import { useRef } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight, AiFillMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import FooterAccordion from "../../components/footeracordion/FooterAccordion";
import { TextStandard, TextTitle } from "../../components/UI/TextStyles";
// import { DiAndroid } from "react-icons/di";
// import {  } from "react-icons/ai";


const Wrapper = styled.footer`
  border-top: 2px solid var(--color-primary);
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  
  .color-icon{
    color: var(--color-primary);
  }
`;

const WrapperRedes = styled.div`
  padding: 0 1.2em;
`;

const Copiryght = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  font-size: .8rem;
  text-align: center;
  background-color: var(--color-tertiary);
  padding: 1.2em;
  margin-top: 1.2em;
  span{
    color: var(--color-primary);
    font-weight: 500;
  }
`;

export default function Footer() {

  return (
    <Wrapper>
      <WrapperRedes>
        <FooterAccordion titleName="Redes Sociales">
            <div>
              <AiFillGithub className="icon-redes" />
              <AiFillLinkedin className="icon-redes" />
            </div>
        </FooterAccordion>

        <FooterAccordion titleName="Enlaces Rapidos">
            <div>
              <AiOutlineArrowRight className="color-icon" />
              <TextStandard > Campeones </TextStandard>
            </div>
            <div>
              <AiOutlineArrowRight className="color-icon"/>
              <TextStandard > Aspectos </TextStandard>
            </div>
        </FooterAccordion>


        <FooterAccordion titleName="Informacion del Contacto">
            <div>
              <AiFillMail className="color-icon" />
              <TextStandard> mindyleonh@gmail.com </TextStandard>
            </div>
            <div>
              <IoLocation  className="color-icon"/>
              <TextStandard> Lima-Peru </TextStandard>
            </div>
        </FooterAccordion>
      </WrapperRedes>

      <Copiryght>
        Realizado por <span> Mindy Leon </span> | Todos los derechos reservados.
      </Copiryght>
    </Wrapper>
  )
}
