import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { TextTitle } from "../UI/TextStyles";

const WrapperAccordion = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 1024px){
    display: none;
  }
`;

const WrapperTitle = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapperText = styled.div`
  /* border: 2px solid yellow; */
  padding: 0em 1em;
  display: none;
  flex-direction: column;
  
  div{
    display: flex;
    gap: .5rem;
    /* align-items: center; */
  }
 
  .icon-redes{
    border: 1px solid var(--color-primary);
    font-size: 2rem;
    padding: .1em;
    border-radius: .1em;
    @media screen and (min-width: 1024px){
      border: 1px solid var(--color-primary);
      gap: 1rem;
    }
  }

  &.active{
    display: flex;
  }
  
`;

export default function FooterAccordion({titleName, children}) {
  const refText = useRef();
  const [plusActive, setPlusActive] = useState(true);
  

  function handleActive(){
    const textClassRef = refText.current.classList

    if(textClassRef.contains("active")){
      textClassRef.remove("active")
      setPlusActive(true)
    }else{
      textClassRef.add("active")
      setPlusActive(false)
    }
  }

  return (
    <WrapperAccordion>
      <WrapperTitle onClick={handleActive}>
        <TextTitle > {titleName} </TextTitle>
        <TextTitle > {plusActive ? "+" : "-"} </TextTitle>
      </WrapperTitle>

      <WrapperText ref={refText}>
        {children}
      </WrapperText>
    </WrapperAccordion>
  )
}

