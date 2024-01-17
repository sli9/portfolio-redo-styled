import React from "react";
import {S} from "./HeaderMenu_Styles"

export type MenuPropsType = {
    backgroundChanger: (index: number) => void
}

const items = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Projects',
        href: 'projects'
    },
    {
        title: 'Contact',
        href: 'contact'
    },
]
export const Menu: React.FC<MenuPropsType> = ({backgroundChanger}) => {
    return (
        <S.Menu>
            <ul>
                {items.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.NavLink
                            to={item.href}
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            isDynamic
                            onSetActive={() => {
                                backgroundChanger(index)
                            }}
                        >
                            {item.title}
                        </S.NavLink>
                    </S.ListItem>
                })}
            </ul>
        </S.Menu>
    )
}




