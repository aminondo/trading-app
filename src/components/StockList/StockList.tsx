import { useState } from 'react';
import { isConstructorDeclaration } from 'typescript';
import StockItem from '../StockItem/StockItem';

const StockList = () => {
    return (
        <section className="stock-list">
            <h2 className="stock-list__title">Stocks that I follow <a><span className="stock-list__btn stock-list__btn--add">+</span></a></h2>
            <div className="stock-list__grid">
                <div className="stock-list__grid-row">
                    <div className="stock-list__grid-cell">
                        <a><span className="stock-list__btn stock-list__btn--remove">&ndash;</span></a>
                    </div>
                    <div className="stock-list__grid-cell">AAPL</div>
                    <div className="stock-list__grid-cell">253.4</div>
                    <div className="stock-list__grid-cell">
                        <a><span className="btn-transaction btn-transaction--buy">buy</span></a>
                    </div>
                    <div className="stock-list__grid-cell">
                        <a><span className="btn-transaction btn-transaction--sell">sell</span></a>
                    </div>
                    <div className="stock-list__grid-cell">35</div>
                </div>
                <div className="stock-list__grid-row">
                    <div className="stock-list__grid-cell">
                        <a><span className="stock-list__btn stock-list__btn--remove">&ndash;</span></a>
                    </div>
                    <div className="stock-list__grid-cell">MSFT</div>
                    <div className="stock-list__grid-cell">456</div>
                    <div className="stock-list__grid-cell">
                        <a><span className="btn-transaction btn-transaction--buy">buy</span></a>
                    </div>
                </div>
                <div className="stock-list__grid-row">
                    <div className="stock-list__grid-cell">
                        <a><span className="stock-list__btn stock-list__btn--remove">&ndash;</span></a>
                    </div>
                    <div className="stock-list__grid-cell">GOOG</div>
                    <div className="stock-list__grid-cell">1005.3</div>
                    <div className="stock-list__grid-cell">
                        <a><span className="btn-transaction btn-transaction--buy">buy</span></a>
                    </div>
                    <div className="stock-list__grid-cell">
                        <a><span className="btn-transaction btn-transaction--sell">sell</span></a>
                    </div>
                    <div className="stock-list__grid-cell">12</div>
                </div>
            </div>
        </section>

    )
}

export default StockList;