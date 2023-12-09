import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle text={"Contact"} bgtext={"get in touch"}/>

                <FlexWrapper align={"flex-start"} justify={"space-evenly"} gap={"50px"}>
                    <InformationBlock>
                        <h4>Call me</h4>
                        <FlexWrapper align={"end"} gap={"10px"}>
                            <Icon iconId={"phone"} width={"20px"} height={"20px"} viewBox={" 0 0 24 24"}/>
                            <a href={'tel:+375292846599'}>+375292846599</a>
                        </FlexWrapper>

                        <h4>Write me by mail</h4>
                        <FlexWrapper align={"end"} gap={"10px"}>
                            <Icon iconId={"envelope"} width={"20px"} height={"20px"} viewBox={" 0 0 32 32"}/>
                            sil9gosys@gmail.com
                        </FlexWrapper>
                    </InformationBlock>

                    <StyledForm>
                        <Field/>
                        <Field/>
                        <Field as={"textarea"}/>
                        <Button type={"submit"}>Send Message</Button>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`

`

const StyledForm = styled.form`
  max-width: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  textarea {
    resize: none;
  }
`

const Field = styled.input`

`

const InformationBlock = styled.div`
  max-width: 40%;
  
  div:nth-child(2) {
    margin-bottom: 30px;
  }
  div:not(h4) {
    font-family: Poppins, sans-serif;
  }

  h4 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`

const Button = styled.button`
  font-family: "Oswald", sans-serif;
  font-size: 18px;
  color: ${theme.colors.text};

  width: fit-content;
  padding: 6px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition-duration: 0.4s;
  transition-property: box-shadow, transform;

  &:hover:not(:active) {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }


  //&:disabled {
  //  opacity: 0.4;
  //  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  //}
`