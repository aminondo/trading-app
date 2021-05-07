import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Stock } from './ChangeWatchList';
import StockList from '../StockList/StockList';


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
  onClose: closeModalFunction
  //symbol: string
}
const AddToWatchList = ({ onAdd, show, onClose }: AddToWatchListProps) => {
  const [stock, setStock] = useState<string>("");
  const showHideClassName = show ? "modal visible" : "modal"
  const [stocksData, stocksLoading, stocksError] = useFetch<stockData[]>('/stocks');
  
  //init stock value
  if (stock == "" && !stocksLoading && stocksData) {
    setStock(stocksData[0].symbol);
  }
  
  
  const addToWatchList = async () => {
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
      jsonResponse.success && onAdd({symbol: stock})
  }
  
  const handleSelect = (e: any) => {
    e.preventDefault();
    setStock(e.target.value)
  }

  const handleAdd = (e: any) => {
      e.preventDefault();
      console.log(stock)
      addToWatchList();
  }

  const component = show ?
    <>
      <div className={showHideClassName}>
        <div className="modal__overlay" onClick={onClose}></div>
        <div className="modal__content">
          <div className="modal__close" onClick={onClose}>x</div>
          <h2 className="modal__h2">Select a new stock to follow</h2>
          {!stocksLoading && stocksData ? <>
            <select className="modal__dropdown" onChange={handleSelect}>
              {stocksData.map((stock: stockData) => <option value={stock.symbol} key={stock.symbol}>{stock.name}</option>)}
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