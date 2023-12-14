import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {useState} from "react";


export const MobileMenu = (props: { items: string[] }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <StyledMobileMenu>
            <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </BurgerMenu>

            <MobileMenuList isOpen={isOpen}>
                <ul>
                    {props.items.map((item, index) => (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    ))}
                </ul>
            </MobileMenuList>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;
  
  @media ${theme.media.mobile} {
    display: block;
  }
`

const BurgerMenu =styled.button<{isOpen: boolean}>`
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

const MobileMenuList =styled.div<{isOpen: boolean}>`
 
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
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin-right: 50px;
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



