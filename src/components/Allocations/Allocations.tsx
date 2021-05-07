import { useContext, useState } from 'react';
import { AssetsContext, Asset } from '../../context/AssetsContext';
import ExecuteStockTransaction from '../../components/StockItem/ExecuteStockTransaction';

interface props {
    symbol?: string
}

const Allocations = (props: props) => {
    const { items, setItems } = useContext(AssetsContext);
    const [asset, setStock] = useState<Asset>(items[0]);
    const [modal, setModal] = useState<boolean>(false);
    const type = "SELL";

    const handleSell = (amount: number) => {
        //const totalSum = shares - amount;
        //setShares(totalSum);
    }
    const clickSell = (stock: Asset) => {
        setStock(stock);
        setModal(true)
      } 
    const closeModal = () => {
        setModal(false)
      }
    
    return (
        <section className="stock-transactions full-width">
            {asset ? <ExecuteStockTransaction show={modal} onClose={closeModal} onChange={handleSell} type={type} stockSymbol={asset.symbol}/> : null}
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">stock</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">amount</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">current price</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">total</span></div>
                <div className="stock-transactions__grid-cell"></div>
            </div>
            {items.map((stock: Asset) => <div key={stock.symbol} className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">{stock.symbol}</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">{stock.amount}</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">{stock.currentPrice}</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">{stock.total}</span></div>
                <div className="stock-transactions__grid-cell"><a onClick={() => clickSell(stock)}><span className="btn-transaction btn-transaction--sell">sell</span></a></div>
            </div>)}
        </section>
    );
};


export default Allocations;