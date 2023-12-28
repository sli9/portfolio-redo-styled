import React from "react";
import {S} from "./HeaderMenu_Styles"

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
export const Menu: React.FC = () => {

    return (
        <S.Menu>
            <ul>
                {items.map((item, index) => (
                    <S.ListItem key={index}>
                        <S.NavLink
                            to={item.href}
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-60}
                        >
                            {item.title}
                        </S.NavLink>
                    </S.ListItem>
                ))}
            </ul>
        </S.Menu>
    )
}




