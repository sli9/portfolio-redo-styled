import React from "react";
import MainPhoto from "../../../assets/images/forMain/mainPhoto.jpg"
import {S} from "./Main_Styles"
import {Container} from "../../../components/Container";
import MyCV from "../../../assets/images/documents/Mycv.pdf"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.MainFlexWrapper justify={"space-between"} align={"center"}>
                    <S.GreetingText>
                        <span>Hello, I'm</span>
                        <h2>Andrey Selilo</h2>
                        <h2>Frontend-developer</h2>
                        <S.ButtonCV>
                            <a href={MyCV} download={'Andrey_CV'} target="_blank" rel={'noopener noreferrer'}>Download
                                CV</a>
                        </S.ButtonCV>
                    </S.GreetingText>
                    <S.PhotoWrapper>
                        <S.Photo src={MainPhoto} alt={'photo'}/>
                    </S.PhotoWrapper>
                </S.MainFlexWrapper>
            </Container>
        </S.Main>
    )
}

