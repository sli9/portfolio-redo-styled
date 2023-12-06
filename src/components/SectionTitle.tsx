import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme";

type TitlePropsType = {
    text: string
    bgtext: string
}
export const SectionTitle = (props: TitlePropsType) => {
    return(
        <TitleWrapper align={"center"}>
            <BgText>{props.bgtext}</BgText>
            <Text>{props.text}</Text>
        </TitleWrapper>
    )
}

const TitleWrapper = styled(FlexWrapper)`
  margin-bottom: 50px;
`

const BgText = styled.h2`
  color: #aaa;
  text-transform: uppercase;
  position: absolute;
  opacity: .1;
  letter-spacing: 10px;
  font-size: 100px;
  font-weight: 500;
`

const Text = styled.p`
  position: relative;
  font-size: 45px;

  &::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 5px;
    background-color: ${theme.colors.accent};
    left: 0;
    bottom: -20px;
  }
`
    
