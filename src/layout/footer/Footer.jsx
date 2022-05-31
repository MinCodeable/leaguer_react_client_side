import styled from "@emotion/styled"
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight, AiFillMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import FooterAccordion from "../../components/footeracordion/FooterAccordion";
import { TextStandard } from "../../components/UI/TextStyles";

const Wrapper = styled.footer`
  border-top: 2px solid var(--color-primary);
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
  .color-icon{
    color: var(--color-primary);
  }

`;

const WrapperRedes = styled.div`
  padding: .5rem 1.2em;
`;

const Copiryght = styled.div`

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
