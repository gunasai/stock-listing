import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ColorModeContext from '../context/ThemeContext';

const ToggleThemeButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Stack justifyContent='center' alignItems='flex-end' spacing={2}>
      <IconButton sx={{ mt: 5 }} onClick={colorMode.toggleColorMode} color='inherit'>
        {theme.palette.mode === 'dark' ? <LightModeIcon color='warning' /> : <DarkModeIcon />}
      </IconButton>
    </Stack>
  );
};

export default ToggleThemeButton;
