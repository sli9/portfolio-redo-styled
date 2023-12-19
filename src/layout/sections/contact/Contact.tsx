import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import {useRef, useState} from "react";

export const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const isValid = () => {
        if(form.current?.checkValidity()) {
            setIsDisabled(false)
        } else setIsDisabled(true)
    }

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

                    <StyledForm onChange={isValid} ref={form}>
                        <FieldWrapper>
                            <Field type={"text"} id={"name"} required/>
                            <label htmlFor={"name"}>Your name</label>
                            <span></span>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field type={"email"} id={"email"} required/>
                            <label htmlFor={"email"}>Your email</label>
                            <span></span>
                        </FieldWrapper>
                        <FieldWrapper>
                            <Field id={"message"} as={"textarea"} maxLength={2000} required/>
                            <label htmlFor={"message"}>Message</label>
                            <span></span>
                        </FieldWrapper>
                        <Button disabled={isDisabled}>Send Message</Button>
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

  div:has(textarea) {
    height: 100px;
  }
`

const Field = styled.input`
  border: none;
  background: none;
  outline: none;
  color: ${theme.colors.font};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:focus + label {
    top: -24px;
    left: 0;
    z-index: 10;
    color: ${theme.colors.accent};
  }

  //remove background of autofill
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000000s ease-in-out 0s,
    color 5000000s ease-in-out 0s;
  }
`

const FieldWrapper = styled.div`
  position: relative;

  height: 38px;
  margin-bottom: 32px;
  border-bottom: 2px solid ${theme.colors.text};

  label {
    position: absolute;
    top: -15px;

    font-family: Poppins, sans-serif;
    font-size: 14px;

    transition: top 0.3s, color 0.3s;
  }

  span {
    position: absolute;
    bottom: -2px;
    left: 0;
    content: '';
    height: 2px;
    width: 0;
    transition: 0.7s;
    background-color: ${theme.colors.accent};
  }

  textarea {
    resize: none;
    padding: 10px 10px 10px 0;
  }

  ${Field}:valid ~ span {
    width: 100%;
  }

`

const InformationBlock = styled.div`
  max-width: 40%;

  & div:nth-child(2) {
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition-duration: 0.4s;
  transition-property: box-shadow, transform;

  &:hover:not(:active) {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
  }


  &:disabled,
  &:hover:disabled {
    opacity: 0.3;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: none;
  }
`