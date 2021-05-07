
export interface allocationData {
  symbol?: string;
  amount?: number;
}

export const getAllocations = async (): Promise<allocationData[]> => {
  try {
    const response = await fetch("https://demomocktradingserver.azurewebsites.net/userdata/allocations",
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

export const getWatchlist = async () => {
  try {
    const response = await fetch("https://demomocktradingserver.azurewebsites.net/userdata/watchlist",
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