import { useEffect, useState } from 'react';
import { getTransactions } from '../../data/Transaction.Service'
import TransactionItem from './TransactionItem';

const TransationsList = () => {
    const [transactions, setTransactions] = useState<any>([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const result = await getTransactions();
            setTransactions(result);
        }
        fetchTransactions()
    }, [])
    return <section className="stock-transactions full-width">
        <div className="stock-transactions__grid-row">
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">Transaction ID</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">stock</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">amount</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">direction</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">price</span></div>
            <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">total</span></div>
        </div>
        {transactions.map((transaction:any, index: number) => <TransactionItem key={index} index={index} symbol={transaction.symbol} amount={transaction.amount} side={transaction.side} tickPrice={transaction.tickPrice} cost={transaction.cost} date={transaction.date}/>)}
    </section>;
}

export default TransationsList;