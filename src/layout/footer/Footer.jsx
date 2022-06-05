import styled from "@emotion/styled"
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowRight, AiFillMail } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { TextStandard} from "../../components/UI/TextStyles";
import FooterSection from "./FooterSection";

const Wrapper = styled.footer`
  border-top: 2px solid var(--color-primary);
  color: white;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 100%;

  .color-icon{
    color: var(--color-primary);
  }

`;

const WrapperRedes = styled.div`
  padding: .5rem 1.2em;
  @media screen and (min-width: 1024px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }
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


const RedSocialItems = styled.div`
  margin-top: .8rem;
  font-size: 2rem;
  margin-left: 1rem;
  display: flex;
  gap: 1rem;
  
  .icon-redes{
      border: 1px solid var(--color-primary);
      padding: .1em;
      border-radius: .1em;
  }

  @media screen and (min-width: 1024px){
    margin-left: 0;
    justify-content: space-between;
    gap: 0;

    .icon-redes{
      border: 1px solid var(--color-primary);
      padding: .1em;
      border-radius: .1em;
    }
  }
`;

const RedSocialItemsEnlace = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: .8rem;
  margin-left: 1rem;

  @media screen and (min-width: 1024px){
    margin-left: 0;
  }
`;

const RedEnlace = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default function Footer() {

  return (
    <Wrapper>
      <WrapperRedes>
        
        <FooterSection name={"Redes Sociales"} >
          <RedSocialItems>
            <AiFillGithub className="icon-redes" />
            <AiFillLinkedin className="icon-redes" />
          </RedSocialItems>
        </FooterSection>

        <FooterSection name={"Enlaces rapidos"}>
          <RedSocialItemsEnlace>
            <RedEnlace>
              <AiOutlineArrowRight className="color-icon" />
              <TextStandard > Campeones </TextStandard>
            </RedEnlace>
            <RedEnlace>
              <AiOutlineArrowRight className="color-icon"/>
              <TextStandard > Aspectos </TextStandard>
            </RedEnlace>
          </RedSocialItemsEnlace>
        </FooterSection >

        <FooterSection name={"Informacion del contacto"}>
          <RedSocialItemsEnlace>
            <RedEnlace>
              <AiFillMail className="color-icon" />
              <TextStandard> mindyleonh@gmail.com </TextStandard>
            </RedEnlace>
            <RedEnlace>
              <IoLocation  className="color-icon"/>
              <TextStandard> Lima-Peru </TextStandard>
            </RedEnlace>
          </RedSocialItemsEnlace>            
        </FooterSection >

      </WrapperRedes>

      <Copiryght>
        Realizado por <span> Mindy Leon </span> | Todos los derechos reservados.
      </Copiryght>
    </Wrapper>
  )
}
