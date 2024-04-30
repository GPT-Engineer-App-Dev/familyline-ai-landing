import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { FaLine } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="gray.50" minH="100vh" p={5}>
      <Flex direction="column" align="center" justify="center" gap={10}>
        <Heading as="h1" size="2xl" color="teal.500">Welcome to CloudNurse</Heading>
        <Text fontSize="xl" textAlign="center" maxWidth="600px">
          CloudNurse is a revolutionary app designed for nursing homes, enhancing communication with family members and leveraging AI to assist in response generation.
        </Text>
        <Image src="/images/landing-page-hero.jpg" alt="CloudNurse Hero" borderRadius="lg" boxShadow="xl" />
        <Flex direction="column" align="center" gap={5}>
          <Box p={5} bg="white" borderRadius="lg" boxShadow="md" w="full" maxW="md">
            <Heading as="h3" size="lg" color="purple.600">Family Communication</Heading>
            <Text>
              Stay connected with your loved ones through seamless integration with LINE. Share updates and receive notifications effortlessly.
            </Text>
            <Button leftIcon={<FaLine />} colorScheme="green" mt={3}>
              Connect with LINE
            </Button>
          </Box>
          <Box p={5} bg="white" borderRadius="lg" boxShadow="md" w="full" maxW="md">
            <Heading as="h3" size="lg" color="orange.400">AI-Powered Assistance</Heading>
            <Text>
              Our AI technology helps generate appropriate and empathetic responses, making communication smoother and more meaningful.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;