import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Works = styled.section``

//Work styles
const Link = styled.a``

const Work = styled.div`
  max-width: 450px;
  margin: 0 10px;
  border-radius: 7px 7px 0 0;
  box-shadow: -17px -11px 28px 0px rgba(0, 0, 0, 0.31);

  ${Link}:first-child {
    line-height: 0
  }
`

const Button = styled.button`
  display: none;
  color: ${theme.colors.font};
  background-color: ${theme.colors.accent};
  border: ${theme.colors.accent} solid 2px;
  border-radius: 90px;
  padding: 10px 20px;
  z-index: 10;
  margin-top: 20px;

  &:focus {
    background-color: ${theme.colors.focus};
    border-color: ${theme.colors.focus};
  }

  @media ${theme.media.tablet} {
    display: block;
  }
`

const ImageWrapper = styled(FlexWrapper)`
  position: relative;
  border-radius: 7px 7px 0 0;

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;

    content: "view project";
    font-size: 50px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 7px 7px 0 0;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  @media ${theme.media.tablet} {
    &:before {
      content: "";
      opacity: 1;
    }

    & ${Button} {
      position: absolute;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
  border-radius: 7px 7px 0 0;
`

const WorkInfo = styled.div`
  background-color: ${theme.colors.firstBg};
  border-radius: 0 0 7px 7px;
  padding: 25px 20px;

  position: relative;

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;

    content: "view code";
    font-size: 50px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 7px 7px;

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    @media ${theme.media.tablet} {
      display: none;
    }
  }

  &:hover {
    &::before {
      opacity: 1;
      cursor: pointer;
    }
  }
`

const WorkInfoTitle = styled.h3`
  margin-bottom: 20px;
`

const Text = styled.p``


export const S = {
    Works,
    Link,
    Work,
    Button,
    ImageWrapper,
    Image,
    WorkInfo,
    WorkInfoTitle,
    Text,
}