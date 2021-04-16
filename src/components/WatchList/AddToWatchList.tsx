import { useState } from 'react';
import { Stock } from './ChangeWatchList';

export interface onAddFunction {
    (stock: Stock) : void
}

export interface closeModalFunction {
    () : void
}

export interface AddToWatchListProps {
    onAdd: onAddFunction,
    show: boolean,
    onClose: closeModalFunction
    //symbol: string
}
const AddToWatchList = ({onAdd, show, onClose} : AddToWatchListProps) => {
//const AddToWatchList = (show : boolean) => {
    //const [stock, setStock] = useState<string>("");
    //const [showModal, setShowModal] = useState<boolean>(false);
    const showHideClassName = show ? "modal visible" : "modal"

    /*
    const addToWatchList = async () => {
        const response = await fetch("https://demomocktradingserver.azurewebsites.net/userdata/watchlist",
        {
            body: JSON.stringify({
                symbol: stock,
                action: "ADD"
            }),
            method: "POST",
            headers: {
                userid: "antonio.minondo"
            }
        });

        const jsonResponse = await response.json();
        jsonResponse.success && onAdd({symbol: stock})
    }
    
    const handleAdd = (e: any) => {
        e.preventDefault();
        console.log(stock)
        addToWatchList();
    }
*/
    //const handleClose = () => {
     //   show = false
        //etShowModal(false);
    //}

    //const handleShow = () => {
      //  setShowModal(true);
    //}
    const component = show ? 
        <>
            <div className={showHideClassName}>
                <div className="modal__overlay" onClick={onClose}></div>
                <div className="modal__content">
                    <div className="modal__close" onClick={onClose}>x</div>
                    <h2 className="modal__h2">Select a new stock to follow</h2>
                    <select className="modal__dropdown">
                        <option value="AMZN">Amazon</option>
                        <option value="DSNY">Disney</option>
                        <option value="HULU">Hulu</option>
                        <option value="NTFLX">Netflix</option>
                    </select>

                    <button className="modal__btn">Add</button>
                </div>
            </div>
        </> : null;
    return (
        //<>
        //    <a onClick={handleAdd}><span className="stock-list__btn stock-list__btn--add">+</span></a>
        //</>
        <>{component}</>
    )
}

export default AddToWatchList;