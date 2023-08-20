import { Center, Box, Button, Container, HStack, ScaleFade, Slide, SlideFade, Stack, Text, Icon, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { MouseEventHandler, useState } from "react";
import { BiCodeAlt } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
function NavButton(props: {
    icon: JSX.Element,
    onClick: MouseEventHandler,
    children: JSX.Element
}) {
    return (
        <Button bg={"whiteAlpha.100"} onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export default function Navbar() {

    const name = "emanuelVINI".split("");

    const toast = useToast({
        "position": "top-right",
        "isClosable": true,
        "duration": 5000
    })
    return (
        <Container
            minW={"100%"}
            maxH={"13vh"}
            bg={'whiteAlpha.50'}
            p={5}
            mx={"auto"}>

            <Center >
                <HStack textAlign={"center"}>
                    <HStack>
                        <Icon as={BiCodeAlt} fontSize={"5xl"} />
                        <Box fontFamily={"monospace"} fontSize={"4xl"} fontWeight={"800"}>
                            {name.map((char: string, index: number) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0.8, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 5, delay: index * 0.05, repeat: Infinity }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </Box>
                    </HStack>
                    <HStack ml={"5%"} spacing={5}>
                        <Button leftIcon={<Icon as={AiFillGithub} fontSize={"3xl"} />} onClick={() => window.location.href = "https://github.com/emanuelVINI01"}>GitHub</Button>
                        <Button leftIcon={<Icon as={BsDiscord} fontSize={"3xl"}/>} onClick={() => {
                            toast({
                                "title": "Add me in discord:",
                                "description": "My username is: emanuelvini"
                            })
                        }}>Discord</Button>
                    </HStack>
                </HStack>
            </Center>
        </Container>
    )
}