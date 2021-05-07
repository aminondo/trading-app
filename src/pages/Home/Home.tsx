import { useContext, useEffect } from 'react';

//import useFetch from '../../hooks/useFetch';
import StockGraph from '../../components/StockGraph/StockGraph';
import WatchList from '../../components/WatchList/WatchList';
import TransactionList from '../../components/TransactionsList/TransactionsList';
import { AssetsContext } from '../../context/AssetsContext';
//import { getAllocations } from '../../data/UserData.Service';
//import { getStockPrice } from '../../data/Stocks.Service';



const Home = () => {
    const { items, setItems } = useContext(AssetsContext)
    
    useEffect(() => {
        console.log(items);
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
    }, [])
    //const data = useFetch('/stocks');
    //console.log(data);
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