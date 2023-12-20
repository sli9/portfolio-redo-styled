import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./menu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import React, {useEffect, useState} from "react";
import {DesktopMenu} from "./menu/desktopMenu/DesktopMenu";

const items = ['Home', 'Skills', 'Projects', 'Contact']

export const Header: React.FC = () => {

    const [width, setWidth] = useState<number>(window.innerWidth)
    const breakPoint = 576

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
            console.log(width)
        }
        window.addEventListener('resize', handleWindowResize)

        return () => window.removeEventListener('resize', handleWindowResize)
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <Icon iconId={'logo'} viewBox={'0 0 100 100'} fill={"#111418"}/>
                    {width > breakPoint ? <DesktopMenu items={items}/> : <MobileMenu items={items}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
}



