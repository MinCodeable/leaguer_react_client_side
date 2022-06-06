import styled from "@emotion/styled";

export const WrapperSearch = styled.div`
    position: fixed;
    display: flex;    
    justify-content: end;
    background-color: var(--color-shadow);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    &.active{
        width: 80%;
    }
`;

export const ContentWrapper = styled.div`
    background-color: var(--color-tertiary);
    color: white;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContentFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: .8rem;
`;

export const ContentFilterClose = styled.div`
    padding: .8rem 0;
    display: flex;
    width: 100%;
    text-align: center;
    background-color: var(--color-secondary);
    color: white;
`;

export const CloseName = styled.div`
    width: 90%;
`;

export const ContentSelect = styled.select`
    width: 100%;
    padding: .4em 1rem;
`
export const ContentInput = styled.input`
    width: 100%;
    padding: .4em 1rem;
    `
export const LabelContent = styled.label`
    width: 100%;
`