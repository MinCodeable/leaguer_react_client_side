import styled from "@emotion/styled";

export const StandardButton = styled.button`
    height: 2em;
    width: 4em;
    background-color: #5088b9;
    border-radius: .5em;
    color: white;
    &:hover{
        background-color: aquamarine;
    }
`;

export const SmallButton = styled(StandardButton)`
    height: 4em;
    width: 8em;
`;

export const SmallButtonAlert = styled(SmallButton)`
    background-color: red;
`;

export const LargeButton = styled(StandardButton)`
    height: 6em;
    width: 10em;
`
