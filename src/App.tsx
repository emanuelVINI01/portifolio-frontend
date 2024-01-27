import { Container, SimpleGrid, ChakraProvider, extendTheme, Divider, Text, Stack, SlideFade, Fade, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import ApplicationType from './components/ApplicationType';
import { HamburgerIcon } from '@chakra-ui/icons';
import { BiCube, BiLogoReact } from 'react-icons/bi';
import { BsDiscord } from 'react-icons/bs';
import Application from './components/Application';
import Footer from './components/Footer';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        background: "RGBA(0, 0, 0, 0.04)",
      },
    }),
  },
})

function App() {

  const [applicationType, setApplicationType] = useState("plugin")


  const applications = [
    {
      name: "FeastLobby",
      image: "/images/feastplugins.png",
      url: "https://github.com/emanuelVINI01/FeastLobby",
      description: "I've created an exceptionally fast lobby plugin compatible with versions 1.8 to 1.20.1. This plugin comes packed with a plethora of resources, including NPCs, to enhance the user experience and engagement within the lobby environment.",
      type: "plugin"
    },
    {
      name: "FeastCore",
      image: "/images/feastplugins.png",
      url: "https://github.com/emanuelVINI01/FeastCore",
      description: "I've developed a robust core for FeastPlugins, equipped with a variety of APIs, including a Dependency Finder. This core provides a solid foundation for building and expanding functionalities within the FeastPlugins ecosystem.",
      type: "plugin"
    },
    {
      name: "FeastScore",
      image: "/images/feastplugins.png",
      url: "https://github.com/emanuelVINI01/FeastScore",
      description: "I have crafted a user-friendly scoreboard plugin enriched with hooks, similar to the functionality seen in plugins such as SimpleClans and PlotSquared.",
      type: "plugin"
    },
    {
      name: "DVDuels",
      image: "/images/devroom.webp",
      url: "https://github.com/emanuelVINI01/DVDuels",
      description: "During the DevRoom trial phase, I successfully designed a straightforward duels plugin that offers configurable kits. This intricate project was completed within a span of 7 days.",
      type: "plugin"
    },
    {
      name: "EMTrocar",
      image: "/images/zc.webp",
      url: "https://github.com/emanuelVINI01/EMTrocar",
      description: "A swiftly developed a basic plugin for ZappyCraft verification purposes, focused on facilitating trades. This project was accomplished within a tight timeframe of just 2 hours.",
      type: "plugin"
    },
    {
      name: "MultiServer",
      image: "/images/minecraft.png",
      url: "https://github.com/emanuelVINI01/MultiServer-API",
      description: "An API has been developed, allowing you to create plugins with a single codebase that can be executed across multiple platforms. For more detailed information, please refer to the provided wiki.",
      type: "plugin"
    },
    {
      name: "RyzenShopBot",
      image: "/images/discord.png",
      url: "https://github.com/emanuelVINI01/RyzenShopBot",
      description: "I've crafted a versatile Discord Bot employing TypeScript, featuring a multitude of systems such as economy, XP tracking, and various other functionalities.",
      type: "bot"
    },
    {
      name: "ComuniMineBot",
      image: "/images/discord.png",
      url: "https://github.com/emanuelVINI01/ComuniMineBot",
      description: "I designed a comprehensive Discord Bot equipped with a ticket system, economy features, moderation commands, and various other systems to enhance its functionality.",
      type: "bot"
    },
    {
      name: "MineFeast",
      image: "/images/discord.png",
      url: "https://github.com/emanuelVINI01/MinecraftFeastBot",
      description: "I developed a Discord Bot tailored for a community, which includes a ticket system, Minecraft server query, and skin query functionalities.",
      type: "bot"
    },
    {
      name: "Ryzen",
      image: "/images/ryzen.png",
      url: "https://github.com/emanuelVINI01/RyzenSite",
      description: "A website for my former hosting was taken down in June 2022. The site had been developed using TypeScript and NextJS.",
      type: "website"
    },
    {
      name: "Portfolio",
      image: "/images/me.webp",
      url: "https://github.com/emanuelVINI01/portfolio-frontend",
      description: "The current website you are viewing was created within a 5-hour timeframe using React, TypeScript, and Chakra UI.",
      type: "website"
    },
  ]
  return (
    <ChakraProvider theme={theme} >
      <Navbar />
      <Divider />
      <Container minH={"30vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <SimpleGrid mt={10} minW={"100vh"} columns={[1, 1, 3]} spacingX={5} spacingY={5} p={5}>
          <QuestionCard title={"Why you was start?"} answer={"When I was 10 years old, I began playing a game called Minecraft. This game has a server in which you can create plugins using Java. This stimulated me to learn programming in order to create my own server."} />
          <QuestionCard title={"Which you can code?"} answer={"I am most proficient in Java, C++, Python, and JavaScript, and I am an expert in Bukkit. When it comes to frameworks, I heavily utilize React and NextJS because they are perfect for creating fast applications. You can check out my projects below."} />
          <QuestionCard title={"How I can order?"} answer={"You can reach out to me on Discord or utilize open platforms such as DevRoom and Arcane. The timeframe and pricing are variable, depending on your specific requirements and the complexity involved. Feel free to contact me to receive a personalized quote for your project!"} />
        </SimpleGrid>
      </Container>
      <Divider />
      <Container p={10} mt={5} minH={"30vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Stack>
          <Text fontFamily={"monospace"} fontSize={"3xl"} fontWeight={600} textAlign={"center"}>My Projects</Text>
          <SimpleGrid mt={10} minW={"100vh"} columns={[1, 1, 3]} spacingX={5} spacingY={5}>
            <ApplicationType icon={<BiCube />} name={'Minecraft Plugins'} onClick={() => {
              setApplicationType("plugin")
            }} />
            <ApplicationType icon={<BsDiscord />} name={'Discord Bots'} onClick={() => {
              setApplicationType("bot")
            }} />
            <ApplicationType icon={<BiLogoReact />} name={'Web Sites'} onClick={() => {
              setApplicationType("website")
            }} />
          </SimpleGrid>
          <Divider />
          <SimpleGrid mt={10} minW={"100vh"} columns={[1, 1, 3]} spacingX={5} spacingY={5}>
            {applications.filter(p => p.type === applicationType).map(app => (
              <Application image={app.image} url={app.url} key={app.name} name={app.name} description={app.description} />
            ))}
          </SimpleGrid>
        </Stack>

      </Container>
      <Divider mt={10} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
