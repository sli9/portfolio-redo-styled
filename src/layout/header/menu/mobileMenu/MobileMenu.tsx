import React, {useState} from "react";
import {Menu} from "../Menu";
import {S} from "../HeaderMenu_Styles";


export const MobileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <S.BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
            </S.BurgerMenu>

            <S.MobileMenuList align={"center"} isOpen={isOpen}>
                <Menu/>
            </S.MobileMenuList>
        </>
    )
}






