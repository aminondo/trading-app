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