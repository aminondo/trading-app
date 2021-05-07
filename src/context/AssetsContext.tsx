import React, {useState, ReactElement} from "react";

export interface Asset {
    symbol: string,
    amount: number,
    currentPrice: number,
    total: number
}
interface AssetContextType {
    items : Asset[],
    setItems: (items: Asset[]) => void;
}

export const AssetsContext = React.createContext<AssetContextType>(
    {
        items: [],
        setItems: (items) => null
    }
)

interface ChildProps {
    children:any
}
export const AssetsContextProvider: React.FC<ChildProps> = ({ children }):ReactElement => {
    const [ items, setItems ] = useState<Asset[]>([]);
    return (
        <AssetsContext.Provider value={{items, setItems}}>
            {children}
        </AssetsContext.Provider>
    )
}