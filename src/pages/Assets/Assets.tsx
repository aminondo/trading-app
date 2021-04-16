const Assets = () => (
    <section className="stock-transactions full-width">
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">stock</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">amount</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">current price</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text stock-transactions__grid-text--white">total</span></div>
                <div className="stock-transactions__grid-cell"></div>
            </div>
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">AAPL</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">35</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">253.4</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">8869</span></div>
                <div className="stock-transactions__grid-cell center">
                    <a><span className="btn-transaction btn-transaction--sell">sell</span></a>
                </div>
            </div>
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">GOOG</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">12</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">1005.3</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">12063.6</span></div>
                <div className="stock-transactions__grid-cell center">
                    <a><span className="btn-transaction btn-transaction--sell">sell</span></a>
                </div>
            </div>
            <div className="stock-transactions__grid-row">
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">Liquidity</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">100000</span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text"></span></div>
                <div className="stock-transactions__grid-cell"><span className="stock-transactions__grid-text">100000</span></div>
                <div className="stock-transactions__grid-cell center"></div>
            </div>
        </section>
);

export default Assets;