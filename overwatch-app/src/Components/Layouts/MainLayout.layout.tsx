import { Flex, Image, Text, HStack } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <Flex direction={"column"}>
      <Header />
      <Outlet />
    </Flex>
  );
};

const Header = () => {
  return (
    <Flex
      as={"nav"}
      bg={"grey.100"}
      justify={"space-between"}
      padding={"8px 24px 8px 24px"}
    >
      <Link to="/">
        <HStack>
          <Image
            boxSize={"48px"}
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Overwatch_2_logo.svg"
            alt="Overwatch 2 logo"
          />
          <Text as={"b"}>HERO COUNTERS</Text>
        </HStack>
      </Link>
    </Flex>
  );
};
