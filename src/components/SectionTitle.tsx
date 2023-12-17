import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {theme} from "../styles/Theme";

type TitlePropsType = {
    text: string
    bgtext: string
}
export const SectionTitle = (props: TitlePropsType) => {
    return (
        <TitleWrapper align={"center"}>
            <BgText>{props.bgtext}</BgText>
            <Text>{props.text}</Text>
        </TitleWrapper>
    )
}

const TitleWrapper = styled(FlexWrapper)`
  margin-bottom: 100px;
`

const BgText = styled.span`
  color: #aaa;
  text-transform: uppercase;
  position: absolute;
  opacity: .1;
  letter-spacing: 10px;
  font-size: 100px;
  font-weight: 500;

  @media ${theme.media.tablet} {
    display: none;
  }
`

const Text = styled.h2`
  position: relative;
  font-size: 45px;
  letter-spacing: 20px;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    width: 70px;
    height: 5px;
    background-color: ${theme.colors.accent};
    left: 0;
    bottom: -20px;

    @media ${theme.media.tablet} {
      bottom: -5px;
    }
  }

  @media ${theme.media.tablet} {
    letter-spacing: 10px;
  }
`
    
