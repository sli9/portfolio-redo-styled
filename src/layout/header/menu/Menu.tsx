import React, {useEffect, useState} from "react";
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
    const [sectionId, setSectionId] = useState<string | null>(null)


    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const observer = new IntersectionObserver(([entry]) => {

            if (entry.isIntersecting) {
                setSectionId(entry.target.id)
            }
        }, {threshold: 0.6})

        sections.forEach((section) => observer.observe(section))

        return () => {
            observer.disconnect()
        }
    }, []);

    const scrollHandler = (id: string) => {
        document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
        setSectionId(id)
    }

    return (
        <S.Menu>
            <ul>
                {items.map((item, index) => {
                    return <S.ListItem key={index}
                    >
                        <S.NavLink
                            className={`${sectionId === item.href && 'active'}`}
                            onClick={() => scrollHandler(item.href)}
                        >
                            {item.title}
                        </S.NavLink>
                    </S.ListItem>
                })}
            </ul>
        </S.Menu>
    )
}




