import AspectCard from '../components/cards/aspectCard/AspectCard';
import { GalleryStandard } from '../components/UI/GaleryStyles';
import { useGetAspectsQuery } from '../services/lolApi';
import {useState} from 'react'
import styled from '@emotion/styled';
import Pagination from '../components/pagination/Pagination';
import {Default} from 'react-awesome-spinners';




const WrapperCard = styled.div`
  /* border: 4px solid greenyellow; */
  padding: 2em 1.1em;
`;

export default function Aspects() {
  const [searchChampion, setSearchChampion] = useState("");
  const {data: aspects, error, isLoading} = useGetAspectsQuery({nameChampion: searchChampion});

  return (
    <WrapperCard>
      {/* <SearchAspect asignarSearchChampion={setSearchChampion} /> */}
      <GalleryStandard>
        {
          isLoading && <Default color="var(--color-primary)"/>
        }
        {
          aspects?.data.map( (aspect,idx) => <AspectCard key={idx} champion_id={aspect.champion_id} image={aspect.imgsrc} name={aspect.name} />)
        }
      </GalleryStandard>
      <Pagination />
    </WrapperCard>
  )
}
