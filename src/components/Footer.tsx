import { AbsoluteCenter, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return (
        <Container bg={"blackAlpha.300"} minW={"100%"} minH={"10vh"} bottom={0} p={5} mx={"auto"}>
            <AbsoluteCenter axis={"horizontal"}>
                <Text textAlign={"center"} fontSize={"2xl"} fontFamily={"monospace"} fontWeight={"700"}>
                    © Copyright 2023.
                </Text>
                <Text textAlign={"center"} fontSize={"2xl"} fontFamily={"monospace"} fontWeight={"700"}>
                    Made with much ❤️ by emanuelVINI.
                </Text>
            </AbsoluteCenter>
        </Container>
    )
}