import useFetch from '../../hooks/useFetch';
import StockList from '../../components/StockList/StockList';
import StockGraph from '../../components/StockGraph/StockGraph';
import WatchList from '../../components/WatchList/WatchList';

const Home = () => {
    const data = useFetch('/stocks');
    console.log(data);
    return (
        <div>
            <WatchList/>
            <section className="stock-list">
                <h2 className="stock-list__title">Stocks that I follow <a><span className="stock-list__btn stock-list__btn--add">+</span></a></h2>
                <StockList />
            </section>
            <StockGraph name="appl" />
        </div>

    );
};

export default Home;