/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import { FaEthereum, FaBitcoin, FaRegMoneyBillAlt } from 'react-icons/fa'; // Ikony Ethereum, Bitcoin, DAI

import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdAccountBalanceWallet,
  MdMonetizationOn,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import ComplexTable from "views/admin/default/components/ComplexTable";
import MultiBlockchainNavigation from "views/admin/default/components/MultiBlockchainNavigation";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import CrossChainActivityFeed from "views/admin/default/components/CrossChainActivityFeed";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
<SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap='20px' mb='20px'>
  {/* Wallet Address */}
  <MiniStatistics
    startContent={
      <IconBox
        w='56px'
        h='56px'
        bg={boxBg}
        icon={
          <Icon w='32px' h='32px' as={MdAccountBalanceWallet} color={brandColor} />
        }
      />
    }
    name='Wallet Address'
    value='0xAbCdEfGh...'
    token='ETH'
  />

  {/* Token Balance (ETH) */}
{/* Token Balance (ETH) */}
<MiniStatistics
    startContent={
      <IconBox
        w='56px'
        h='56px'
        bg={boxBg}
        icon={
          <FaEthereum size='32px' color='#627EEA' />
        }
      />
    }
    name='Token Balance'
    value='3.5'
    token='ETH'
  />


  {/* Token Balance (MATIC) */}
  <MiniStatistics
    startContent={
      <IconBox
        w='56px'
        h='56px'
        bg={boxBg}
        icon={
          <Icon as={FaRegMoneyBillAlt} w='32px' h='32px' color='#2EB67D' />
        }
      />
    }
    name='Token MATIC'
    value='1200'
    token='MATIC'
  />

  {/* Token Balance (BTC) */}
  <MiniStatistics
    startContent={
      <IconBox
        w='56px'
        h='56px'
        bg={boxBg}
        icon={
          <FaBitcoin size='32px' color='#F7931A' />
        }
      />
    }
    name='Token BTC'
    value='0.025'
    token='BTC'
  />

  {/* Token Balance (DAI) */}
  <MiniStatistics
    startContent={
      <IconBox
        w='56px'
        h='56px'
        bg={boxBg}
        icon={
          <Icon as={FaRegMoneyBillAlt} w='32px' h='32px' color='#6C95D6' />
        }
      />
    }
    name='Token DAI'
    value='5000'
    token='DAI'
  />

</SimpleGrid>


      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <CrossChainActivityFeed />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <MultiBlockchainNavigation columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>

        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
      </SimpleGrid>
    </Box>
  );
}
