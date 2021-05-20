import { useContext } from 'react';
//import { useParams } from 'react-router-dom';
import { ActiveContext } from '../../context/StocksContext';
import StockGraph  from '../../components/StockGraph/StockGraph';
import TransactionList from '../../components/TransactionsList/TransactionsList';
import StockItem from '../../components/StockItem/StockItem';

interface RouteParams {
    stock?: string
};

const Details = () => {
    const { symbol, changeSymbol } = useContext(ActiveContext);

    //const { stock } = useParams<RouteParams>();

    return (
        <div>
            <div className="stock-list__grid-cell stock-list__grid-cell--txt-blue">▼</div><StockItem symbol={symbol}/>
            <div className="stock-title-right"><StockGraph/></div>
            <TransactionList symbol={symbol}/>
        </div>
        
    )
}

export default Details;