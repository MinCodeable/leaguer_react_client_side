import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { TextTitle } from "../UI/TextStyles";

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const WrapperText = styled.div`
  padding: .3em 1em;
  display: none;
  flex-direction: column;
  
  div{
    display: flex;
    gap: .5rem;
    align-items: center;
  }
 
  .icon-redes{
    border: 1px solid var(--color-primary);
    padding: .1em;
    font-size: 2rem;
    border-radius: .1em;
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
    <>
      <WrapperTitle onClick={handleActive}>
        <TextTitle > {titleName} </TextTitle>
        <TextTitle > {plusActive ? "+" : "-"} </TextTitle>
      </WrapperTitle>

      <WrapperText ref={refText}>
        {children}
      </WrapperText>
    </>
  )
}

