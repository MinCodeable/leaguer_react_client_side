import styled from "@emotion/styled"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const WrapperPagination = styled.div`
    /* border: 3px solid blue; */
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
`;

const IconBsChevronLeft = styled(BsChevronLeft)`
    cursor: pointer;
`;

const IconBsChevronRight = styled(BsChevronRight)`
    cursor: pointer;
`;

export default function Pagination() {
  return (
      <WrapperPagination>
            <IconBsChevronLeft/>
            <GroupPagination>
                <NumberPagination>1</NumberPagination>
                <NumberPagination>2</NumberPagination>
                <NumberPagination>3</NumberPagination>
                <NumberPagination>4</NumberPagination>
                <NumberPagination>5</NumberPagination>
            </GroupPagination>
            <IconBsChevronRight/>
      </WrapperPagination>
  )
}
