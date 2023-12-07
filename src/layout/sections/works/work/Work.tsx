import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type WorkPropsType = {
    title: string
    description: string
    // style: { backgroundImage: string }
    codeLink: string
    siteLink: string
    srcImage: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Link href={`${props.siteLink}`} target='_blank' rel={"noopener noreferrer"}>
                {/*<BgImage align={"center"} justify={"center"} style={props.style}/>*/}
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

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      transition: .5s ease-in-out;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: fill;
  border-radius: 7px 7px 0 0;
`
// const BgImage = styled(FlexWrapper)`
//   height: 300px;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   border-radius: 7px 7px 0 0;
// `
const WorkInfo = styled.div`
  background-color: ${theme.colors.firstBg};
  border-radius: 0 0 7px 7px;
  padding: 25px 20px;
`

const WorkInfoTitle = styled.h3`
  margin-bottom: 20px;
`

const Text = styled.p`

`