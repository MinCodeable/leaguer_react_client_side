import styled from '@emotion/styled';
import { ImageStandard, ImageWrapperStandard } from '../../UI/ImageStyles';

const AspectWrapper = styled.div`
    width: clamp(7rem, 1rem + 35vw, 25rem);
    position: relative;
    box-shadow: 0px 0px 15px 1px var(--color-shadow);
    cursor: pointer;
    z-index: 1;

    .aspect-name--champion{
        position: absolute;
        color: var(--color-primary);
        background-color: var(--color--hide);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .6s;
        transform: scale(1);
        opacity: 0;

        &:hover{
            transform: scale(1);
            font-size: clam(1.2rem, 2vh, 2rem);
            opacity: 1;
        }
    }
`;

export default function AspectCard({champion_id,image, name}) {
  return (
    <AspectWrapper>
        <ImageWrapperStandard data-id={champion_id}>
            <ImageStandard src={image} alt="aspect-image" />
            <div className='aspect-name--champion'> {name} </div>
        </ImageWrapperStandard>
    </AspectWrapper>
  )
}
