import aspectImage from'../images/xataka.jpg';
import AspectCard from '../components/cards/aspectCard/AspectCard';
import { GalleryStandard } from '../components/UI/GaleryStyles';
import { useGetAspectsQuery } from '../services/lolApi';

export default function Aspects() {
  const {data, error, isLoading} = useGetAspectsQuery();

  return (
    <GalleryStandard>
      <div>Aspects</div>
      {
        data?.data.map( (aspect) => <AspectCard key={aspect.id} image={aspect.imgsrc} name={aspect.name} />)
      }
    </GalleryStandard>
  )
}

