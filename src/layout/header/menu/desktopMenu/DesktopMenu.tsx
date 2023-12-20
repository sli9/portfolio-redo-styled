import React from 'react';
import {Menu} from "../Menu";

export const DesktopMenu: React.FC<{ items: string[] }> = (props) => {
    return (
            <Menu items={props.items}/>
    )
}
