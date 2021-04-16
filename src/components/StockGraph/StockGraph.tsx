interface StockItemProps {
    name: string;
    //setHighlight: (name: string) => void;
    //isHighlighted: boolean;
}

const StockGraph = (props: StockItemProps) => {
    return (
        <section className="stock-graph">
            <div id="stockGraphContainer" className="stock-graph__container"><p>Stock: {props.name}</p></div>
        </section>
    );
}

export default StockGraph;