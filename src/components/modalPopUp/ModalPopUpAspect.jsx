
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import {ImageStandard} from "../UI/ImageStyles"

const Dialog = styled.dialog`
  margin: auto;
  width: clamp(15rem, 10rem + 90vw, 50rem);
  position: relative;
  border: none;
  display: flex;
  top: 25%;
  z-index: 50;
  background-color: black;

  div{
    text-align: right;
    color: white;
    background-color: #000000;
    border-radius: 50%;
    padding: .5rem;
    margin: 0;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 3px;
    right: 3px;
    cursor: pointer;
    position: absolute;
  }

  &::backdrop{
    background-color: #000000;
    opacity: .82;
  }

`;

export default function ModalPopUpAspect({ modalImage, setShowModal}) {
  const modalRef = useRef(null);

  useEffect(() =>{
    modalRef.current.removeAttribute("open");
    modalRef.current.showModal();
  },[modalRef])

  return (
    <Dialog ref={modalRef} >
        <div onClick={() => setShowModal(false)}>X</div>
        {
          modalImage &&  <ImageStandard src={modalImage } alt=""/> 
        }
    </Dialog>  
  )
}
