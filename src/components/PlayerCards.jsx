/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
          borderColor="#BF5700"
          borderWidth="3px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#4B4B4B"
          bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #38393d 50%, #000000 75%, transparent 75%, transparent)"
          bgSize="1px 1px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          borderColor="#BF5700"
          borderWidth="3px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          {/* <Text fontSize="2xl" fontWeight="bold" color="#F28C28" fontFamily="'Passion One', sans-serif">
            {name}
          </Text> */}
          <Text mt={4} color="#F8F8F8" fontFamily="'Passion One', sans-serif" fontSize="xl" fontWeight="medium" textAlign="center">
          {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "Danica McGarity is a dominant outside hitter, known for her powerful spikes that leave defenders scrambling at the net."
    },
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "Danica McGarity’s precise serves are a nightmare for opponents, consistently finding gaps in the defense and earning aces."
    },
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "With an unmatched volleyball IQ, Danica McGarity reads the game like no other, always positioning herself perfectly for crucial digs and blocks."
    },
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "Under pressure, Danica McGarity thrives, delivering game-winning spikes and blocks that seal victories in the tightest matches."
    },
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "Danica McGarity’s impeccable defense makes her a top libero, consistently diving for seemingly unreachable balls to keep rallies alive."
    },
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "A versatile setter, Danica McGarity expertly distributes the ball, setting up her teammates for perfectly timed attacks at the net."
    },
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "Known for her ability to rise in the clutch, Danica McGarity delivers high-pressure serves and spikes when her team needs them the most."
    },
    {
      frontImg: "Danica-1.png",
      name: "Danica McGarity",
      bio: "Her mid-court defense and blocking skills make Danica McGarity a constant presence at the net, frustrating attackers with her towering reach."
    },
  ];  

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="4xl" fontWeight="medium" color="#BF5700" fontFamily="'Passion One', sans-serif">
        Player Cards    
      </Text>
      <Text fontSize="2xl" fontWeight="medium" color="#38393d" fontFamily="'Passion One', sans-serif">
        Click on card for more info
        </Text>

      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;