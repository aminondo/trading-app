//import { useContext, useEffect } from 'react';
import StockGraph from '../../components/StockGraph/StockGraph';
import WatchList from '../../components/WatchList/WatchList';
import TransactionList from '../../components/TransactionsList/TransactionsList';
//import { AssetsContext } from '../../context/AssetsContext';

const Home = () => {
    //const { items, setItems } = useContext(AssetsContext)
    
    //useEffect(() => {
        /*console.log('getting allocations');
        const fetchAssets = async () => {
            const assets: Asset[] = []; 
            const result = await getAllocations();
            console.log(result);
            
            for(let i=0; i< result.length; i++) {
                const stockPrice = await getStockPrice(result[i].symbol)

                const stock : Asset = {
                    symbol: result[i].symbol,
                    amount: result[i].amount,
                    currentPrice: 0,
                    total: result[i].amount * stockPrice.price
                }
                assets.push(stock)
            }
            setItems(assets);
        }
        fetchAssets();*/
    //}, [])
    
    return (
        <div>
            <WatchList/>
            <div className="stock-graph">
                <StockGraph/>
            </div>
            <TransactionList/>
        </div>

    );
};

export default Home;