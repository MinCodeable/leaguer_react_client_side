import React from 'react'
import { CloseName, ContentFilter, ContentFilterClose, ContentInput, ContentSelect, ContentWrapper, LabelContent, WrapperSearch } from '../../UI/FilterStyles';
import { IconIoIosCloseCircleOutline } from '../../UI/IconCloseStyle';

export default function SearchChampion({setSortChampion, setSearchTypeText, setTypeChamp, setDifficultChamp}) {
    
    const handleSort= (event) => setSortChampion(event.target.value);
    const handleTypeText= (event) => setSearchTypeText(event.target.value);
    const handleType= (event) => setTypeChamp(event.target.value);
    const handleDifficult= (event) => setDifficultChamp(event.target.value);
    
  return (
      <WrapperSearch >
        <ContentWrapper>
            <ContentFilterClose>
                <CloseName> FILTRAR </CloseName>
                <IconIoIosCloseCircleOutline/>
            </ContentFilterClose>

            <ContentFilter>
                <LabelContent htmlFor="champions-sort"> Ordenar: </LabelContent>
                <ContentSelect name="" id="champions-sort" onChange={handleSort}>
                    <option value="asc"> Ordenar de AZ</option>
                    <option value="desc"> Ordenar de ZA</option>
                </ContentSelect>
            </ContentFilter>

            <ContentFilter >
                <LabelContent htmlFor="champions-search"> Buscar: </LabelContent>
                <ContentInput type="text" onChange={handleTypeText} id="champions-search"/>
            </ContentFilter>
            
            <ContentFilter>
                <LabelContent htmlFor="champions-type"> Tipo de campeones: </LabelContent>
                <ContentSelect name="" id="champions-type" onChange={handleType}>
                    <option value=""> Todos </option>
                    <option value="asesino"> Asesino </option>
                    <option value="luchador"> Luchador </option>
                    <option value="mago"> Mago </option>
                    <option value="tirador"> Tirador </option>
                    <option value="soporte"> Soporte </option>
                    <option value="tanque"> Tanque </option>
                </ContentSelect>
            </ContentFilter>
            <ContentFilter>
                <LabelContent htmlFor="champions-difficult"> Dificultades: </LabelContent>
                <ContentSelect name="" id="champions-difficult" onChange={handleDifficult}>
                    <option value=""> Todos </option>
                    <option value="baja">Baja</option>
                    <option value="moderada">Moderada</option>
                    <option value="alta">Alta</option>
                </ContentSelect>
            </ContentFilter>
        </ContentWrapper>
      </WrapperSearch>
  )
}
