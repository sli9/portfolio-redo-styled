import React from "react";
import {S} from "../Works_Styles"

export type WorkPropsType = {
    title: string
    description: string
    codeLink: string
    siteLink: string
    srcImage: string
}

export const Work: React.FC<WorkPropsType> = (props) => {
    return (
        <S.Work>
            <S.Link href={`${props.siteLink}`} target='_blank' rel={"noopener noreferrer"}>
                <S.ImageWrapper align={"center"} justify={"center"}>
                    <S.Image src={props.srcImage} alt={"image"}/>
                    <S.Button>view project</S.Button>
                </S.ImageWrapper>
            </S.Link>

            <S.WorkInfo>
                <S.WorkInfoTitle>{props.title}</S.WorkInfoTitle>
                <S.Text>{props.description}</S.Text>
                <S.Button>
                    <S.Link href={`${props.codeLink}`} target='_blank' rel={"noopener noreferrer"}>
                        view code
                    </S.Link>
                </S.Button>
            </S.WorkInfo>
        </S.Work>
    )
}

