interface StockItemProps {
    name: string;
    setHighlight: (name: string) => void;
    isHighlighted: boolean;
}

const StockItem = (props: StockItemProps) => {
    return (
        <div className="stock-list__grid-row">
            <div className="stock-list__grid-cell">
                
            </div>
        </div>
    );
}

export default StockItem;