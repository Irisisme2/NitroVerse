import React from 'react';
import { SimpleGrid, Text, Box } from '@chakra-ui/react';

const MultiBlockchainNavigation = () => {
  const blockchains = [
    { id: 1, name: 'Ethereum', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/240px-Ethereum_logo_2014.svg.png', url: 'https://ethereum.org' },
    { id: 2, name: 'Polygon', icon: 'https://s3.coinmarketcap.com/static-gravity/image/b8db9a2ac5004c1685a39728cdf4e100.png', url: 'https://polygon.technology' },
    { id: 3, name: 'Tron', icon: 'https://logowik.com/content/uploads/images/tron-trx-icon3386.logowik.com.webp', url: 'https://tron.network' },
    { id: 4, name: 'Other', icon: 'https://thegivingblock.com/wp-content/uploads/2021/08/ChainLink-LINK-Logo.png', url: 'https://chain.link' },
    { id: 5, name: 'Bitcoin', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png', url: 'https://bitcoin.org' },
    { id: 6, name: 'Cardano', icon: 'https://cardano.org/img/cardano-logo-blue.svg', url: 'https://cardano.org' },
    { id: 7, name: 'Solana', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png', url: 'https://solana.com' },
    { id: 8, name: 'Binance Smart Chain', icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png', url: 'https://www.binance.org/en/smartChain' },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} mb={4}>
      {blockchains.map((blockchain) => (
        <Box
          key={blockchain.id}
          bg='white'
          boxShadow='md'
          borderRadius='md'
          p='4'
          textAlign='center'
          cursor='pointer'
          _hover={{ bg: 'gray.100' }}
          onClick={() => window.open(blockchain.url, '_blank')}
        >
          <img src={blockchain.icon} alt={blockchain.name} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
          <Text fontSize='lg' fontWeight='bold'>{blockchain.name}</Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default MultiBlockchainNavigation;
