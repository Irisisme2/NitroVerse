import React, { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Card from "components/card/Card.js";
import { FaEthereum, FaBitcoin, FaCube, FaLink } from "react-icons/fa";

// Dane dotyczące blockchainów
const blockchains = [
  {
    id: 1,
    name: "Ethereum",
    icon: <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" alt="Ethereum" width="24" height="24" />,
    description: "The world's leading programmable blockchain.",
    resourcesLink: "https://ethereum.org/",
  },
  {
    id: 2,
    name: "Bitcoin",
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8S359TV3yZ4O0WvhqVpAgwILP2T6e7iKfhQ&s" alt="Bitcoin" width="24" height="24" />,
    description: "The first and most widely recognized cryptocurrency.",
    resourcesLink: "https://bitcoin.org/",
  },
  {
    id: 3,
    name: "Binance Smart Chain",
    icon: <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="Binance Smart Chain" width="24" height="24" />,
    description: "A blockchain for developing fast and low-cost smart contracts.",
    resourcesLink: "https://www.binance.org/",
  },
  {
    id: 4,
    name: "Polygon",
    icon: <img src="https://logowik.com/content/uploads/images/polygon-matic-icon3725.logowik.com.webp" alt="Polygon" width="24" height="24" />,
    description: "A protocol and framework for building and connecting Ethereum-compatible blockchain networks.",
    resourcesLink: "https://polygon.technology/",
  },
  {
    id: 5,
    name: "Cardano",
    icon: <img src="https://cryptologos.cc/logos/cardano-ada-logo.png" alt="Cardano" width="24" height="24" />,
    description: "A proof-of-stake blockchain platform for the development of decentralized applications and smart contracts.",
    resourcesLink: "https://cardano.org/",
  },
];

// Dane dotyczące dAppów
const dApps = [
  {
    id: 1,
    name: "Uniswap",
    icon: <img src="https://cryptologos.cc/logos/uniswap-uni-logo.png" alt="Uniswap" width="24" height="24" />,
    description: "A decentralized protocol for automated liquidity provision.",
    resourcesLink: "https://uniswap.org/",
  },
  {
    id: 2,
    name: "Chainlink",
    icon: <img src="https://cryptologos.cc/logos/chainlink-link-logo.png" alt="Chainlink" width="24" height="24" />,
    description: "A decentralized oracle network providing real-world data to smart contracts.",
    resourcesLink: "https://chain.link/",
  },
  {
    id: 3,
    name: "Aave",
    icon: <img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="Aave" width="24" height="24" />,
    description: "An open-source and non-custodial protocol enabling users to lend, borrow, and earn interest on cryptocurrencies.",
    resourcesLink: "https://aave.com/",
  },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle filter type change
  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  // Function to render blockchain or dApp card
  const renderItemCard = (item) => {
    return (
      <Card key={item.id} p="20px">
        <Flex justify="space-between" mb="20px" align="center">
          <Flex align="center">
            {item.icon}
            <Text fontSize="xl" fontWeight="bold" ml="10px">
              {item.name}
            </Text>
          </Flex>
        </Flex>
        <Text mb="10px">{item.description}</Text>
        <Flex justify="flex-end">
          <a href={item.resourcesLink} target="_blank" rel="noopener noreferrer">
            <FaLink style={{ marginRight: "5px" }} />
            Resources
          </a>
        </Flex>
      </Card>
    );
  };

  // Filtered items based on search query and filter type
  const filteredItems = filterType === "blockchain" ? blockchains : dApps;
  const filteredAndSearchedItems = filteredItems.filter((item) => {
    const matchesSearchQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearchQuery;
  });

  return (
    <Box pt={{ base: "120px", md: "80px", xl: "80px" }}>
      <Grid gap="20px">
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          <Flex
            mt="45px"
            mb="20px"
            justifyContent="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <Text fontSize="2xl" ms="24px" fontWeight="700">
              Explore
            </Text>
          </Flex>
          <Flex mb="20px" justify="space-between">
            <InputGroup maxW="400px">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </InputGroup>
            <Select
              maxW="200px"
              value={filterType}
              onChange={handleFilterTypeChange}
            >
              <option value="all">All Items</option>
              <option value="blockchain">Blockchains</option>
              <option value="dapp">dApps</option>
            </Select>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px">
            {filteredAndSearchedItems.map((item) =>
              renderItemCard(item)
            )}
          </SimpleGrid>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Explore;
