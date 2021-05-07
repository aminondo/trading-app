import React, {useState, ReactElement} from "react";

interface ActiveContextType {
    symbol: string,
    changeSymbol: (symbol: string) => void;
}

export const ActiveContext = React.createContext<ActiveContextType>(
    {
        symbol: "ACME",
        changeSymbol: (symbol) => null,
    }
)

interface ChildProps {
    children:any
}
export const ActiveContextProvider: React.FC<ChildProps> = ({ children }):ReactElement => {
    const [ symbol, changeSymbol ] = useState("ACME");
    return (
        <ActiveContext.Provider value={{symbol, changeSymbol}}>
            {children}
        </ActiveContext.Provider>
    )
}