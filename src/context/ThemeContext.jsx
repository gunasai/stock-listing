import { createContext } from 'react';

const ColorModeContext = createContext({
  changeTheme: () => {},
});

export default ColorModeContext;
