export const getAvailableStocks = async () => {
  try {
    const response = await fetch("https://demomocktradingserver.azurewebsites.net/stocks",
      {
        method: "GET",
        headers: {
          userid: "antonio.minondo"
        }
      });

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    throw Error(e)
  }
}


export const getStockPrice = async (symbol: string) => {
  try {
    const response = await fetch(`https://demomocktradingserver.azurewebsites.net/stocks/${symbol}/price`,
      {
        method: "GET",
        headers: {
          userid: "antonio.minondo"
        }
      });

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    throw Error(e)
  }
}

export const getStockDataToday = async (symbol: string) => {
  try {
    const response = await fetch(`https://demomocktradingserver.azurewebsites.net/stocks/${symbol}/price/today`,
      {
        method: "GET",
        headers: {
          userid: "antonio.minondo"
        }
      });

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    throw Error(e)
  }
}

export const getStockDataYearly = async (symbol: string) => {
  try {
    const response = await fetch(`https://demomocktradingserver.azurewebsites.net/stocks/${symbol}/price/yearly`,
      {
        method: "GET",
        headers: {
          userid: "antonio.minondo"
        }
      });

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    throw Error(e)
  }
}