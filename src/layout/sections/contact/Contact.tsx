import React, {FormEvent, useRef, useState} from "react";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Contact_Styles"
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const isValid = () => {
        if (form.current?.checkValidity()) {
            setIsDisabled(false)
        } else setIsDisabled(true)
    }

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsDisabled(true)

        emailjs.sendForm('service_pvb3j7a', 'portfolio_iyeirg4', form.current as HTMLFormElement, 'XcHDBiyQwVq72FYRK')
            .then((result) => {
                if (result.text === 'OK') {
                    // snackRef.current?.showSnackbar({type: 'success', message: `Thanks! I'll answer as soon as possible`})
                    form.current?.reset()

                }
            }, (error) => {
                // snackRef.current?.showSnackbar({type: 'fail', message: 'Something went wrong'})
                console.log(error.text)
            });
    };

    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle text={"Contact"} bgtext={"get in touch"}/>

                <FlexWrapper align={"flex-start"} justify={"space-evenly"} gap={"50px"} wrap={"wrap"}>
                    <S.InformationBlock>
                        <h4>My phone number</h4>
                        <FlexWrapper align={"end"} gap={"10px"}>
                            <Icon iconId={"phone"} width={"20px"} height={"20px"} viewBox={" 0 0 24 24"}/>
                            <a href={'tel:+375292846599'}>+375292846599</a>
                        </FlexWrapper>

                        <h4>My email</h4>
                        <FlexWrapper align={"end"} gap={"10px"}>
                            <Icon iconId={"envelope"} width={"20px"} height={"20px"} viewBox={" 0 0 32 32"}/>
                            sil9gosys@gmail.com
                        </FlexWrapper>
                    </S.InformationBlock>

                    <S.Form name={'contactForm'}
                            onChange={isValid} ref={form}
                            onSubmit={sendEmail}
                    >
                        <S.FieldWrapper>
                            <S.Field type={"text"} id={"name"} name={"name"} required/>
                            <label htmlFor={"name"}>Your name</label>
                            <span></span>
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                            <S.Field type={"email"} id={"email"} name={"email"} required/>
                            <label htmlFor={"email"}>Your email</label>
                            <span></span>
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                            <S.Field id={"message"} name={"message"} as={"textarea"} maxLength={2000} required/>
                            <label htmlFor={"message"}>Message</label>
                            <span></span>
                        </S.FieldWrapper>
                        <S.Button disabled={isDisabled}>Send Message</S.Button>
                    </S.Form>
                </FlexWrapper>
            </Container>
        </S.Contact>
    )
}

