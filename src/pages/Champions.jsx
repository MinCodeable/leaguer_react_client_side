import ChampionCard from '../components/cards/championcard/ChampionCard'
import { GalleryStandard } from '../components/UI/GaleryStyles';
import { useGetChampionsQuery } from '../services/lolApi';
import SearchChampion from '../components/search/searchchampion/SearchChampion'
import { useState } from 'react';
import styled from '@emotion/styled';
import Pagination from '../components/pagination/Pagination';
import {Default} from 'react-awesome-spinners';

const Wrapper = styled.div`
  padding: 2em 1.1em;
`;

export default function Champions() {
  const [sortChampion, setSortChampion] = useState("asc");
  const [searchTypeText, setSearchTypeText] = useState("");
  const [typeChamp, setTypeChamp] = useState("");
  const [difficultChamp, setDifficultChamp] = useState("");

  const {data: champions, error, isLoading} = useGetChampionsQuery({page: 1, order: sortChampion, textSearch: searchTypeText, type_champ: typeChamp, difficulty: difficultChamp });
  
  return (
    <Wrapper>
      {/* <SearchChampion setSortChampion={setSortChampion} setSearchTypeText={setSearchTypeText} setTypeChamp={setTypeChamp} setDifficultChamp={setDifficultChamp}/> */}
      <GalleryStandard>
        {
          isLoading && <Default color="var(--color-primary)"/>
        }
        {
          champions?.data.map( (champion) => <ChampionCard key={champion.id} image={champion.main_imgsrc} name={champion.name} />)
        }
      </GalleryStandard>
      <Pagination></Pagination>
    </Wrapper>
  )
}
