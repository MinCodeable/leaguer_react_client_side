import ChampionCard from '../components/cards/championcard/ChampionCard'
import { GalleryStandard } from '../components/UI/GaleryStyles';
import { useGetChampionsQuery } from '../services/lolApi';
import { useState } from 'react';
import styled from '@emotion/styled';
// import {Default} from 'react-awesome-spinners';
import Paginat from '../components/pagination/pagint';

const Wrapper = styled.div`
  padding: 1.1rem;
`;

export default function Champions() {
  const [sortChampion, setSortChampion] = useState("asc");
  const [searchTypeText, setSearchTypeText] = useState("");
  const [typeChamp, setTypeChamp] = useState("");
  const [difficultChamp, setDifficultChamp] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  const {data: champions, error, isLoading} = useGetChampionsQuery({page: currentPage, order: sortChampion, textSearch: searchTypeText, type_champ: typeChamp, difficulty: difficultChamp });

  return (
    <Wrapper>
      <GalleryStandard>
        {
          // isLoading && <Default color="var(--color-primary)"/>
        }
        {
          champions?.data?.map( (champion) => <ChampionCard key={champion.id} id={champion.id} image={champion.main_imgsrc} name={champion.name} />)
        }
      </GalleryStandard>
      <Paginat currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
    </Wrapper>
  )
}
