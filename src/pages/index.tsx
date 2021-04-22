import { LockIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Center,
  Flex,
  HStack,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { Container } from '../components/Container';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { makeFakeQuery, Routes } from '../utils/constants';

const Index = () => {
  const [session, _loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(makeFakeQuery());
  }, []);

  return (
    <Container height="100vh">
      <Header />
      <Main>
        {/* Temporary spinner component while loading..
        {loading && (
          <Center>
            <Spinner size="xl" />
          </Center>
        )} */}

        <VStack maxW="60%" alignSelf="center">
          <Text>
            Below you'll find two links; one which takes you to a protected our and the other which is a publicly
            available route
          </Text>
          <Text>
            The private route will query data from a database, where as the public will simply mock a query from a json
            file
          </Text>
        </VStack>
        <Center>
          <List spacing={3} my={0}>
            <ListItem>
              <ListIcon as={LockIcon} color="red.500" />
              <ChakraLink onClick={() => router.push(Routes.private)} flexGrow={1} mr={2}>
                Authenticated API route
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ListIcon as={ViewIcon} color="green.500" />
              <ChakraLink onClick={() => router.push(Routes.public)} flexGrow={1} mr={2}>
                Unauthenticated API route
              </ChakraLink>
            </ListItem>
          </List>
        </Center>
      </Main>

      <DarkModeSwitch />

      <Footer>
        {!session && <Button onClick={() => signIn()}>Click here to Log in</Button>}

        {session && (
          <VStack spacing={16}>
            <HStack>
              <Text fontSize="2xl">Hello there</Text>
              <Flex alignItems="center">
                <Text fontSize="2xl" fontWeight="semibold">
                  {session?.user?.name}
                </Text>
                <Avatar name={session.user?.name ?? '? ?'} src={session.user?.image ?? ''} mx={4} />
              </Flex>
            </HStack>

            <Button onClick={() => signOut()} variant="outline">
              Click here to Log out
            </Button>
          </VStack>
        )}
      </Footer>
    </Container>
  );
};
export default Index;
