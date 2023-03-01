import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Damage } from "../assets/roleIcons/Damage.icon";
import { Support } from "../assets/roleIcons/Support.icon";
import { Tank } from "../assets/roleIcons/Tank.icon";

export const Home = () => {
  return (
    <Box padding={8}>
      <VStack id="Heroes" spacing={16}>
        <VStack id="DamageHeroes" spacing={4}>
          <HStack spacing={2}>
            <Damage />
            <Heading color={"gray.600"}>DAMAGE</Heading>
          </HStack>
          <Grid templateColumns={"repeat(5, 1fr)"} gap={4}>
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </Grid>
        </VStack>
        <VStack id="TankHeroes" spacing={4}>
          <HStack spacing={2}>
            <Tank />
            <Heading color={"gray.600"}>TANK</Heading>
          </HStack>
          <Grid templateColumns={"repeat(5, 1fr)"} gap={4}>
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </Grid>
        </VStack>
        <VStack id="SupportHeroes" spacing={4}>
          <HStack spacing={2}>
            <Support />
            <Heading color={"gray.600"}>SUPPORT</Heading>
          </HStack>
          <Grid templateColumns={"repeat(5, 1fr)"} gap={4}>
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </Grid>
        </VStack>
      </VStack>
    </Box>
  );
};

const AgentCard = () => {
  return (
    <Link to="hero">
      <Image />
      <GridItem bg="white">Agent Name</GridItem>
    </Link>
  );
};
