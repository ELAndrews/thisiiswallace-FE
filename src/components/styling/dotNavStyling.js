import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables";

export const DotContainer = styled.div`
    height: 150px;
    position: absolute;
    top: 40%;
    right: 15px;
    text-align: center;
`;

export const NoDot = styled.div`
width: 10px;
`;

export const Dot = styled.li`
    list-style-type: none;
`;

export const DotLink = styled.a`
  height: 10px;
    width: 10px;
`;

export const Spot = styled.div`
    height: 6px;
    width: 6px;
    margin: 12px 0px;
    border: 1px solid ${SOLID.PALE_BLUE};
    border-radius: 50%;

    &:hover {
        background-color: ${SOLID.AQUA_BLUE};
        border: 1px solid ${SOLID.AQUA_BLUE};
        transform: scale(1.4)
    }
    &.active {
        background-color: #FFF;
        border: 1px solid ${SOLID.GREY};
        transform: scale(1.4)
    } 
`;