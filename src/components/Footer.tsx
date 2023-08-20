import { AbsoluteCenter, Container, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
    return (
        <Container bg={"blackAlpha.300"} minW={"100%"} minH={"10vh"} bottom={0} p={5} mx={"auto"}>
            <AbsoluteCenter axis={"horizontal"}>
                <Text textAlign={"center"} fontSize={"2xl"} fontFamily={"monospace"} fontWeight={"700"}>
                    © Copyright 2023 emanuelVINI.
                </Text>
                <Text textAlign={"center"} fontSize={"2xl"} fontFamily={"monospace"} fontWeight={"700"}>
                    Made with much ❤️ in 19/08/2023 with 5 hours.
                </Text>
            </AbsoluteCenter>
        </Container>
    )
}