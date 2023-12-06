import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import TodoImage from "../../../assets/images/forWorks/todo-list.jpg"
import socialPicture from "../../../assets/images/forWorks/social_media_.jpg"

const todoImg = {
    backgroundImage: `url(${TodoImage})`
}
const socialImg = {
    backgroundImage: `url(${socialPicture})`
}

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle text={'Projects'} bgtext={'My works'}/>

            <FlexWrapper justify={"space-around"}>
                <Work style={todoImg}
                      codeLink={'#'}
                      siteLink={'#'}
                      description={'dsdsdsf dsf'}
                      title={'TodoList'}/>
                <Work style={socialImg}
                      codeLink={'#'}
                      siteLink={'#'}
                      description={'dsdsdsf dsf'}
                      title={'Social network'}/>
            </FlexWrapper>

        </StyledWorks>
    )
}

const StyledWorks = styled.section`
  min-height: 100vh;
`