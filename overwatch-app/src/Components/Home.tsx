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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              version="1.1"
              viewBox="0 0 60.325 60.325"
              fill="#F06414"
            >
              <path d="m5.4398 34.59v-24.069c0-3.8588 8.0447-8.9157 24.723-8.9157 16.678 0 24.723 5.0568 24.723 8.9157v24.069c0 5.821-19.817 24.133-24.723 24.133-4.9053 0-24.723-18.312-24.723-24.133z" />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              version="1.1"
              viewBox="0 0 60.325 60.325"
              fill="#F06414"
            >
              <path d="m40.777 54.38c0 1.8962-1.6187 4.3473-3.6536 4.3473h-13.922c-2.0349 0-3.6536-2.4511-3.6536-4.3473v-13.597h-13.597c-1.8962 0-4.3473-1.6187-4.3473-3.6536v-13.922c0-2.0349 2.4511-3.6536 4.3473-3.6536h13.597v-13.597c0-1.8962 1.6187-4.3473 3.6536-4.3473h13.922c2.0349 0 3.6536 2.4511 3.6536 4.3473v13.597h13.597c1.8962 0 4.3473 1.6187 4.3473 3.6536v13.922c0 2.0349-2.4511 3.6536-4.3473 3.6536h-13.597z" />
            </svg>
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
