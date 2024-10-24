import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function VolleyballStatTracker() {
  const [stats, setStats] = useState({
    spikes: '',
    blocks: '',
    aces: '',
    digs: '',
    assists: '',
  });

  const [gameInfo, setGameInfo] = useState({
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      spikes: '',
      blocks: '',
      aces: '',
      digs: '',
      assists: '',
    });
    setGameInfo({
      opponent: '',
      date: '',
    });
  };

  // Function to calculate averages
  const calculateAverages = (statName) => {
    const total = games.reduce((sum, game) => sum + (parseFloat(game[statName]) || 0), 0);
    return games.length ? (total / games.length).toFixed(2) : 0;
  };

  const averages = {
    spikes: calculateAverages('spikes'),
    blocks: calculateAverages('blocks'),
    aces: calculateAverages('aces'),
    digs: calculateAverages('digs'),
    assists: calculateAverages('assists'),
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/volleyball-court.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16}
    >
      <Heading fontSize="4xl" fontWeight="medium" color="#BF5700" fontFamily="'Passion One', sans-serif">
        Volleyball Stat Tracker
      </Heading>
      <Flex gap={4} mb={6} justifyContent="center">
        <MotionBox
          w={{ base: '90%', md: '250px' }}
          bgColor="#4B4B4B"
          borderRadius="12px"
          p={4}
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          borderColor="#BF5700"
          borderWidth="4px"
        >
          <Text 
            color="#F5F5DC" 
            fontWeight="bold" 
            fontFamily="'Passion One', sans-serif" 
            fontSize="md"
            textAlign="center" 
          >
            Volleyball Stats
          </Text>
          <Text color="#F5F5DC">Spikes: {averages.spikes}</Text>
          <Text color="#F5F5DC">Blocks: {averages.blocks}</Text>
          <Text color="#F5F5DC">Aces: {averages.aces}</Text>
          <Text color="#F5F5DC">Digs: {averages.digs}</Text>
          <Text color="#F5F5DC">Assists: {averages.assists}</Text>
        </MotionBox>
      </Flex>
      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#ebebeb"
        borderRadius="12px"
        borderColor="#38393d"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#000000" fontFamily="'Passion One', sans-serif" mb={4}>
          Match Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No matches added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#000000" fontWeight="bold" fontFamily="'Passion One', sans-serif">
                  Match {index + 1} - Opponent:
                </Text>
                <Text color="#000000">Opponent: {game.opponent}</Text>
                <Text color="#000000">Date: {game.date}</Text>
                <Text color="#000000">Spikes: {game.spikes}</Text>
                <Text color="#000000">Blocks: {game.blocks}</Text>
                <Text color="#000000">Aces: {game.aces}</Text>
                <Text color="#000000">Digs: {game.digs}</Text>
                <Text color="#000000">Assists: {game.assists}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#4B4B4B"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#BF5700"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Passion One', sans-serif" fontSize="lg">
              Opponent
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Passion One', sans-serif" fontSize="lg">
              Date
            </FormLabel>
            <Input
              type="date"
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Passion One', sans-serif" fontSize="lg">
              Spikes
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.spikes}
              name="spikes"
              onChange={handleInputChange}
              placeholder="Enter spikes"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Passion One', sans-serif" fontSize="lg">
              Blocks
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.blocks}
              name="blocks"
              onChange={handleInputChange}
              placeholder="Enter blocks"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Passion One', sans-serif" fontSize="lg">
              Aces
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.aces}
              name="aces"
              onChange={handleInputChange}
              placeholder="Enter aces"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Passion One', sans-serif" fontSize="lg">
              Digs
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.digs}
              name="digs"
              onChange={handleInputChange}
              placeholder="Enter digs"
              type="number"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F5F5DC" fontFamily="'Passion One', sans-serif" fontSize="lg">
              Assists
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.assists}
              name="assists"
              onChange={handleInputChange}
              placeholder="Enter assists"
              type="number"
            />
          </FormControl>
          <Button colorScheme="green" onClick={handleAddGame}>
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default VolleyballStatTracker;
