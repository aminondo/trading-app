import { useEffect, useState } from "react";

interface ItemProps {
  index: number;
  symbol: string;
  side: string;
  amount: number;
  tickPrice: number;
  cost: number;
  date: string;
}

const TransactionItem = (props: ItemProps) => {
  return (
    <>
      <div className="stock-transactions__grid-row">
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{props.index}</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{props.symbol}</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{props.amount}</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-cell-sell">{props.side}</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{props.tickPrice}</span></div>
        <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">{props.cost}</span></div>
    </div>
    </>
  );
}

export default TransactionItem;