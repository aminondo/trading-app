//import { useEffect, useState } from 'react';
//import { isConstructorDeclaration } from 'typescript';
import useFetch from '../../hooks/useFetch';
//import StockItem from '../StockItem/StockItem';


interface stockData {
  name: string,
  symbol: string,
  lastTick: {
    date: string
    price: number
    stock: string
  }
}

const StockList = () => {
  //const [stocks, setStocks] = useState<stockData[]>()
  const [stocksData, stocksLoading, stocksError] = useFetch<stockData[]>('/stocks');
  //console.log(stocksData);
  //console.log(stocksLoading);
  //console.log(data.data.filter((s:any) => {return s.name && s.symbol}))
  
  //const result = useFetch('/stocks');
  //console.log(result.data);      
  return (
    !stocksLoading && stocksData ? <>
      <select className="modal__dropdown">
        {stocksData.map((stock: stockData) => <option value={stock.symbol}>{stock.name}</option>)}
      </select> 
    </> : <p>loading...</p>
  )
}

export default StockList;