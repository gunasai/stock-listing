import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { StockOverviewPage } from './pages/StockOverviewPage';
import { StockDetailPage } from './pages/StockDetailPage';

function App() {
  return (
    <Container centerContent>
      <BrowserRouter>
        <Routes>
          <Route path='/detail/:symbol' element={<StockDetailPage />} />
          <Route path='/' element={<StockOverviewPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
