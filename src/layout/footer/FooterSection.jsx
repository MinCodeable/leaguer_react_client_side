import styled from '@emotion/styled';
import { useRef } from 'react';

const FooterSectionWrapper = styled.div`
  @media screen and (min-width: 1024px){
    display: flex;
    flex-direction: column;
  }
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after{content: "+";}
  
  &+div{
      display: none;
  }

  &.active{
    &::after{content: "-";}

    &+div{
      display: flex;
    } 
  }

  @media screen and (min-width: 1024px){
    &::after{content: "";}

    &.active{
      &::after{content: "";}
    }

    &+div{
      display: flex;
    }
    
  }
`;

const TextTitleFooter = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-primary);
    margin: .7em 0em;
    
  @media screen and (min-width: 1024px){
    font-size: 1.1rem;
  }
  
`;

export default function FooterSection({name, children}) {
    const acordionRef = useRef(null);

    function handleActive(){
      const textClassRef = acordionRef.current.classList;
      (textClassRef?.contains("active")) ? textClassRef.remove("active") : textClassRef.add("active");
    }

    return (
      <FooterSectionWrapper>
        <WrapperTitle onClick={handleActive} ref={acordionRef} className={"accordion"} >
          
            <TextTitleFooter> {name} </TextTitleFooter>
        </WrapperTitle>
        {children}
      </FooterSectionWrapper>
    )
}
