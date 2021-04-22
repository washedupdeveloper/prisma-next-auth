import { Flex, Heading } from '@chakra-ui/react';

export const Header = ({ title }: { title: string }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

Header.defaultProps = {
  title: 'Super  eye catchy header',
};
