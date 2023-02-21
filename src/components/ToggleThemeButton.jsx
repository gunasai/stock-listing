import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as='nav'>
      <Spacer />
      <Box my='16px'>
        <Button variant='ghost' onClick={() => toggleColorMode()}>
          {colorMode === 'dark' ? <SunIcon color='yellow.400' /> : <MoonIcon />}
        </Button>
      </Box>
    </Flex>
  );
};

export default ToggleThemeButton;
