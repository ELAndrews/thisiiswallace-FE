import { SOLID } from "./variables";
import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: ${SOLID.OFF_WHITE};
    position: absolute;
    bottom: 0px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${SOLID.PASTEL};
    z-index: 2;
`;

export const LinkContainer = styled.div`
  width: 195px;
  display: flex;
  justify-content: space-evenly;
  padding-left: 20px;

  a {
    color: ${SOLID.BLACK};

    &:hover {
      color: ${SOLID.AQUA_BLUE};
    }
  }
`;

export const TweetContainer = styled.div`
  width: 130px;
  padding-right: 20px;
`;