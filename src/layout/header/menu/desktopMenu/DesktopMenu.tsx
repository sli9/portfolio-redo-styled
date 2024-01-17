import React from 'react';
import {Menu, MenuPropsType} from "../Menu";


export const DesktopMenu: React.FC<MenuPropsType> = ({backgroundChanger}) => {
    return (
            <Menu backgroundChanger={backgroundChanger}/>
    )
}
