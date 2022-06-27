import styled from '@emotion/styled'
import { ImageStandard, ImageWrapperStandard } from '../components/UI/ImageStyles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetChampionByIdQuery } from '../services/lolApi'
import ReactPlayer from 'react-player'
import ContentImagesSlider from '../components/imagesSlider/ContentImagesSlider'

const WrapperDetail = styled.div`
  color: white;
  margin: 0 15px;
  @media screen and (min-width: 1024px){
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;

const ContentCabecera = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px){
    flex-direction: row;
    gap: 15px;
  }
`;

const ContentImageAndNames = styled.div`
  position: relative;
  @media screen and (min-width: 1024px){
    display: flex;
    flex-grow: 1;
    width: 60%;
  }
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

  .nameChampion{
    font-size: clamp(2.2rem, 1rem + 5vw, 4.5rem);
    top: 60%;
    left: 25%;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const ContentDetailNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 1024px){
   flex-grow: 2;
   width: 40%;
  }
`;

const DetailRol = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: var(--color-primary);
  font-weight: 500;

`;

const RolTypeDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.2rem;

  .type{
    color: var(--text--primary-color);
  }
`;

const Hr = styled.hr`
  border: 1px solid var(--color-shadow);
  margin-top: 20px;
  width: 80%;
`;

const DetailDescrip = styled.div`
  margin-top: 20px;
  text-align: justify;
  font-size: .85rem;
  color: var(--text--primary-color);

`;

const WrapperHabilidades = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;

  @media screen and (min-width: 1024px){
   margin: 1.5rem auto; 
  }

`;

const ContentImageDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1024px){
    flex-direction: row;
  }
`;

const TitleHabilidad = styled.h3`
  font-size: clamp(1.8rem, 1rem + 6vw, 2.5rem);
  font-style: oblique;
  margin: 2rem 0rem;
  color: var(--color-primary);
  letter-spacing: .2rem;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 1024px){
    margin: 0rem;
    margin-bottom: 3rem;
    padding: 1rem 0rem;
  }

`;

const HabilidadesImages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;

  @media screen and (min-width: 768px){
    gap: .5rem;
  };

  @media screen and (min-width: 1024px){
    flex-direction: column;
    flex-grow: 1;
    width: 30%;
    gap: 2.5rem;
  }

`;

const ImageHabilidad = styled.div`
  width: clamp(3rem, 1rem + 8vw, 4rem);
  height: auto;
  cursor: pointer;
  
  @media screen and (min-width: 1024px){
    border: 1px solid var(--color-primary);
    padding: .5rem;
    border-radius: .5rem;
  }
`;

const ContentDetailHabilidades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  width: 100%;
  @media screen and (min-width: 1024px){
    flex-grow: 2;
    width: 70%;
  }
`;

const HabilidadVideo = styled.div`
  width: clamp(18rem, 10rem + 35vw, 45rem);
`;

const HabilidadDescriptionKeyword = styled.div`
  font-size: .85rem;
  text-align: justify;
  width: clamp(18rem, 10rem + 35vw, 45rem);
  div{
    color: var(--text--primary-color);
  }
`;

const HabilidadGroupSpan = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpanKeyword = styled.span`
  color: var(--color-primary);
  line-height: 1.5rem;
  font-weight: 600;
`;

export default function ChampionDetail() {

  const idParams = useParams(null);
  const [keyword, setKeyword] = useState({});
  const [aspectImage, setAspectImage] = useState("");
  const {data: champion, error, isLoading} = useGetChampionByIdQuery(idParams.id);

  useEffect(() =>{
    setKeyword(champion?.datos?.abilities[0]);
    setAspectImage(champion?.datos?.main_imgsrc);
  },[champion])
 
  function setMainImage(img){
    setAspectImage(img)
  }

  return (
    <WrapperDetail>

      <ContentCabecera>
        <ContentImageAndNames>
          <ImageWrapperStandard>
            <ImageStandard src={aspectImage} alt={champion?.datos?.name}/>
          </ImageWrapperStandard>
          <NamesChampion>
            <div>{champion?.datos?.nickname}</div>
            <div>
              <div className='nameChampion'>{champion?.datos?.name}</div>
            </div>
          </NamesChampion>
        </ContentImageAndNames>

        <ContentDetailNames>
          <DetailRol>
            <RolTypeDetail>
              <span>Rol</span>
              <span className='type'>{champion?.datos?.type}</span>
            </RolTypeDetail>
            <RolTypeDetail>
              <span>Dificultad</span>
              <span className='type'>{champion?.datos?.difficulty}</span>
            </RolTypeDetail>
          </DetailRol>
          <Hr/>
          <DetailDescrip>
            <p>{champion?.datos?.description}</p>
          </DetailDescrip>
        </ContentDetailNames>
      </ContentCabecera>

      <ContentImagesSlider champion={champion} setMainImage={setMainImage} />

      <WrapperHabilidades>

        <TitleHabilidad>HABILIDADES</TitleHabilidad>

        <ContentImageDetails>
          <HabilidadesImages>
            {
              champion?.datos && champion?.datos.abilities.map( (ability, idx) =>
                  <div key={idx}>         
                      <ImageHabilidad key={idx}  onClick={() => setKeyword(champion?.datos?.abilities[idx])}><ImageStandard src={require(`../images/champions/${champion?.datos?.name}/abilities/${champion?.datos?.name+"_hab"+(idx+1)+".png"}`)} alt="PASIVA" /></ImageHabilidad>
                  </div>
                )
            }            
          </HabilidadesImages>

          <ContentDetailHabilidades>
            <HabilidadVideo>
              <ReactPlayer  url={keyword?.video} width={"100%"} height={"100%"} controls={true} />
            </HabilidadVideo>
            <HabilidadDescriptionKeyword>
              <HabilidadGroupSpan>
                <SpanKeyword>{keyword?.type_keyword}</SpanKeyword>
                <SpanKeyword>{keyword?.name}</SpanKeyword>
              </HabilidadGroupSpan>
              <div> {keyword?.description} </div>
            </HabilidadDescriptionKeyword>
          </ContentDetailHabilidades>

        </ContentImageDetails>

      </WrapperHabilidades>

    </WrapperDetail>
  )
}
