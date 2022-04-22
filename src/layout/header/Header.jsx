import styled from "@emotion/styled";
import Navbar from "../../components/navbar/Navbar";
import { ImageStandard, ImageWrapperStandard } from "../../components/UI/ImageStyles";
import logoLol from "../../images/leagueoflegends.png"


const WrapperHeader = styled.div`

  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--color-primary);
  padding: 1rem;
  .logo{
    width: 160px;
  }
`;

export default function Header() {
  return (
      <WrapperHeader>
        <ImageWrapperStandard className="logo">
          <ImageStandard src={logoLol} alt="logo" />
        </ImageWrapperStandard>
        <Navbar/>
      </WrapperHeader>
  )
}
