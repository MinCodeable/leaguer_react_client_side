import ChampionCard from '../components/cards/championcard/ChampionCard'
import { GalleryStandard } from '../components/UI/GaleryStyles';
import { useGetChampionsQuery } from '../services/lolApi';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {Default} from 'react-awesome-spinners';
import Pagination from '../components/pagination/Pagination';
import {skipToken} from '@reduxjs/toolkit/query';

const Wrapper = styled.div`
  padding: 1.1rem;
`;

export default function Champions() {
  const [sortChampion, setSortChampion] = useState("asc");
  const [searchTypeText, setSearchTypeText] = useState("");
  const [typeChamp, setTypeChamp] = useState("");
  const [difficultChamp, setDifficultChamp] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [startLoading, setStartLoading] = useState(skipToken)


  const {data: champions, error, isLoading} = useGetChampionsQuery({page: currentPage, order: sortChampion, textSearch: searchTypeText, type_champ: typeChamp, difficulty: difficultChamp });

  function updateCurrentPage(pageNumber){
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    setStartLoading(true);
  },[currentPage])

  return (
    <Wrapper>
      <GalleryStandard>
        {
          isLoading && <Default color="var(--color-primary)"/>
        }
        {
          champions?.data?.map( (champion) => <ChampionCard key={champion.id} id={champion.id} image={champion.main_imgsrc} name={champion.name} />)
        }
      </GalleryStandard>
      <Pagination currentPage = {currentPage} updateCurrentPage={updateCurrentPage} quantityElements={30} limit_per_page={5} />
    </Wrapper>
  )
}
