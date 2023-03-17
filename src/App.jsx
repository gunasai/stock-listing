import { useState, useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { StockOverviewPage } from './pages/StockOverviewPage';
import { StockDetailPage } from './pages/StockDetailPage';
import ToggleThemeButton from './components/ToggleThemeButton';
import ColorModeContext from './context/ThemeContext';
import { WatchListContextProvider } from './context/WatchListContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours,
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours,
    },
  },
});

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <WatchListContextProvider>
            <QueryClientProvider client={queryClient}>
              <Container maxWidth='xl'>
                <ToggleThemeButton />
                <BrowserRouter>
                  <Routes>
                    <Route path='/detail/:symbol' element={<StockDetailPage />} />
                    <Route path='/' element={<StockOverviewPage />} />
                  </Routes>
                </BrowserRouter>
              </Container>
            </QueryClientProvider>
          </WatchListContextProvider>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
