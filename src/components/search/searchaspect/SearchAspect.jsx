import styled from '@emotion/styled'
import React from 'react'
import { useGetAspectsNamesQuery } from '../../../services/lolApi';
import { CloseName, ContentFilter, ContentFilterClose, ContentSelect, ContentWrapper, LabelContent, WrapperSearch } from '../../UI/FilterStyles';
import { IconIoIosCloseCircleOutline } from '../../UI/IconCloseStyle';

export default function SearchAspect({asignarSearchChampion}) {

    const {data: allAspects} = useGetAspectsNamesQuery();
    console.log(allAspects)

    function handleChange(event){
        asignarSearchChampion(event.target.value);
    }

  return (
      <WrapperSearch>
        <ContentWrapper>
             <ContentFilterClose>
                <CloseName> FILTRAR </CloseName>
                <IconIoIosCloseCircleOutline/>
            </ContentFilterClose>
            <ContentFilter>
                <LabelContent> Filtrar por aspecto: </LabelContent>
                <ContentSelect name="" onChange={handleChange}>
                    <option value=""> Todos </option>
                    {
                        allAspects?.map((name, idx) => <option key={idx} value={`${name}`}> {name} </option>)
                    }
                </ContentSelect>
            </ContentFilter>
        </ContentWrapper>
      </WrapperSearch>
  )
}
