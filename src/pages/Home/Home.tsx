import useFetch from '../../hooks/useFetch';
import StockGraph from '../../components/StockGraph/StockGraph';
import WatchList from '../../components/WatchList/WatchList';
import TransactionList from '../../components/TransactionsList/TransactionsList';
const Home = () => {
    const data = useFetch('/stocks');
    console.log(data);
    return (
        <div>
            <WatchList/>
            <StockGraph/>
            <TransactionList/>
        </div>

    );
};

export default Home;