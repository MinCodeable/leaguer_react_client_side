import styled from "@emotion/styled";

export const ImageWrapperStandard = styled.div`
    box-sizing: border-box;
    display: flex;
`;

export const ImageWrapperSmall = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 150px;
`;

export const ImageWrapperRounded = styled(ImageWrapperStandard)`
    border-radius: 1.2em;
`

export const ImageStandard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

