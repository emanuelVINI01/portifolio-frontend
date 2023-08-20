import { Button, Card, CardBody, Image, CardHeader, Center, SlideFade, Text, useDisclosure, Stack } from "@chakra-ui/react";
import React from "react";

export default function Application(props: {
  name: string;
  image: string;
  description: string;
  url: string;
}) {
  return (
    <Card bg={"whiteAlpha.100"} maxW={"80vh"} p={5}>
      <CardHeader mx={"center"}>
        <Text fontWeight={"700"} fontFamily={"monospace"} textAlign={"center"} fontSize={"3xl"}>
          {props.name}
        </Text>
        <Center>
          <Image mt={5} src={props.image} alt={props.name} h={"128px"} borderRadius='lg' />
        </Center>
        <Center mt={5}>
          <SlideFade in={true}>
            <Stack spacing={3}>
              <Text textAlign={"center"} mb={5} fontSize={"2xl"} fontWeight={"700"} fontFamily={"monospace"}>
                {props.description}
              </Text>
              <Button textAlign={"center"} fontSize={"lg"} fontFamily={"mono"} onClick={() => {
                window.location.href = props.url;
              }}>
                View in GitHub
              </Button>
            </Stack>
          </SlideFade>
        </Center>
      </CardHeader>
    </Card>
  );
}
