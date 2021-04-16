import { useEffect, useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
//import StockItem from '../StockItem/StockItem';
import ChangeWatchList, { Stock } from './ChangeWatchList';
import AddToWatchList from './AddToWatchList';

const WatchList = () => {
  const [watchList, setWatchList] = useState<{ items: Stock[] }>()
  const [modal, setModal] = useState<boolean>(false)
  //setWatchList("okta");

  useEffect(() => {
    (async () => {
      const response = await fetch("https://demomocktradingserver.azurewebsites.net/userdata/watchlist",
        {
          headers: {
            userid: "antonio.minondo"
          }
        });

      const jsonData = await response.json()
      setWatchList({ items: jsonData });
    })();
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

  //const component = 
  return (
    <div>
      <section className="stock-list">
        <h2 className="stock-list__title">Stocks that I follow <a onClick={openModal}><span className="stock-list__btn stock-list__btn--add">+</span></a></h2>
        <AddToWatchList show={modal} onAdd={handleAdd} onClose={closeModal}/*symbol={"STRK"}*//>
      </section>
      <p>A watchlist</p>
      <main>
        {!watchList ? <div>loading...</div> : 
          watchList.items.length > 0 ? <ul>{watchList.items.map((stock: Stock) => <li key={stock.symbol}>{`Ticker: ${stock.symbol}`}</li>)}</ul> : 
            <p>no stocks</p>
        }
        <ChangeWatchList onRemove={handleRemove} onAdd={handleAdd} />
      </main>
    </div>
    //<div>
    //    {component}
    //</div>
  )
}

export default WatchList;