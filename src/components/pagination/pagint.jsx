import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { MAX_PAGES_PER_SEGMENT } from '../../variableGlobales';

const WrapperPagination = styled.div`
    // border: 3px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin-top: 1.5em;
    color: var(--text--primary-color);
    padding: .8rem 0;
`;

const GroupPagination = styled(WrapperPagination)`
    margin-top: 0;
    gap: 1.5em;
`;

const NumberPagination = styled.div`
    border: 1px solid var(--color-primary);
    font-size: clamp(1rem, 2vw, 1.25rem);
    padding: .2em .5em;
    cursor: pointer;
    &:hover{
        background-color: var(--color-primary);
    }
    &.active{
        /* background-color: var(--golden); */
        background-color: var(--color-primary);
    }
`;

const IconBsChevronLeft = styled(BsChevronLeft)`
    cursor: pointer;
`;

const IconBsChevronRight = styled(BsChevronRight)`
    cursor: pointer;
`;


export default function Paginat({quantityChampions = 30, quantityChampiosPerPages = 5, currentPage = 1, setCurrentPage}) {
    
    const [rangoPagination, setRangoPagination] = useState(() => ({start: 1, end: MAX_PAGES_PER_SEGMENT }));

    let quantityPages;
    function createPages(){
        quantityPages = Math.ceil(quantityChampions / quantityChampiosPerPages)
        let groupPages = [] ;
        for(let idx = rangoPagination.start; idx <= rangoPagination.end; idx++){
            groupPages.push(idx)
        }
        return groupPages;
    }

    function moveRight(){
        setRangoPagination({start: rangoPagination.end + 1, end: (rangoPagination.end + MAX_PAGES_PER_SEGMENT < quantityPages ? (rangoPagination.end + MAX_PAGES_PER_SEGMENT) : quantityPages )})
        setCurrentPage(rangoPagination.end + 1)
    }

    function moveLeft(){
        setRangoPagination({start: (rangoPagination.start- (rangoPagination.start - 1)), end: rangoPagination.start - 1})
        setCurrentPage(rangoPagination.start - 1)
    }
    

  return (
    <WrapperPagination>
        { rangoPagination.start > 1 && <IconBsChevronLeft onClick={moveLeft}/> }
        <GroupPagination>
            {
                createPages().map( (numPage, idx) => (<div key={idx}><NumberPagination className={numPage == currentPage ? 'active':''} onClick={(event) => setCurrentPage(event.target.textContent)}> {numPage} </NumberPagination> </div>) )
            }
        </GroupPagination>
        {rangoPagination.end < quantityPages && <IconBsChevronRight onClick={moveRight}/>}
    </WrapperPagination>
  )
}
