import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work, WorkPropsType} from "./work/Work";
import TodoImage from "../../../assets/images/forWorks/todo-list.jpg"
import socialPicture from "../../../assets/images/forWorks/social_media_.jpg"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

const worksData: WorkPropsType[] = [
    {
        title: 'TodoList',
        srcImage: TodoImage,
        codeLink: 'https://github.com/sli9/Todolist',
        siteLink: 'https://sli9.github.io/Todolist',
        description: 'React, Redux toolkit, TS, RestAPI, Thunk, Material UI, Unit Tests, formik'
    },
    {
        title: 'Social network',
        srcImage: socialPicture,
        codeLink: 'https://github.com/sli9/Setka',
        siteLink: 'https://sli9.github.io/Setka',
        description: 'React, Redux, RestAPI, TS, Thunk, Ant design, Redux Form'
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works id={'projects'}>
            <Container>
                <SectionTitle text={'Projects'} bgtext={'My works'}/>

                <FlexWrapper justify={"center"} align={"flex-start"} wrap={"wrap"} gap={"30px"}>
                    {worksData.map((w) =>
                        <Work key={w.title} srcImage={w.srcImage}
                              codeLink={w.codeLink}
                              siteLink={w.siteLink}
                              description={w.description}
                              title={w.title}/>
                    )}
                </FlexWrapper>
            </Container>
        </S.Works>
    )
}

