import AspectCard from '../components/cards/aspectCard/AspectCard';
import { GalleryStandard } from '../components/UI/GaleryStyles';
import { useGetAspectsQuery } from '../services/lolApi';
import styled from '@emotion/styled';
import Pagination from '../components/pagination/Pagination';
// import {Default} from 'react-awesome-spinners';
import { LIMIT_ASPECTS_PER_PAGE } from '../variableGlobales';
import ModalPopUpAspect from '../components/modalPopUp/ModalPopUpAspect';
import { useState } from 'react';


const WrapperCard = styled.div`
  padding: 2em 1.1em;
`;

export default function Aspects() {
  const [searchChampion, setSearchChampion] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {data: aspects, error, isLoading} = useGetAspectsQuery({page: currentPage, nameChampion: searchChampion});
  const [modalImage, setModalImage] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  function showModalImage(img){
    setShowModal(true);
    setModalImage(img);
  }

  return (
    <WrapperCard>
      <GalleryStandard>
        {
          // isLoading && <Default color="var(--color-primary)"/>
        }
        {
          aspects?.data?.map( (aspect,idx) => <div key={idx} onClick={ () => showModalImage(aspect.imgsrc) }><AspectCard champion_id={aspect.champion_id} image={aspect.imgsrc} name={aspect.name} /> </div> )
        }
      </GalleryStandard>
      {
        (showModal) ? <ModalPopUpAspect modalImage={modalImage} setShowModal={setShowModal}/> : null
      }
      
      <Pagination limit_per_page={LIMIT_ASPECTS_PER_PAGE} quantityElements={aspects?.quantity} setCurrentPage={setCurrentPage} currentPage={currentPage}  />
    </WrapperCard>
  )
}
