import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Menu = (props: { items: string[] }) => {
    return (
        <StyledMenu>
            <ul>
                {props.items.map((item, index) => (
                    <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                ))}
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
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



