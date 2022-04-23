import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { ImageStandard, ImageWrapperRounded } from '../../UI/ImageStyles';

export const CardWrapper = styled.div`
    background-color: var(--color-tertiary);
    border-radius: .7rem;
    padding: .625em;
    width: max(100%, 40vh);
    max-width: 420px;
    height: auto;
    text-transform: capitalize;

    .card_image--name{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .2em;
        font-size: clamp(1.35rem, 2vw, 1.5rem);
        color: var(--text--primary-color);
        font-weight: 400;
    }

    &:hover{
        border: 3px solid var(--color-primary);
    }
`;

export default function ChampionCard({image, name}) {
  return (
      <Link to="/champions/1">
        <CardWrapper> 
            <ImageWrapperRounded>
                <ImageStandard src={image} alt="xataka" />
            </ImageWrapperRounded>
            <div className='card_image--name'> {name} </div>
        </CardWrapper>
      </Link>
  )
}
