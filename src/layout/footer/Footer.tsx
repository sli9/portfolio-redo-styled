import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Copyright>© 2023. All rights reserved.</Copyright>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  background-color: #4f4f4f;
  text-align: center;
  padding: 20px 0;
`

const Copyright = styled.small`
  color: ${theme.colors.text};
`