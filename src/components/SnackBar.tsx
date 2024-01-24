import {forwardRef, useImperativeHandle, useState} from "react";
import {FlexWrapper} from "./FlexWrapper";
import styled from "styled-components";

type SnackbarPropsType = {
    message: string
    type: 'success' | 'fail'
}

export type ShowSnackbarType = {
    showSnackbar: (props: SnackbarPropsType) => void
}

export const SnackBar = forwardRef<ShowSnackbarType>((props, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [type, setType] = useState<string>()
    const [message, setMessage] = useState<string>('')
    console.log(type)
    useImperativeHandle(ref, () => {
        return {
            showSnackbar(props) {
                setType(props.type)
                setMessage(props.message)
                setIsVisible(true)
                setTimeout(() => {
                    setIsVisible(false)
                }, 5000)
            }
        }
    }, [isVisible, type, message])


    return <> {isVisible &&
        <SnackBarWrapper align={"center"} gap={"30px"} messageType={type}>
            <Message>{message}</Message>
            <Symbol onClick={() => setIsVisible(false)}>&#x2613;</Symbol>
        </SnackBarWrapper>
    }</>
})

const SnackBarWrapper = styled(FlexWrapper)<{messageType: string | undefined}>`
  min-width: 300px;
  background-color:${props => props.messageType === "success" ? "#01985e" : "#a30000" };
  padding: 12px 10px;
  border-radius: 10px;
  height: fit-content;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);
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