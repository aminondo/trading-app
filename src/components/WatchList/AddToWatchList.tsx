import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { Stock } from './ChangeWatchList';
import StockList from '../StockList/StockList';
import { getAvailableStocks } from '../../data/Stocks.Service';

export interface onAddFunction {
  (stock: Stock): void
}

export interface closeModalFunction {
  (): void
}

interface stockData {
  name: string,
  symbol: string,
  lastTick: {
    date: string
    price: number
    stock: string
  }
}

export interface AddToWatchListProps {
  onAdd: onAddFunction,
  show: boolean,
  onClose: closeModalFunction,
  watchList: Stock[]
  //symbol: string
}
const AddToWatchList = ({ onAdd, show, onClose, watchList }: AddToWatchListProps) => {
  const [stock, setStock] = useState<string>("");
  const showHideClassName = show ? "modal visible" : "modal"
  const [ stockData, setStockData ] = useState<stockData[]>()
  //const [stocksData, stocksLoading, stocksError] = useFetch<stockData[]>('/stocks');
  
  //init stock value
  //if (stock == "" && !stocksLoading && stocksData) {
  //  setStock(stocksData[0].symbol);
  //}
  useEffect(() => {
    const fetchStockData = async () => {
      const result = await getAvailableStocks();
      setStockData(result);
      setStock(result[0].symbol);
      console.log(result);
    }
    fetchStockData()
  }, []);
  
  
  const addToWatchList = async () => {
    console.log(stock);
    let exists = false;
    for(let i=0; i< watchList.length;i++) {
      if (watchList[i].symbol === stock) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      const response = await fetch("https://demomocktradingserver.azurewebsites.net/userdata/watchlist",
      {
          body: JSON.stringify({
              symbol: stock,
              action: "ADD"
          }),
          method: "POST",
          headers: {
              userid: "antonio.minondo"
          }
      });

      const jsonResponse = await response.json();
      console.log(jsonResponse);
      jsonResponse.success && onAdd({symbol: stock})
    }
  }
  
  const handleSelect = (e: any) => {
    e.preventDefault();
    setStock(e.target.value)
  }

  const handleAdd = (e: any) => {
      e.preventDefault();
      //console.log(stock)
      addToWatchList();
  }

  const component = show ?
    <>
      <div className={showHideClassName}>
        <div className="modal__overlay" onClick={onClose}></div>
        <div className="modal__content">
          <div className="modal__close" onClick={onClose}>x</div>
          <h2 className="modal__h2">Select a new stock to follow</h2>
          {stockData ? <>
            <select className="modal__dropdown" onChange={handleSelect} value={stock}>
              {stockData.map((stock: stockData) => <option value={stock.symbol} key={stock.symbol}>{stock.name}</option>)}
            </select>
            <button className="modal__btn" onClick={handleAdd}>Add</button> </>
            : <p>loading...</p>}

          
        </div>
      </div>
    </> : null;
  return (
    //<>
    //    <a onClick={handleAdd}><span className="stock-list__btn stock-list__btn--add">+</span></a>
    //</>
    <>{component}</>
  )
}

export default AddToWatchList;