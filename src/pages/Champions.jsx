import ChampionCard from '../components/cards/championcard/ChampionCard'
import { GalleryStandard } from '../components/UI/GaleryStyles';
import championImage from '../images/xataka.jpg'



export default function Champions() {
  const champions = [
                      {id: 1, name:"aatrox", image: championImage},
                      {id: 2, name:"ahri", image: championImage},
                      {id: 3, name:"avatar", image: championImage}
                    ]
  return (
    <GalleryStandard>
      {
        champions.map( (champion) => <ChampionCard key={champion.id} image={champion.image} name={champion.name} />)
      }
    </GalleryStandard>
  )
}
