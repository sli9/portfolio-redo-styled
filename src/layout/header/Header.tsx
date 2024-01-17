import React, {useCallback, useEffect, useState} from "react";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Header_Styles"
import {DesktopMenu} from "./menu/desktopMenu/DesktopMenu";
import {animateScroll} from "react-scroll";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./menu/mobileMenu/MobileMenu";

export const Header: React.FC = () => {

    const [width, setWidth] = useState<number>(window.innerWidth)
    const breakPoint = 576
    const [backgroundColor, setBackgroundColor] = useState<string | undefined>("transparent")

    const backgroundChanger = useCallback((index: number) => {
        if (index % 2 === 0) {
            setBackgroundColor(theme.colors.secondBg)
        } else setBackgroundColor(theme.colors.firstBg)

        if (index === 0) {
            setBackgroundColor(undefined)
        }
    }, [backgroundColor])

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);

    return (
        <S.Header headerBgColor={backgroundColor}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <S.LogoLink onClick={() => animateScroll.scrollToTop()}>
                        <Icon iconId={'logo'} viewBox={'0 0 100 100'} fill={"#111418"}/>
                    </S.LogoLink>
                    {width > breakPoint
                        ? <DesktopMenu backgroundChanger={backgroundChanger}/>
                        : <MobileMenu backgroundChanger={backgroundChanger}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}



