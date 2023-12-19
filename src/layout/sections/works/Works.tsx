import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import TodoImage from "../../../assets/images/forWorks/todo-list.jpg"
import socialPicture from "../../../assets/images/forWorks/social_media_.jpg"
import {Container} from "../../../components/Container";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle text={'Projects'} bgtext={'My works'}/>

                <FlexWrapper justify={"center"} align={"flex-start"} wrap={"wrap"} gap={"30px"}>
                    <Work srcImage={TodoImage}
                          codeLink={'https://github.com/sli9/Todolist'}
                          siteLink={'https://sli9.github.io/Todolist'}
                          description={'React, Redux toolkit, TS, RestAPI, Thunk, Material UI, Unit Tests, formik'}
                          title={'TodoList'}/>
                    <Work srcImage={socialPicture}
                          codeLink={'https://github.com/sli9/Setka'}
                          siteLink={'https://sli9.github.io/Setka'}
                          description={'React, Redux, RestAPI, TS, Thunk, Ant design, Redux Form'}
                          title={'Social network'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`

`