import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { StockOverviewPage } from './pages/StockOverviewPage';
import { StockDetailPage } from './pages/StockDetailPage';
import ToggleThemeButton from './components/ToggleThemeButton';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24, // 24 hours,
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxW='container.xl'>
        <ToggleThemeButton />
        <BrowserRouter>
          <Routes>
            <Route path='/detail/:symbol' element={<StockDetailPage />} />
            <Route path='/' element={<StockOverviewPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
