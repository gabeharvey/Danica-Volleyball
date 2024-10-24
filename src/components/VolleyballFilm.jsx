/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        borderWidth="4px"
        borderColor="#B22222"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#B22222"
        bgImage="linear-gradient(-45deg, #B22222 25%, transparent 25%, transparent 50%, #B22222 50%, #B22222 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#F5F5F5" h="30%">
          <Text fontSize="2xl" fontWeight="semibold" color="#38393d" fontFamily="'Passion One', sans-serif">
            {title}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="bold" color="#38393d" fontFamily="'Roboto+Condensed', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function VolleyballFilm() {
    const videos = [
        {
          videoSrc: "Danica-volley-1.MOV",
          title: "Danica's Game-Winning Spike",
          description: "Clutch Point",
        },
        {
          videoSrc: "Danica-volley-2.mov",
          title: "Danica Volleyball Training",
          description: "Intense Practice Session",
        },
        {
          videoSrc: "Danica-volley-3.MOV",
          title: "Danica's Perfect Serve",
          description: "Mastering the Art of the Jump Serve",
        },
        {
          videoSrc: "Danica-volley-4.MOV",
          title: "Danica's Quick Digs",
          description: "Fast and Accurate Defensive Plays",
        },
        {
          videoSrc: "Danica-volley-5.MOV",
          title: "Danica's Block at the Net",
          description: "Incredible Block to Stop a Spike",
        },
        {
          videoSrc: "../volley-video6.mp4",
          title: "Danica's Set for the Win",
          description: "Precision Setting Techniques",
        },
        {
          videoSrc: "../volley-video7.mp4",
          title: "Danica Championship Match",
          description: "Highlights from the Finals",
        },
        {
          videoSrc: "../volley-video8.mp4",
          title: "Danica's Volleyball Highlights",
          description: "Top Plays from Tournaments",
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
      <Text fontSize="4xl" fontWeight="medium" color="#F5F5DC" fontFamily="'Passion One', sans-serif">
        Volleyball Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default VolleyballFilm;