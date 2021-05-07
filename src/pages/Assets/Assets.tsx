//import { useContext, useState } from 'react';
//import { AssetsContext, Asset } from '../../context/AssetsContext';
//import ExecuteStockTransaction from '../../components/StockItem/ExecuteStockTransaction';
import Allocations from '../../components/Allocations/Allocations';

const Assets = () => {
    /*
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
    */
    return (
        <div>
            <Allocations/>
        </div>
    );
};


export default Assets;