import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdSwapHoriz } from 'react-icons/md';
import Card from 'components/card/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CrossChainActivityFeed = () => {
  // Dummy data for cross-chain activities
  const crossChainData = [
    { blockchain: 'Ethereum', transfers: 250 },
    { blockchain: 'Polygon', transfers: 180 },
    { blockchain: 'Binance Smart Chain', transfers: 120 },
    { blockchain: 'Solana', transfers: 90 },
    { blockchain: 'Cardano', transfers: 80 },
  ];

  // Colors for bars in the chart
  const barColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <Card p="4" bg="white" boxShadow="base" borderRadius="xl">
      <Flex align="center" mb="4">
        <Icon as={MdSwapHoriz} boxSize="8" color="blue.500" mr="2" />
        <Heading size="md" fontWeight="bold" color={useColorModeValue('gray.800', 'gray.200')}>
          Cross-Chain Activity Feed
        </Heading>
      </Flex>
      <Divider mb="4" />
      <Box>
        <Text mb="4" color={useColorModeValue('gray.600', 'gray.300')}>
          Last cross-chaina activity:
        </Text>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={crossChainData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="blockchain" />
            <YAxis />
            <Tooltip />
            <Legend />
            {crossChainData.map((entry, index) => (
              <Bar key={`bar-${index}`} dataKey="transfers" fill={barColors[index % barColors.length]} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default CrossChainActivityFeed;
