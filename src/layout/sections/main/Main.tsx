import React from "react";
import MainPhoto from "../../../assets/images/forMain/mainPhoto.jpg"
import {S} from "./Main_Styles"
import {Container} from "../../../components/Container";
import MyCV from "../../../assets/images/documents/Mycv.pdf"
import Typewriter from 'typewriter-effect';
import ReactParallaxTilt from "react-parallax-tilt";

export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <S.MainFlexWrapper justify={"space-between"} align={"center"}>
                    <S.GreetingText>
                        <span>Hello, I'm</span>
                        <h2>
                            <p>Frontend-developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Andrey Selilo', 'Frontend-developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <S.ButtonCV>
                            <a href={MyCV} download={'Andrey_CV'} target="_blank" rel={'noopener noreferrer'}>Download
                                CV</a>
                        </S.ButtonCV>
                    </S.GreetingText>
                    <S.PhotoWrapper>
                        <ReactParallaxTilt
                        scale={1.1}
                        transitionSpeed={2500}
                        >
                            <S.Photo src={MainPhoto} alt={'photo'}/>
                        </ReactParallaxTilt>
                    </S.PhotoWrapper>
                </S.MainFlexWrapper>
            </Container>
        </S.Main>
    )
}

