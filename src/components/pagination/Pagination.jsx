import styled from "@emotion/styled"
import { useEffect, useState, useRef} from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { MAX_PAGES_PER_SEGMENT } from "../../variableGlobales";
// import Numeration from "./Numeration";

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


export default function Pagination({limit_per_page=null, quantityElements=null, setCurrentPage, currentPage}) {
    const [numPages, setNumPages] = useState(0);
    const [rangoPagination, setRangoPagination] = useState(() => ({start: 1, end: MAX_PAGES_PER_SEGMENT}));
    const groupPaginationRef = useRef(null);

    useEffect( () => {
        if(limit_per_page && quantityElements)  setNumPages(Math.ceil(quantityElements / limit_per_page));
    },[limit_per_page, quantityElements])

    const createNumeration = (function(){
        let groupNumbersPagination = [];
        for(let cont = rangoPagination.start; cont <= rangoPagination.end && cont <= numPages ; cont++){
            groupNumbersPagination.push(
                <NumberPagination 
                    onClick={(event) => setCurrentPage(parseInt(event.target.textContent))}  
                    className={currentPage === cont ? "active" : null}
                > 
                    {cont} 
                </NumberPagination>
            )
        }
 
        return groupNumbersPagination
    })();

    function moveRight(){
        setRangoPagination({start: rangoPagination.start + MAX_PAGES_PER_SEGMENT, end: rangoPagination.end + MAX_PAGES_PER_SEGMENT})
        setCurrentPage(rangoPagination.end + 1);
    }
    
    function moveLeft(){
        setRangoPagination({start: rangoPagination.start - MAX_PAGES_PER_SEGMENT, end: rangoPagination.end - MAX_PAGES_PER_SEGMENT})
        setCurrentPage(rangoPagination.start - 1)
    }

  return (
      <WrapperPagination>
            <GroupPagination ref={groupPaginationRef}>
                { rangoPagination.start > 1 &&  <IconBsChevronLeft onClick={moveLeft}/> }
                { createNumeration.map( (pageNumeration, idx) => <div key={idx}> {pageNumeration} </div> ) }
                { rangoPagination.end < numPages && <IconBsChevronRight onClick={moveRight}/> }
            </GroupPagination>
      </WrapperPagination>
  )
}
