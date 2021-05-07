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


  const handleTransaction = async () => {
    console.log('executing');
    const params : stockTransactionProps = {
      symbol: stockSymbol,
      amount,
      side: type
    }
    const jsonResponse  = await executeTransaction(params);
    console.log(jsonResponse);
    onClose();
  }

  /*
  const handleSell = () => {

  }
  */
  const handleInput = (e:any) => {
    e.preventDefault();
    //console.log(e.target.value);
    setAmount(e.target.value);
  }
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
          <h2 className="modal__h2">{type == "BUY" ?`Buy ${stockSymbol} Stock` : `Sell ${stockSymbol} Stock`}: </h2>
          <input className="modal__number-box" type="number" name="quantity" placeholder="enter amount" onChange={handleInput}/>
          <button onClick={() => handleTransaction()} className="modal__btn">{type == "BUY" ? "Buy" : "Sell"}</button>
          
          
        </div>
      </div>
    </> : null;
  return (
    <>{component}</>
  )
}

export default ExecuteStockTransaction;