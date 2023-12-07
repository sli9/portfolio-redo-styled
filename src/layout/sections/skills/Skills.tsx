import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle text={"Skills"} bgtext={"What I know"}/>
                <FlexWrapper align={"start"} justify={"space-between"} wrap={"wrap"}>

                    <Skill title={'JS'}
                           description={'ES6, Cycles, Conditionals, Event, Promise, etc. '}
                           iconId={'js'}
                           viewBox={'0 0 448 512'}
                    />
                    <Skill title={'TS'}
                           description={'Primitive types, Union types, Literal types, Objects, Arrays, Functions, Interfaces, Generics'}
                           iconId={'ts'}
                    />
                    <Skill title={'React'}
                           description={'Functional components, Higher Order Components, React hooks, Class-based components, etc.'}
                           iconId={'react'}
                    />
                    <Skill title={'Redux'}
                           description={'Redux toolkit, Flux, React-Redux, Selectors, etc.'}
                           iconId={'redux'}
                           viewBox={'0 0 32 32'}
                    />
                    <Skill title={'CSS'}
                           description={'BEM, Sass, Specificity, Cascade, Inheritance, Position, Flex, Grid, styled-components, etc.'}
                           iconId={'css'}
                    />
                    <Skill title={'Git'}
                           description={'Branching, Merging, GitHub Pages, etc.'}
                           iconId={'git'}
                           viewBox={'0 0 448 512'}
                    />
                    <Skill title={'HTML5'}
                           description={'Semantics, Tags, Forms, etc.'}
                           iconId={'html'}
                    />

                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`

`