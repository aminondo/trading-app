import { useContext } from 'react';
//import { useParams } from 'react-router-dom';
import { ActiveContext } from '../../context/StocksContext';
import StockGraph  from '../../components/StockGraph/StockGraph';
import TransactionList from '../../components/TransactionsList/TransactionsList';

interface RouteParams {
    stock?: string
};

const Details = () => {
    const { symbol, changeSymbol } = useContext(ActiveContext);

    //const { stock } = useParams<RouteParams>();

    return (
        <div>
            <StockGraph/>
            <TransactionList symbol={symbol}/>
        </div>
        
    )
}

export default Details;