import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Menu = styled.nav`

  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
`

const Link = styled.a`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  opacity: 0.7;
  color: ${theme.colors.text};

  &:hover {
    color: ${theme.colors.accent};
`

const ListItem = styled.li`
`

//Mobile menu

const BurgerMenu = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  z-index: 100;

  span, span:before, span:after {
    display: block;
    width: 30px;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 10px;

    transition: 0.5s;
  }

  span:before {
    content: "";
    display: block;
    transform: translateY(-8px) translateX(-10px);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(35deg);
      transform-origin: right bottom;
      width: 20px;
    `}
  }

  span:after {
    content: "";
    display: block;
    transform: translateY(8px) translateX(-10px);

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(-35deg);
      transform-origin: right top;
      width: 20px;
    `}
  }
`

const MobileMenuList = styled(FlexWrapper)<{ isOpen: boolean }>`

  height: 70px;
  display: flex;

  opacity: 0;

  transform-origin: right center;
  transform: translateX(20%);
  transition: 0.5s;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    opacity: 1;
    transform: translateX(0%);
  `}
  ul {
    align-items: center;
    gap: 20px;
    margin-right: 50px;
  }
`

export const S = {
    Menu,
    Link,
    ListItem,
    BurgerMenu,
    MobileMenuList,
}