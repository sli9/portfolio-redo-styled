import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ['Home', 'Skills', 'Projects', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Icon iconId={'logo'} viewBox={'0 0 100 100'} fill={"#111418"}/>
                    <Menu items={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  display: flex;
  //background-color: transparent;
  background-color: #111418;
  height: 70px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`

