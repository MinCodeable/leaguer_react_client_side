import styled from "@emotion/styled"
import { ImageStandard } from "../components/UI/ImageStyles";

const WrapperNotFound = styled.div`
  margin-top: 5rem;
`;

export default function NotFound() {
  return (
    <WrapperNotFound>
      <ImageStandard src="/notFound.png" alt="" />
    </WrapperNotFound>
  )
}
