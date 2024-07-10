import React from 'react';
import { SimpleGrid, Text, Box, Button, Link } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi'; // Importujemy ikonę linku z react-icons
import Card from "components/card/Card.js";

const FeaturedDApps = () => {
  // Symulowane dane dAppów z różnych blockchainów
  const dApps = [
    { id: 1, name: 'Uniswap', blockchain: 'Ethereum', url: 'https://uniswap.org', description: 'Automated liquidity protocol powered by AMM on Ethereum.', icon: 'https://cdn.prod.website-files.com/63f902d79a33f7ff016cde0b/63f902d89a33f7ab716ce726_6390a10538dcb05321596402_uniswap.jpeg', action: 'Swap Tokens' },
    { id: 2, name: 'QuickSwap', blockchain: 'Polygon', url: 'https://quickswap.exchange', description: 'The fastest DEX on Polygon for trading Ethereum tokens.', icon: 'https://assets.coingecko.com/coins/images/25393/large/quickswap.png?1696524525u', action: 'Exchange Tokens' },
    { id: 3, name: 'JustSwap', blockchain: 'Tron', url: 'https://justswap.io', description: 'A decentralized trading protocol on the Tron blockchain.', icon: 'https://avatars.githubusercontent.com/u/78012711?s=200&v=4', action: 'Trade Tokens' }
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mb={4}>
      {dApps.map((dApp) => (
        <Card
          key={dApp.id}
          bg='white'
          boxShadow='md'
          borderRadius='md'
          p={4}
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Box>
            <img src={dApp.icon} alt={dApp.name} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
            <Text fontSize='xl' fontWeight='bold' mb={2}>{dApp.name}</Text>
            <Text fontSize='sm' mb={2}>{dApp.description}</Text>
            <Text fontSize='sm' color='gray.500'>{dApp.blockchain}</Text>
          </Box>
          <Box mt={4}>
            <Link href={dApp.url} isExternal textDecoration='none'>
              <Button colorScheme='blue' rightIcon={<FiExternalLink />}>
                Visit
              </Button>
            </Link>
            <Button mt={2} variant='outline'>
              {dApp.action}
            </Button>
          </Box>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default FeaturedDApps;
