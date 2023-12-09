import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type WorkPropsType = {
    title: string
    description: string
    codeLink: string
    siteLink: string
    srcImage: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Link href={`${props.siteLink}`} target='_blank' rel={"noopener noreferrer"}>
                <ImageWrapper>
                    <Image src={props.srcImage} alt={"image"}/>
                </ImageWrapper>
            </Link>

            <Link href={`${props.codeLink}`} target='_blank' rel={"noopener noreferrer"}>
                <WorkInfo>
                    <WorkInfoTitle>{props.title}</WorkInfoTitle>
                    <Text>{props.description}</Text>
                </WorkInfo>
            </Link>
        </StyledWork>
    )
}

const Link = styled.a`

`

const StyledWork = styled.div`
  max-width: 450px;
  margin: 0 10px;
  border-radius: 7px 7px 0 0;
  box-shadow: -17px -11px 28px 0px rgba(0, 0, 0, 0.31);

  ${Link}:first-child {
    line-height: 0
  }
`


const ImageWrapper = styled.div`
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
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`

const WorkInfoTitle = styled.h3`
  margin-bottom: 20px;
`

const Text = styled.p`

`