import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { ImageStandard, ImageWrapperRounded } from '../../UI/ImageStyles';

export const CardWrapper = styled.div`

    border-radius: .7rem;
    padding: .625em;
    width: clamp(110px, 34vw, 350px);
    text-transform: capitalize;
    display: flex;
    flex-direction: column;

    .card_image--name{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: clamp(1rem, 0.5rem + 2vw, 1.5rem);
        color: var(--text--primary-color);
        font-weight: 400;
        text-transform: capitalize;
    }

    &:hover{
        border: 1px solid var(--color-primary);
    }
`;

export default function ChampionCard({id, image, name}) {
  return (
      <Link to={`/champions/${id}`}>
        <CardWrapper> 
            <ImageWrapperRounded>
                <ImageStandard src={image} alt="xataka" />
            </ImageWrapperRounded>
            <div className='card_image--name'> {name} </div>
        </CardWrapper>
      </Link>
  )
}
