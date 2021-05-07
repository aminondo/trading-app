import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Assets from './pages/Assets/Assets';
import Details from './pages/Details/Details';
import './App.css';
import { useContext, useEffect } from 'react';
import { AssetsContext, Asset } from './context/AssetsContext';
import { getAllocations } from './data/UserData.Service';
import { getStockPrice } from './data/Stocks.Service';

function App() {
  const { items, setItems } = useContext(AssetsContext)

  useEffect(() => {
    console.log('getting allocations');
    const fetchAssets = async () => {
      const assets: Asset[] = [];
      const result = await getAllocations();
      //console.log(result);

      for (let i = 0; i < result.length; i++) {
        const stockPrice = await getStockPrice(result[i].symbol)
        //console.log(stockPrice);
        const stock: Asset = {
          symbol: result[i].symbol,
          amount: result[i].amount,
          currentPrice: stockPrice.price,
          total: result[i].amount * stockPrice.price
        }
        assets.push(stock)
      }
      setItems(assets);
    }
    fetchAssets();
  }, [])
  return (
    <Router>
      <header className="main-header">
        <nav>
          <ul className="menu">
            <li className="menu__list-item"><Link to="/">Home</Link></li>
            <li className="menu__list-item"><Link to="/assets">Assets</Link></li>
            <li className="menu__list-item"><Link to="/details">Details</Link></li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/details/:stock?"><Details /></Route>
        <Route path="/assets"><Assets /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
