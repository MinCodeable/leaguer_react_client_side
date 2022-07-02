import {useRef } from "react";
import styled from "styled-components";
import { ImageStandard, ImageWrapperSmallCarousel } from "../UI/ImageStyles";

const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Arrows = styled.button`
  display: none;

  @media screen and (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-primary);
    border-radius: 50%;
    padding: .2rem .4rem;
    color: var(--color-primary);
    background: none;
    cursor: pointer;
    &:hover{
      background-color: #ffffff3c;
    }
  }
`;

const WrapperImagesSlide = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem auto;
  cursor: pointer;
  overflow: scroll;
  @media screen and (min-width: 768px){
    overflow: hidden;
  }
`;

const ImageWrapperSmalls = styled(ImageWrapperSmallCarousel)`
  box-shadow: 0px 0px 15px 0px rgba(186,186,186,0.35);
  min-width: 13rem;
  display: inline-block;
`;

export default function ContentImagesSlider({champion, setMainImage}) {

  const sliderRef = useRef(null);
 
  function handleMoveSlider(direction){
    const numSlides = champion?.datos?.aspects.length || 1;
    const silderWidth = sliderRef.current.scrollWidth || 1;
    const scrollSize = silderWidth / numSlides;
    
    sliderRef.current.scrollLeft += scrollSize * direction;
  }

  return (

    <SliderWrapper>
      <Arrows onClick={() => handleMoveSlider(-1)} > &#60; </Arrows>

      <WrapperImagesSlide ref={sliderRef}>
        {
          champion?.datos?.aspects.map( (aspect,idx) => 
            <ImageWrapperSmalls key={idx}> 
              <ImageStandard onClick={ () => setMainImage(aspect.imgsrc)} src={aspect.imgsrc} alt={aspect.name}/> 
            </ImageWrapperSmalls>
          )
        }
      </WrapperImagesSlide>
      
      <Arrows onClick={() => handleMoveSlider(1)} > &#62; </Arrows>
    </SliderWrapper>

  )
}
