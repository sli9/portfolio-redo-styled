import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle text={"Contact"} bgtext={"get in touch"}/>

            <FlexWrapper align={"center"} justify={"center"} gap={"50px"}>
                <DescriptionBlock>

                    <h3>Call me</h3>
                    <span>
                            <i className="lni lni-phone"></i>
                            <a href={'tel:+375292846599'}>+375292846599</a>
                        </span>

                    <h3>Write me by mail</h3>
                    <span>
                            <i className="lni lni-envelope"></i>
                            sil9gosys@gmail.com
                        </span>

                </DescriptionBlock>

                <StyledForm>
                    <Field/>
                    <Field/>
                    <Field as={"textarea"}/>
                    <Button type={"submit"}>Send Message</Button>
                </StyledForm>
            </FlexWrapper>
        </StyledContact>
    )
}

const StyledContact = styled.section`
  min-height: 100vh;
`

const StyledForm = styled.form`
  max-width: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Field = styled.input`

`

const DescriptionBlock = styled.div`
  max-width: 40%;
`

const Button = styled.button`
    color: unset;
    `