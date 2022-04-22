import styled from '@emotion/styled'
// import images from '../../../images/xataka.jpg'
import { ImageStandard, ImageWrapperRounded } from '../../UI/ImageStyles';

export const CardWrapper = styled.div`
    /* border: 2px solid green; */
    background-color: var(--color-tertiary);
    border-radius: 1rem;
    padding: .625em;
    width: max(80%, 40vh);
    max-width: 420px;
    height: auto;

    .card_image--name{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .2em;
        font-size: clamp(1.55rem, 2vw, 2rem);
        color: var(--text--primary-color);
        font-weight: 400;
    }

    &:hover{
        border: 3px solid var(--color-primary);
    }
`;

export default function ChampionCard({image, name}) {
  return (
    <CardWrapper> 
        <ImageWrapperRounded>
            <ImageStandard src={image} alt="xataka" />
        </ImageWrapperRounded>
        <div className='card_image--name'> {name} </div>
    </CardWrapper>
  )
}
