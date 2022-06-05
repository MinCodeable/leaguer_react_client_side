import styled from "@emotion/styled";
import { devices } from "../../layout/responsive/DevicesBreakPoints";

export const ImageWrapperStandard = styled.div`
    box-sizing: border-box;
    display: flex;
`;

export const ImageWrapperSmall = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 150px;
`;

export  const ImageWrapperSmallCarousel = styled(ImageWrapperSmall)`
    width: clamp(3rem, 5rem + 8vw, 15rem);
`;

export const ImageWrapperRounded = styled(ImageWrapperStandard)`
    border-radius: .5rem;
    display: flex;
    @media  ${devices.tablet} {
        border-radius: .7rem;
    }
    
    @media  ${devices.desktop} {
        border-radius: 1rem;
    }
`

export const ImageStandard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

