import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ImageStandard, ImageWrapperSmallCarousel } from "../UI/ImageStyles";

const Slider = styled.div`
  position: relative;
`;

const ContentSlideImages = styled.div`
    margin: 0rem 1rem;
`;

const ContentArrows = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 45%;
`;

const Arrows = styled.button`
  display: none;

  @media screen and (min-width: 768px){
    display: flex;
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

const ContentImagesWrapper = styled.div`
 
  margin-top: 20px;
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow: scroll;
  
  &.active{
    display: none;
  }

  @media screen and (min-width: 768px){
    flex-wrap: nowrap;
    
    width: ${(prop) => prop.slideWidth+'px'};
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: hidden;
    
    &.active{
      display: flex;
    }

    &.carousel{
      overflow-x: auto;
      scroll-behavior: smooth;
      &::-webkit-scrollbar{
        display: none;
      }
    }
  }

`;

const WrapperImagesSlide = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem auto;
  cursor: pointer;
  
`;

const ImageWrapperSmalls = styled(ImageWrapperSmallCarousel)`
  box-shadow: 0px 0px 15px 0px rgba(186,186,186,0.35);
`;

export default function ContentImagesSlider({champion, setMainImage}) {

  const carouselRef = useRef(null);
  const imagesWrapper = useRef(null);
  const sliderRef = useRef(null);
  const [imageWrapperWidth, setImageWrapperWidth] = useState(0);
  const [imageCount, setImageCount] = useState(champion?.datos?.aspects?.length);
  const countRef = useRef(null);
  countRef.current = imageCount;

  function handleClickLeft(e){
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
  }
    
  function handleClickRight(e){
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
  }

  function changeSliderSize(){
    const imagesCount = countRef.current
    const imageWrapperWidth = imagesWrapper.current.offsetWidth;
    const imageWidth = imageWrapperWidth / imagesCount;    
    const contentSlideWidth = sliderRef.current.offsetWidth
    const newWrapperWidth = Math.floor(contentSlideWidth /imageWidth) * imageWidth;
    setImageWrapperWidth(newWrapperWidth );
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener("resize", handleResize)}
  },[])
 
  useEffect( () => {
    const cantElements = champion?.datos?.aspects?.length;
    if(cantElements > 0)  setImageCount(cantElements);
  }, [champion]);
  
  useEffect(()=>{    
    changeSliderSize();
  },[imageCount])

  function handleResize(){
    changeSliderSize();
  }

  return (
    <Slider>
        <ContentSlideImages ref={sliderRef}>

            <ContentImagesWrapper ref={carouselRef}  slideWidth={imageWrapperWidth}>
            <WrapperImagesSlide ref={imagesWrapper} >
                {
                  champion?.datos?.aspects.map( (aspect,idx) => 
                      <ImageWrapperSmalls key={idx}> 
                      <ImageStandard onClick={ () => setMainImage(aspect.imgsrc)} src={aspect.imgsrc} alt={aspect.name}/> 
                      </ImageWrapperSmalls>
                  )
                }
            </WrapperImagesSlide>
            </ContentImagesWrapper>

        </ContentSlideImages>
      <ContentArrows>
        <Arrows onClick={handleClickLeft} > &#60;      </Arrows>
        <Arrows onClick={handleClickRight} > &#62;      </Arrows>
      </ContentArrows>

    </Slider>

  )
}
