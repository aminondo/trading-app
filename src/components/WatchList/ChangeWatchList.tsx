import React, { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
//import StockItem from '../StockItem/StockItem';

export interface Stock {
    symbol: string
}

export interface onAddFunction {
    (stock: Stock) : void
}

export interface onRemoveFunction {
    (stock: Stock) : void
}
export interface AddToWatchListProps {
    onAdd: onAddFunction,
    onRemove: onRemoveFunction
}

const ChangeWatchList = ({onAdd, onRemove} : AddToWatchListProps) => {
    const [stock, setStock] = useState<string>("");
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
    const removeFromWatchList = async () => {
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
        jsonResponse.success && onRemove({symbol: stock})
    }
    const handleAdd = (e: any) => {
        e.preventDefault();
        addToWatchList();
    }

    const handleRemove = (e: any) => {
        e.preventDefault();
        removeFromWatchList();
    }
    return (
        <div>
            <form onSubmit={(e: any) => e.preventDefault()}>
                <input type={'text'} id={'stock'} value={stock} onChange={(e:any) => { setStock(e.target.value); }} />
                <button onClick={handleAdd}>Add stock to watchlist</button>
                <button onClick={handleRemove}>Remove stock from watchlist</button>
            </form>
        </div>
    )
}

export default ChangeWatchList;