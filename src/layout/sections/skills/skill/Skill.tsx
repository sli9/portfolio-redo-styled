import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    title: string
    description: string
    iconId: string
    viewBox?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill align={"center"} justify={"space-between"} wrap={"wrap"} gap={"15px"}>
            <StyledSkillIcon align={"center"} justify={"center"}>
                <Icon iconId={props.iconId} viewBox={props.viewBox}/>
            </StyledSkillIcon>
            <DescriptionWrapper>
                <StyledSkillTitle>{props.title}</StyledSkillTitle>
                <StyledSkillText>{props.description}</StyledSkillText>
            </DescriptionWrapper>
        </StyledSkill>
    )
}

const StyledSkill = styled(FlexWrapper)`
  width: 350px;
  margin: 50px 0;
`

const StyledSkillIcon = styled(FlexWrapper)`
  width: 70px;
  height: 70px;
  align-self: flex-start;
  background-color: rgba(41, 33, 33, .85);
  border-radius: 7px;
  color: ${theme.colors.accent};
`

const DescriptionWrapper = styled.div`
  flex-basis: 260px;
  font-family: Poppins, sans-serif;
`
const StyledSkillTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`
const StyledSkillText = styled.p`
  line-height: 1.8;
`