import styled from "styled-components";

export const Footer = () => {
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
  color: #aaa;
`