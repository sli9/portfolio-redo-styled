import React from "react";
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles"

export type SkillPropsType = {
    title: string
    description: string
    iconId: string
    viewBox?: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <S.Skill align={"center"} justify={"center"} gap={"15px"}>
            <S.SkillIcon align={"center"} justify={"center"}>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
            </S.SkillIcon>
            <S.DescriptionWrapper>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </S.DescriptionWrapper>
        </S.Skill>
    )
}

