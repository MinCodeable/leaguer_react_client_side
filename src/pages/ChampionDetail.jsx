import styled from '@emotion/styled'
import { ImageStandard, ImageWrapperSmall, ImageWrapperStandard } from '../components/UI/ImageStyles'
import xataca from '../images/xataka.jpg'
import aatrox_hab1 from '../images/champions/aatrox/abilities/aatrox_hab1.png'
import aatrox_hab2 from '../images/champions/aatrox/abilities/aatrox_hab2.png'
import aatrox_hab3 from '../images/champions/aatrox/abilities/aatrox_hab3.png'
import aatrox_hab4 from '../images/champions/aatrox/abilities/aatrox_hab4.png'
import aatrox_hab5 from '../images/champions/aatrox/abilities/aatrox_hab5.png'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useGetChampionByIdQuery } from '../services/lolApi'

const WrapperDetail = styled.div`
  color: white;
  margin: 0 15px;
`;

const ContentImageAndNames = styled.div`
  position: relative;
`;

const ContentImagesWrapper = styled.div`
  border: 3px solid red;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow: scroll;
`;

const NamesChampion = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #00000095;
  width: 100%;
  padding: .6em 0;
  font-style: oblique;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border:1px solid red; */

  .nameChampion{
    /* border:1px solid green; */
    position: absolute;
    font-size: clamp(2.2rem, 1rem + 5vw, 5rem);
    top: 60%;
    left: 25%;
    font-weight: 700;
    /* right: 50%; */
  }
`;

const ContentDetailNames = styled.div`
  /* border: 1px solid orange; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0px 10px; */
  margin-top: 40px;
`;

const Hr = styled.hr`
  /* color: var(--color-shadow); */
  border: 1px solid var(--color-shadow);
  margin-top: 20px;
  width: 80%;
`;

const DetailRol = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const RolTypeDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.2rem;

  .type{
    color: var(--color-primary);
  }
`;

const DetailDescrip = styled.div`
  /* border: 2px solid green; */
  margin-top: 20px;
  text-align: justify;
  font-size: .85rem;
`;

const WrapperHabilidades = styled.div`
  /* border:2px solid greenyellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 0;
  /* margin: 0; */
`;

const HabilidadesImages = styled.div`
  /* border: 2px solid orange; */
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;

  /* padding: 0; */
`;

const ImageHabilidad = styled.div`
  /* width: clamp(1rem, 1rem + 5vw, 3rem); */
  width: clamp(3rem, 1rem + 12vw, 8rem);
  height: 55px;
  cursor: pointer;
  /* height: auto; */
`;

const HabilidadVideo = styled.div`
  border: 2px solid green;
  width: 100%;

`;

const HabilidadDescriptionKeyword = styled.div`
  /* border: 2px solid yellow; */
  margin: 20px 0px;
  width: 100%;
  font-size: .85rem;
  text-align: justify;
`;

const HabilidadGroupSpan = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpanKeyword = styled.span`
  color: var(--color-primary);
  line-height: 1.5rem;
  font-weight: 500;
`;

const TitleHabilidad = styled.h3`
  font-size: 1.8rem;
  font-style: oblique;
  margin-top: 20px;
  color: var(--color-primary);
`;

const WrapperImagesSlide = styled.div`
  border: 2px solid yellow;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default function ChampionDetail() {
const idParams = useParams(null);
console.log("****: ",idParams.id);

const {data: champion, error, isLoading} = useGetChampionByIdQuery(idParams.id)

function scrollLeft(){
  console.log("left")
  const left = document.querySelector('.slideChampions')
  left.scrollBy(-350,0)
}

function scrollRight(){
  console.log("right")
  const right = document.querySelector('.slideChampions')
  right.scrollBy(350,0);
}

  return (
    <WrapperDetail>
      <ContentImageAndNames>
        <ImageWrapperStandard>
          {
            console.log("-----", champion)
          }
          <ImageStandard src={xataca} alt="aatrox"/>
        </ImageWrapperStandard>
        <NamesChampion>
          <div>La espada de los Oscuros</div>
          <div>
            <div className='nameChampion'>AATROX</div>
          </div>
        </NamesChampion>
      </ContentImageAndNames>

      <ContentDetailNames>
        <DetailRol>
          <RolTypeDetail>
            <span>Rol</span>
            <span className='type'>Luchador</span>
          </RolTypeDetail>
          <RolTypeDetail>
            <span>Dificultad</span>
            <span className='type'>Moderada</span>
          </RolTypeDetail>
        </DetailRol>
        <Hr/>
        <DetailDescrip>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam provident facere reprehenderit architecto ullam nobis. Quo, laudantium dicta tenetur asperiores, ipsa provident cumque quae explicabo incidunt cupiditate minus, nam ea! Dolorem magnam in quo recusandae cupiditate! Error expedita magnam reprehenderit maiores eos at fugit atque officiis nam incidunt illum enim dolores ipsa id voluptatum mollitia quas, alias deleniti? Rem sequi minima ab ipsa et corrupti fugiat, vel iure quasi iste aspernatur architecto eligendi inventore quisquam temporibus est sint dicta omnis vero quidem cupiditate rerum aliquam dolore! Dolore autem obcaecati temporibus numquam officiis repudiandae voluptatem maiores minima quis nisi? Consectetur, delectus.</p>
        </DetailDescrip>
      </ContentDetailNames>

      <ContentImagesWrapper>
        {/* <div onClick={scrollLeft}> &#60;      </div> */}
        <WrapperImagesSlide>
            <ImageWrapperSmall>
              <ImageStandard src={xataca} alt="" />
            </ImageWrapperSmall>
            <ImageWrapperSmall>
              <ImageStandard src={xataca} alt="" />
            </ImageWrapperSmall>
        </WrapperImagesSlide>
        {/* <div onClick={scrollRight}> &#62;      </div> */}
      </ContentImagesWrapper>

      <WrapperHabilidades>
        <TitleHabilidad>HABILIDADES</TitleHabilidad>
        <HabilidadesImages>
          <ImageHabilidad><ImageStandard src={aatrox_hab1} alt="PASIVA" /></ImageHabilidad>
          <ImageHabilidad><ImageStandard src={aatrox_hab2} alt="Q" /></ImageHabilidad>
          <ImageHabilidad><ImageStandard src={aatrox_hab3} alt="W" /></ImageHabilidad>
          <ImageHabilidad><ImageStandard src={aatrox_hab4} alt="E" /></ImageHabilidad>
          <ImageHabilidad><ImageStandard src={aatrox_hab5} alt="R" /></ImageHabilidad>
        </HabilidadesImages>
        <HabilidadVideo>
          <video width="100%" controls >
            <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm" type="video/webm"></source>
          </video>
        </HabilidadVideo>
        <HabilidadDescriptionKeyword>
          <HabilidadGroupSpan>
            <SpanKeyword>PASIVA</SpanKeyword>
            <SpanKeyword>ASPECTO DE LA MUERTE</SpanKeyword>
            {/* <SpanNameKeyword>ASPECTO DE LA MUERTE</SpanNameKeyword> */}
          </HabilidadGroupSpan>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem accusamus ea alias? Neque vero nostrum aspernatur doloribus perspiciatis consectetur quibusdam fugit molestiae, minima nemo voluptates repellendus fugiat ipsam explicabo tempore unde, sed alias, quam provident reprehenderit optio? Explicabo iusto blanditiis suscipit rem? Harum natus id illum. Eius a autem porro praesentium alias iure omnis molestiae exercitationem fugiat ad odio, eveniet quod obcaecati velit cumque asperiores? Voluptatibus est maxime ex deleniti nulla placeat aliquid, atque dolorem quam officia culpa laudantium exercitationem itaque quos rerum odio tempora praesentium quia nemo similique quisquam. Animi, rem incidunt? Tempore maxime iste qui, nostrum blanditiis vel?</div>
        </HabilidadDescriptionKeyword>

      </WrapperHabilidades>
    </WrapperDetail>
  )
}
