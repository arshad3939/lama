import styled, { css, keyframes } from "styled-components";
import SearchIcon from "./icons/search";
import ArrowRightIcon from "./icons/arrowRight";
import { DeviceSize } from "./Responsive";

export const Containers = styled.div`
  position: relative;
  width: 42px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #393e46;
  padding: 5px;
  line-height: 30px;
  /* background: #222831; */
  transition: all 0.5s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 15%;
      /* -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74); */
      border: none;

      @media ${DeviceSize.mobile} {
        width: 80%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: -5px;
  left: 0px;
  width: 100%;
  line-height: 30px;
  outline: 0;
  border: 1px solid #00adb5;
  font-size: 16px;
  border-radius: 8px;
  padding: 5px 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: #00adb5;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;
