import React, {useEffect, useState} from "react";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Header_Styles"
import {DesktopMenu} from "./menu/desktopMenu/DesktopMenu";
import {animateScroll} from "react-scroll";
import {MobileMenu} from "./menu/mobileMenu/MobileMenu";

export const Header: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)
    const breakPoint = 576
    const [backgroundColor, setBackgroundColor] = useState<string>("transparent")

    useEffect(() => {
        const handleHeaderBg = () => {
            window.scrollY > 100 ? setBackgroundColor("#2e2e2e") : setBackgroundColor("transparent")
        }

        window.addEventListener('scroll', handleHeaderBg)
        return () => window.removeEventListener('scroll', handleHeaderBg)
    }, []);

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
                        ? <DesktopMenu/>
                        : <MobileMenu/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}



