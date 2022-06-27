import styled from "@emotion/styled"
import { ImageStandard } from "../components/UI/ImageStyles";

const WrapperNotFound = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 2.5rem;
`;

const ContentImage =styled.div`
  width: clamp(3rem, 10rem + 50vw, 50rem);
`;

const Label = styled.label`
  color: var(--text--primary-color);
  font-size: 2.1rem;
  letter-spacing: .1rem;
  span{
    font-weight: 700;
    font-size: 2.7rem;
  }
`;

export default function NotFound() {
  return (
    <WrapperNotFound>
      <ContentImage>
        <ImageStandard src="/notFound.png" alt="" />
      </ContentImage>
      <Label> <span> 404 </span> Not Found</Label>
    </WrapperNotFound>
  )
}
