import ChampionCard from '../components/cards/championcard/ChampionCard'
import Search from '../components/search/Search';
import { GalleryStandard } from '../components/UI/GaleryStyles';
import championImage from '../images/xataka.jpg'
import { useGetChampionsQuery } from '../services/lolApi';

export default function Champions() {
  const {data, error, isLoading} = useGetChampionsQuery();


  const champions = [
                      {id: 1, name:"aatrox", image: championImage},
                      {id: 2, name:"ahri", image: championImage},
                      {id: 3, name:"avatar", image: championImage}
                    ]
  return (
    <GalleryStandard>
      <Search />
      {
        data?.data.map( (champion) => <ChampionCard key={champion.id} image={champion.main_imgsrc} name={champion.name} />)
      }
    </GalleryStandard>
  )
}
