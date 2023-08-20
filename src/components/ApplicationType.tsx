import { Box, Button, Icon, Image } from '@chakra-ui/react'
import React from 'react'

export default function ApplicationType(props: {
    icon: JSX.Element
    name: string
    onClick: Function
}) {
    return (
        <Button bg={"whiteAlpha.100"} minW={"100%"} fontSize={"xl"} fontFamily={"monospace"} leftIcon={props.icon} onClick={() => props.onClick()}>
            {props.name}
        </Button>


    )
}