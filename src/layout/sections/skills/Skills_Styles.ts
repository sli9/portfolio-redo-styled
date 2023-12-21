import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

const Skills = styled.section``

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  grid-column-gap: 40px;
  grid-row-gap: 75px;
`

//Skill styles
const Skill = styled(FlexWrapper)``

const SkillIcon = styled(FlexWrapper)`
  width: 70px;
  height: 70px;
  align-self: flex-start;
  background-color: rgba(41, 33, 33, .85);
  border-radius: 7px;
  color: ${theme.colors.accent};
`

const DescriptionWrapper = styled.div`
  flex-basis: 260px;
`
const SkillTitle = styled.h3`
  margin-bottom: 10px;
  text-align: center;
`
const SkillText = styled.p`
  line-height: 1.8;
`

export const S = {
    Skills,
    GridWrapper,
    Skill,
    SkillIcon,
    DescriptionWrapper,
    SkillTitle,
    SkillText,
}