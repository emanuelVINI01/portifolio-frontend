import { Container, SimpleGrid, ChakraProvider, extendTheme, Divider, Text, Stack, SlideFade, Fade } from '@chakra-ui/react';
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

  const language = {
    "questions": {
      "why_you_started": "Why you start?",
      "because_i_started": "When I was 10 years old, I started playing a game called Minecraft, this game has a server that you can create plugins in Java, and that stimulated me to learn to program to create my own server.",
      "which_you_create": "Which you can code?",
      "skills": "I have my bests skills in Java, C++, Python and JavaScript, expert in bukkit. About frameworks, I use much React and NextJS because are perfect to make a speed app, you can check my projects down.",

    }
  }

  const applications = [
    {
      name: "FeastLobby",
      image: "/images/feastplugins.png",
      url: "https://github.com/emanuelVINI01/FeastLobby",
      description: "A very lightning lobby plugin for 1.8-1.20.1 with many resources, like NPCs.",
      type: "plugin"
    },
    {
      name: "FeastCore",
      image: "/images/feastplugins.png",
      url: "https://github.com/emanuelVINI01/FeastCore",
      description: "A core for FeastPlugins with many APIs, like Dependency finder.",
      type: "plugin"
    },
    {
      name: "FeastBoard",
      image: "/images/feastplugins.png",
      url: "https://github.com/emanuelVINI01/FeastBoard",
      description: "A simple scoreboard plugin with hooks, like SimpleClans and PlotSquared",
      type: "plugin"
    },
    {
      name: "DVDuels",
      image: "https://cdn.discordapp.com/icons/617294498535309322/a_33392ff612476ca3edab038e99b39241.webp",
      url: "https://github.com/emanuelVINI01/DVDuels",
      description: "A simple duels plugin with configurable kits for DevRoom trial phase, made with 7 days timeframe.",
      type: "plugin"
    },
    {
      name: "EMTrocar",
      image: "https://cdn.discordapp.com/icons/1033504407263907941/a_d51c77d3b910998b81d439010be60502.webp",
      url: "https://github.com/emanuelVINI01/EMTrocar",
      description: "A simple plugin to make trades for ZappyCraft verification, made with 2 hours timeframe.",
      type: "plugin"
    },
    {
      name: "MultiServer",
      image: "/images/minecraft.png",
      url: "https://github.com/emanuelVINI01/MultiServer-API",
      description: "A API where you can make plugins with one code and run in many platforms, read wiki for more.",
      type: "plugin"
    },
    {
      name: "RyzenShopBot",
      image: "/images/discord.png",
      url: "https://github.com/emanuelVINI01/RyzenShopBot",
      description: "A Discord Bot with many systems, like economy, xp and others using typescript.",
      type: "bot"
    },
    {
      name: "ComuniMineBot",
      image: "/images/discord.png",
      url: "https://github.com/emanuelVINI01/ComuniMineBot",
      description: "A Discord Bot with ticket system, economy and moderation commands and anothers system.",
      type: "bot"
    },
    {
      name: "MineFeast",
      image: "/images/discord.png",
      url: "https://github.com/emanuelVINI01/MinecraftFeastBot",
      description: "A Discord Bot with ticket system, minecraft server query and skin query, made for a community.",
      type: "bot"
    },
    {
      name: "Ryzen",
      image: "/images/ryzen.png",
      url: "https://github.com/emanuelVINI01/RyzenSite",
      description: "A WebSite for my old hosting was closed in Jun 2022, the site was made with TypeScript and NextJS.",
      type: "website"
    },
    {
      name: "Portfolio",
      image: "/images/me.webp",
      url: "https://github.com/emanuelVINI01/portfolio-frontend",
      description: "The site where you stay now, made in 5 hours timeframe with React and Typescript, and Chakra UI.",
      type: "website"
    },
  ]
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Divider />
      <Container p={5} minH={"30vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <SimpleGrid mt={10} minW={"100vh"} columns={[1, 1, 3]} spacingX={5} spacingY={5}>
          <QuestionCard title={"Why you start?"} answer={"When I was 10 years old, I started playing a game called Minecraft, this game has a server that you can create plugins in Java, and that stimulated me to learn to program to create my own server."} />
          <QuestionCard title={"Which you can code?"} answer={"I have my bests skills in Java, C++, Python and JavaScript, expert in bukkit. About frameworks, I use much React and NextJS because are perfect to make a speed app, you can check my projects down."} />
          <QuestionCard title={"How I can order?"} answer={"You can tell me in discord, or using open stores like DevRoom and Arcane. The timeframe and price is variable, depend of your request and the complexity of this, contact me to get a quote about your project!"} />
        </SimpleGrid>
      </Container>
      <Divider />
      <Container p={5} mt={5} minH={"30vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
          <SimpleGrid mt={5} minW={"100vh"} columns={[1, 1, 3]} spacingX={5} spacingY={5}>
            {applications.filter(p => p.type == applicationType).map(app => {
              return (
                <Fade in={true}>
                  <Application {...app} />
                </Fade>
              )
            })}
          </SimpleGrid>
        </Stack>

      </Container>
      <Divider mt={10}/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
