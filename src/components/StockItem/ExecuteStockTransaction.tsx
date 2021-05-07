import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { executeTransaction, stockTransactionProps } from '../../data/Transaction.Service';
//import { Stock } from './ChangeWatchList';
//import StockList from '../StockList/StockList';


export interface onChangeFunction {
  (amount: number): void
}

export interface closeModalFunction {
  (): void
}
/*
interface stockData {
  name: string,
  symbol: string,
  lastTick: {
    date: string
    price: number
    stock: string
  }
}
*/
export interface TransactionProps {
  onChange: onChangeFunction,
  show: boolean,
  type: string,
  stockSymbol: string,
  onClose: closeModalFunction
  //symbol: string
}
const ExecuteStockTransaction = ({ onChange, show,type,stockSymbol, onClose }: TransactionProps) => {
  //const [stock, setStock] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const showHideClassName = show ? "modal visible" : "modal"
  //const [stocksData, stocksLoading, stocksError] = useFetch<stockData[]>('/stocks');
  
  /*
  if (stock == "" && !stocksLoading && stocksData) {
    setStock(stocksData[0].symbol);
  }
  */

  
  const component = show ?
    <>
      <div className={showHideClassName}>
        <div className="modal__overlay" onClick={onClose}></div>
        <div className="modal__content">
          <div className="modal__close" onClick={onClose}>x</div>
          <h2 className="modal__h2">{type}: {stockSymbol}</h2>
          

          
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

export default ExecuteStockTransaction;