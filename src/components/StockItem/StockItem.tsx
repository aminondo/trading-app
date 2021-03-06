import { useState, useEffect, useContext } from "react";
import LiveData from "../../data/LiveData.Service";
//import { executeTransaction } from "../../data/Transaction.Service";
import ExecuteStockTransaction from './ExecuteStockTransaction';
import { ActiveContext } from '../../context/StocksContext';

interface StockItemProps {
    symbol: string;
    //price: number;
    //shares: number;
}

const StockItem = (props: StockItemProps) => {
  const [price, setPrice] = useState(0);
  const [shares, setShares] = useState(0);
  const [modal, setModal] = useState<boolean>(false);
  const [type, setType] = useState<string>("BUY")
  const { symbol, changeSymbol } = useContext(ActiveContext);
  const handleBuy = (amount: number) => {
    const totalSum = shares + amount;
    setShares(totalSum);
  }

  const handleSell = (amount: number) => {
    const totalSum = shares - amount;
    setShares(totalSum);
  }

  const clickBuy = () => {
    setModal(true)
    setType("BUY")
  } 
  const clickSell = () => {
    setModal(true)
    setType("SELL")
  } 
  const closeModal = () => {
    setModal(false)
  }

  useEffect(() => {
    LiveData.subscribe(props.symbol, setPrice);
    return () => {LiveData.unsubscribe(props.symbol)} 
  }, []);
    return (
        <>
          <ExecuteStockTransaction show={modal} onClose={closeModal} onChange={type == "BUY" ? handleBuy : handleSell} type={type} stockSymbol={props.symbol}/>
          <div onClick={() => changeSymbol(props.symbol)} className="stock-list__grid-cell">{props.symbol}</div>
          <div className="stock-list__grid-cell">{price == 0 ? "" : price.toFixed(2)}</div>
          <div className="stock-list__grid-cell">
              <a onClick={() => clickBuy()}><span className="btn-transaction btn-transaction--buy">buy</span></a>
          </div>
          <div className="stock-list__grid-cell">
              <a onClick={() => clickSell()}><span className="btn-transaction btn-transaction--sell">sell</span></a>
          </div>
          <div className="stock-list__grid-cell">{shares > 0 ? shares : ""}</div>
      </>
    );
}

export default StockItem;