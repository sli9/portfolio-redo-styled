import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type WorkPropsType = {
    title: string
    description: string
    style: { backgroundImage: string }
    codeLink: string
    siteLink: string
}

export const Work = (props: WorkPropsType) => {
    return(
        <StyledWork>
            <Link href={`${props.siteLink}`} target='_blank' rel={"noopener noreferrer"}>
                <BgImage align={"center"} justify={"center"} style={props.style}/>
            </Link>

            <Link href={`${props.codeLink}`} target='_blank'>
                <WorkInfo>
                    <h3>{props.title}</h3>
                    <span>{props.description}</span>
                </WorkInfo>
            </Link>
        </StyledWork>
    )
}

const StyledWork = styled.section`
  min-width: 450px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  border-radius: 7px 7px 0 0;
  box-shadow: -17px -11px 28px 0px rgba(0, 0, 0, 0.31);
`

const Link = styled.a`
    `
const BgImage = styled(FlexWrapper)`
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 7px 7px 0 0;
  position: relative;
`
const WorkInfo = styled.div`
  background-color: #434242;

  & h3 {
    margin: 0;
  }
`