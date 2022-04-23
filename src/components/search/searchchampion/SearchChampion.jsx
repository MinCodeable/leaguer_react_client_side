import React from 'react'
import { CloseName, ContentFilter, ContentFilterClose, ContentInput, ContentSelect, ContentWrapper, Label, LabelContent, WrapperSearch } from '../../UI/FilterStyles';
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
                <LabelContent htmlFor=""> Ordenar: </LabelContent>
                <ContentSelect name="" id="" onChange={handleSort}>
                    <option value="asc"> Ordenar de AZ</option>
                    <option value="desc"> Ordenar de ZA</option>
                </ContentSelect>
            </ContentFilter>

            <ContentFilter >
                <LabelContent htmlFor=""> Buscar: </LabelContent>
                <ContentInput type="text" onChange={handleTypeText} />
            </ContentFilter>
            
            <ContentFilter>
                <LabelContent htmlFor=""> Tipo de campeones: </LabelContent>
                <ContentSelect name="" id="" onChange={handleType}>
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
                <LabelContent htmlFor=""> Dificultades: </LabelContent>
                <ContentSelect name="" id="" onChange={handleDifficult}>
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
