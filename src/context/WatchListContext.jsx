import { useState, createContext, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchStocks from '../services/fetchStocks';

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);

  const { data, error, isError, isLoading, refetch } = useQuery(['stocks', watchList], fetchStocks);

  useEffect(() => {
    refetch();
  }, [watchList]);

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    setWatchList(watchList.filter((item) => item !== stock));
  };

  const results = data;

  return (
    <WatchListContext.Provider
      value={{ watchList, addStock, deleteStock, results, error, isError, isLoading }}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};
