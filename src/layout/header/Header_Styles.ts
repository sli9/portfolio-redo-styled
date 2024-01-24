import styled from "styled-components";

const Header = styled.header<{headerBgColor: string}>`
  display: flex;
  background-color: ${props => props.headerBgColor};
  height: 70px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;

  transition: background-color 0.3s steps(20, jump-none);
`

const LogoLink = styled.a``

export const S = {
    Header,
    LogoLink,
}

