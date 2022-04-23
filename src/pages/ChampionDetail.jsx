import styled from '@emotion/styled'
import { ImageStandard, ImageWrapperSmall, ImageWrapperStandard } from '../components/UI/ImageStyles'
import xataca from '../images/xataka.jpg'
import aatrox_hab1 from '../images/champions/aatrox/abilities/aatrox_hab1.png'
import aatrox_hab2 from '../images/champions/aatrox/abilities/aatrox_hab2.png'
import aatrox_hab3 from '../images/champions/aatrox/abilities/aatrox_hab3.png'
import aatrox_hab4 from '../images/champions/aatrox/abilities/aatrox_hab4.png'
import aatrox_hab5 from '../images/champions/aatrox/abilities/aatrox_hab5.png'

const WrapperDetail = styled.div`
  color: white;
  
`;

const ContentImageAndNames = styled.div`
  position: relative;
`;

const ContentImagesWrapper = styled.div`
  border: 2px solid blue;
  display: flex;
`;

const NamesChampion = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #00000095;
  text-align: center;
  width: 100%;
  padding: .6em 0;
  font-style: oblique;
`;

export default function ChampionDetail() {
  return (
    <WrapperDetail>
      <ContentImageAndNames>
        <ImageWrapperStandard>
          <ImageStandard src={xataca} alt="aatrox"/>
        </ImageWrapperStandard>
        <NamesChampion>
          <div>La espada de los Oscuros</div>
          <div className='nameChampion'>AATROX</div>
        </NamesChampion>
      </ContentImageAndNames>

    <div>
      <div>
        <div>Rol</div>
        <div>Luchador</div>
      </div>
      <div>
        <div>Dificultad</div>
        <div>Moderada</div>
      </div>
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam provident facere reprehenderit architecto ullam nobis. Quo, laudantium dicta tenetur asperiores, ipsa provident cumque quae explicabo incidunt cupiditate minus, nam ea! Dolorem magnam in quo recusandae cupiditate! Error expedita magnam reprehenderit maiores eos at fugit atque officiis nam incidunt illum enim dolores ipsa id voluptatum mollitia quas, alias deleniti? Rem sequi minima ab ipsa et corrupti fugiat, vel iure quasi iste aspernatur architecto eligendi inventore quisquam temporibus est sint dicta omnis vero quidem cupiditate rerum aliquam dolore! Dolore autem obcaecati temporibus numquam officiis repudiandae voluptatem maiores minima quis nisi? Consectetur, delectus.</p>
    </div>

    <ContentImagesWrapper>
      <div> &#60;      </div>
      <ImageWrapperStandard>
        <ImageWrapperSmall>
          <ImageStandard src={xataca} alt="" />
        </ImageWrapperSmall>
        <ImageWrapperSmall>
          <ImageStandard src={xataca} alt="" />
        </ImageWrapperSmall>
        <ImageWrapperSmall>
          <ImageStandard src={xataca} alt="" />
        </ImageWrapperSmall>
      </ImageWrapperStandard>
      <div> &#62;      </div>
    </ContentImagesWrapper>

    <div>
      <div>HABILIDADES</div>
      <ContentImagesWrapper>
        <div><img src={aatrox_hab1} alt="pasiva" /></div>
        <div><img src={aatrox_hab2} alt="q" /></div>
        <div><img src={aatrox_hab3} alt="w" /></div>
        <div><img src={aatrox_hab4} alt="e" /></div>
        <div><img src={aatrox_hab5} alt="r" /></div>
      </ContentImagesWrapper>
      <div>
        <video width="300" controls >
          <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm" type="video/webm"></source>
        </video>
      </div>
      <div>
        <div>PASIVA</div>
        <div>ASPECTO DE LA MUERTE</div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem accusamus ea alias? Neque vero nostrum aspernatur doloribus perspiciatis consectetur quibusdam fugit molestiae, minima nemo voluptates repellendus fugiat ipsam explicabo tempore unde, sed alias, quam provident reprehenderit optio? Explicabo iusto blanditiis suscipit rem? Harum natus id illum. Eius a autem porro praesentium alias iure omnis molestiae exercitationem fugiat ad odio, eveniet quod obcaecati velit cumque asperiores? Voluptatibus est maxime ex deleniti nulla placeat aliquid, atque dolorem quam officia culpa laudantium exercitationem itaque quos rerum odio tempora praesentium quia nemo similique quisquam. Animi, rem incidunt? Tempore maxime iste qui, nostrum blanditiis vel?</div>
      </div>

    </div>
    </WrapperDetail>
  )
}
