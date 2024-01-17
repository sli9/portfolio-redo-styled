import {useEffect, useState} from "react";
import {FlexWrapper} from "./FlexWrapper";
import styled from "styled-components";

type SnackbarPropsType = {
    message: string
    type: 'success' | 'fail'
    visibility: boolean
}

export type ShowSnackbarType = {
    showSnackbar: (props: SnackbarPropsType) => void
}

export const SnackBar = (props: SnackbarPropsType) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
        setIsVisible(props.visibility)
    }, [props.visibility])

    return <> {isVisible &&
        <SnackBarWrapper align={"center"} gap={"30px"}>
            <Message>{props.message}</Message>
            <Symbol onClick={() => setIsVisible(false)}>&#x2613;</Symbol>
        </SnackBarWrapper>
    }</>
}

const SnackBarWrapper = styled(FlexWrapper)`
  background-color: rgb(1, 153, 95);
  padding: 12px 10px;
  border-radius: 10px;
  height: fit-content;

  position: fixed;
  left: 50%;
  bottom: 15%;
`

const Symbol = styled.button`
  font-weight: 600;
  font-size: 20px;
  color: inherit;
`

const Message = styled.p`
  letter-spacing: 1.2px;
`