import styled from "styled-components";
import MainPhoto from "../../../assets/images/forMain/mainPhoto.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainBg from "../../../assets/images/forMain/mainBackground.jpg"
import {Container} from "../../../components/Container";
import MyCV from "../../../assets/images/documents/Mycv.pdf"
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainFlexWrapper justify={"space-between"} align={"center"}>
                    <CreatingText>
                        <span>Hello, I'm</span>
                        <h2>Andrey Selilo</h2>
                        <h1>Frontend-developer</h1>
                        <ButtonCV>
                            <a href={MyCV} download={'Andrey_CV'} target="_blank" rel={'noopener noreferrer'}>Download
                                CV</a>
                        </ButtonCV>
                    </CreatingText>
                    <PhotoWrapper>
                        <Photo src={MainPhoto} alt={'photo'}/>
                    </PhotoWrapper>
                </MainFlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  position: relative;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
}
`

const MainFlexWrapper = styled(FlexWrapper)`
  backdrop-filter: brightness(0.7);
`

const CreatingText = styled.div`
  font-weight: 300;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  color: #fff;
`

const ButtonCV = styled.div`
  font-size: 24px;
  font-weight: 500;

  a {
    color: ${theme.colors.accent};
    border: ${theme.colors.accent} solid 2px;
    border-radius: 50rem;
    padding: 0.8rem 2.6rem;
    transition: all 0.5s ease;

    &:hover {
      background-color: ${theme.colors.accent};
      color: #fff;
    }

    &:focus {
      background-color: #0d6efd;
      border-color: #0d6efd;
      color: #fff;
    }
  }
`

const Photo = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 5px;
`

const PhotoWrapper = styled.div`
  position: relative;
  max-height: 400px;
  max-width: 320px;

  &::after {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    border-bottom: 10px solid ${theme.colors.accent};
    border-right: 10px solid ${theme.colors.accent};
    border-bottom-right-radius: 10px;
    right: -30px;
    bottom: -40px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 80px;
    width: 80px;
    border-top: 10px solid ${theme.colors.accent};
    border-top-left-radius: 10px;
    border-left: 10px solid ${theme.colors.accent};
    left: -30px;
    top: -40px;
  }
  
`