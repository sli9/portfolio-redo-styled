import {theme} from "./Theme";

type FontType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}

export const flexFont = ({family, Fmax, Fmin, weight, lineHeight, color}: FontType) => `
    font-family: ${family || "Oswald"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.text};
    line-height: ${lineHeight || 1.2};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px)
`