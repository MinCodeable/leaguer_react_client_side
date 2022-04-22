import aspectImage from'../images/xataka.jpg';
import AspectCard from '../components/cards/aspectCard/AspectCard';
import { GalleryStandard } from '../components/UI/GaleryStyles';

export default function Aspects() {
  const aspects = [
                    {id: 1, name:"aatrox", image: aspectImage},
                    {id: 2, name:"ahri", image: aspectImage},
                    {id: 3, name:"avatar", image: aspectImage}
                  ]
  return (
    <GalleryStandard>
      <div>Aspects</div>
      {
        aspects.map( (aspect) => <AspectCard key={aspect.id} image={aspect.image} name={aspect.name} />)
      }
    </GalleryStandard>
  )
}

