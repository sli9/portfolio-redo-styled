import React from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill, SkillPropsType} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"


const skillsData: SkillPropsType[] = [
    {
        iconId: "js",
        title: "JS",
        description: "ES6, Cycles, Conditionals, Event, Promise, etc.",
        viewBox: '0 0 448 512',
    },
    {
        iconId: "ts",
        title: "TS",
        description: "Primitive types, Union types, Literal types, Objects, Arrays, Functions, Interfaces, Generics",
    },
    {
        iconId: "react",
        title: "React",
        description: "Functional components, Higher Order Components, React hooks, Class-based components, etc.",
    },
    {
        iconId: "redux",
        title: "Redux",
        description: "Redux toolkit, Flux, React-Redux, Selectors, etc.",
        viewBox: '0 0 32 32',
    },
    {
        iconId: "css",
        title: "CSS",
        description: "BEM, Sass, Specificity, Cascade, Inheritance, Position, Flex, Grid, styled-components, etc.",
    },
    {
        iconId: "git",
        title: "Git",
        description: "Branching, Merging, GitHub Pages, etc.",
        viewBox: '0 0 448 512',
    },
    {
        iconId: "html",
        title: "HTML5",
        description: "Semantics, Tags, Forms, etc.",
    },
]
export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle text={"Skills"} bgtext={"What I know"}/>
                <S.GridWrapper>
                    {skillsData.map((s) =>
                        <Skill key={s.iconId} title={s.title}
                               description={s.description}
                               iconId={s.iconId}
                               viewBox={s.viewBox}
                        />
                    )}
                </S.GridWrapper>
            </Container>
        </S.Skills>
    )
}

