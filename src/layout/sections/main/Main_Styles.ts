import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import mainBg from "../../../assets/images/forMain/mainBackground.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {flexFont} from "../../../styles/Common";

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  position: relative;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
}
`

const MainFlexWrapper = styled(FlexWrapper)`
  backdrop-filter: brightness(0.7);
  
  @media ${theme.media.tablet} {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 35px;
  }
`

const GreetingText = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    ${flexFont({weight: 600, color: theme.colors.font, lineHeight: 1.5, Fmax: 50, Fmin: 36})}
  }
`

const ButtonCV = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top: 50px;

  a {
    color: ${theme.colors.accent};
    border: ${theme.colors.accent} solid 2px;
    border-radius: 90px;
    padding: 13px 42px;
    transition: all 0.5s ease;

    &:hover {
      background-color: ${theme.colors.accent};
      color: ${theme.colors.font};
    }

    &:focus {
      background-color: ${theme.colors.focus};
      border-color: ${theme.colors.focus};
      color: ${theme.colors.font};
    }
  }
`

const Photo = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 5px;
`

const PhotoWrapper = styled.div`
  position: relative;
  max-height: 400px;
  max-width: 320px;
  margin-right: 25px;

  &::after {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    border-bottom: 10px solid ${theme.colors.accent};
    border-right: 10px solid ${theme.colors.accent};
    border-bottom-right-radius: 10px;
    right: -30px;
    bottom: -40px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    border-top: 10px solid ${theme.colors.accent};
    border-top-left-radius: 10px;
    border-left: 10px solid ${theme.colors.accent};
    left: -30px;
    top: -40px;
  }
  

  @media ${theme.media.tablet} {
    max-height: 300px;
    max-width: 300px;
    border: 15px solid ${theme.colors.firstBg};
    border-radius: 50%;
    box-shadow: 5px 7px 25px rgb(0 0 0 / 50%);
    overflow: hidden;
    margin-right: 0;
    
  }
  
  @media ${theme.media.mobile} {
    max-height: 200px;
    max-width: 200px;
    border: 10px solid ${theme.colors.firstBg};
  }
`

export const S = {
    Main,
    MainFlexWrapper,
    GreetingText,
    ButtonCV,
    Photo,
    PhotoWrapper,
}