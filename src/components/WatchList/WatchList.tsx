import { useContext, useEffect, useState } from 'react';
import ChangeWatchList from './ChangeWatchList';
import StockItem from '../StockItem/StockItem';
import AddToWatchList from './AddToWatchList';
import useFetch from '../../hooks/useFetch';
import {getAllocations, allocationData, getWatchlist} from '../../data/UserData.Service';
import { ActiveContext } from '../../context/StocksContext';

export interface Stock {
  symbol: string
}

const WatchList = () => {
  const [watchList, setWatchList] = useState<{ items: Stock[] }>()
  const [modal, setModal] = useState<boolean>(false);
  const [owned, setOwned] = useState<allocationData[]>([])
  const { symbol, changeSymbol } = useContext(ActiveContext);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const result = await getWatchlist();
      setWatchList({ items: result });
    }
    const fetchAllocations = async () => {
      const result = await getAllocations();
      setOwned(result);
    }
    
    fetchWatchlist();
    fetchAllocations();
  }, []);

  const handleAdd = (newItem: Stock) => {
    watchList && watchList.items.push(newItem);
    watchList && setWatchList({items: watchList.items})
  }

  const handleRemove = (newItem: Stock) => {
    
    const newList = watchList && watchList.items.filter(s => s.symbol !== newItem.symbol);
    newList && setWatchList({items: newList})
  }

  const openModal = () => {
    setModal(true)
  } 

  const closeModal = () => {
    setModal(false)
  }

  const removeFromWatchList = async (stock: string) => {
    const response = await fetch("https://demomocktradingserver.azurewebsites.net/userdata/watchlist",
    {
        body: JSON.stringify({
            symbol: stock,
            action: "REMOVE"
        }),
        method: "POST",
        headers: {
            userid: "antonio.minondo"
        }
    });

    const jsonResponse = await response.json();
    jsonResponse.success && handleRemove({symbol: stock})
}

  const remove = (e: any) => {
    console.log(e);
    e.preventDefault()
  }
  //const component = 
  return (
    <div>
      <section className="stock-list">
        <h2 className="stock-list__title">Stocks that I follow <a onClick={openModal}><span className="stock-list__btn stock-list__btn--add">+</span></a></h2>
        <AddToWatchList show={modal} onAdd={handleAdd} onClose={closeModal}/*symbol={"STRK"}*//>
        <div className="stock-list__grid">
        <div className="stock-list__grid">
          {!watchList ? <p>loading...</p> : watchList.items.length > 0 ?  
              <>{watchList.items.map((stock: Stock) => <div key={stock.symbol} onClick={() => {changeSymbol(stock.symbol); console.log(symbol)}} >
                <div className="stock-list__grid-row" > 
                <div className="stock-list__grid-cell">
                  <a onClick={() => removeFromWatchList(stock.symbol)}><span className="stock-list__btn stock-list__btn--remove">&ndash;</span></a>
                </div>
                <StockItem  symbol={stock.symbol}/></div></div>
              )}</> : <p>no stocks</p>
            
          }
        </div>
        </div>
      </section>
    </div>
    //<div>
    //    {component}
    //</div>
  )
}

export default WatchList;