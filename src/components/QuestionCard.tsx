import { Button, Card, CardBody, CardHeader, Center, SlideFade, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"
export default function QuestionCard(props: {
    title: string,
    answer: string
}) {

    return (
        <Card bg={"whiteAlpha.100"}>
            <CardHeader>
                <Text fontWeight={"700"} fontFamily={"monospace"} textAlign={"center"} fontSize={"2xl"}>
                    {props.title}
                </Text>

            </CardHeader>
            <CardBody>
                <SlideFade in={true}>
                    <Text textAlign={"center"} fontFamily={"mono"}>{props.answer}</Text>
                </SlideFade>
            </CardBody>


        </Card>
    )
}