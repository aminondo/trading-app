export interface stockTransactionProps {
  symbol: string,
  amount: number,
  side: string
}

export const executeTransaction = async (props: stockTransactionProps) => {
  const response = await fetch("https://demomocktradingserver.azurewebsites.net/transactions",
    {
      body: JSON.stringify({
        symbol: props.symbol,
        side: props.side,
        amount: props.amount
      }),
      method: "POST",
      headers: {
        userid: "antonio.minondo",
        "Content-Type": "application/json",

      }
    });

  const jsonResponse = await response.json();
  return jsonResponse;
}

export const getTransactions = async () => {
  const response = await fetch("https://demomocktradingserver.azurewebsites.net/transactions",
    {
      method: "GET",
      headers: {
        userid: "antonio.minondo"
      }
    });

  const jsonResponse = await response.json();
  return jsonResponse;
}
