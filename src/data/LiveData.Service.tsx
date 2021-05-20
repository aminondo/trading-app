const Nes = require("@hapi/nes/lib/client");


let nesClient: any = null;


const StockUpdateService = {
  subscribe: (symbol: any, setPrice: any) => {
    if (!nesClient) {
      nesClient = new Nes.Client(
        "wss://demomocktradingserver.azurewebsites.net"
      );
      const start = async () => {
        await nesClient.connect();
      };
      start();
    }
    nesClient.subscribe(
      "/livestream/" + symbol,
      (update: any) => {
        setPrice(update.price);
      }
    );
    
  },
  unsubscribe: (symbol: string) => {
    if (!nesClient) {
      nesClient = new Nes.Client(
        "wss://demomocktradingserver.azurewebsites.net"
      );
      const start = async () => {
        await nesClient.connect();
      };
      start();
    }
    nesClient.unsubscribe(
      "/livestream/" + symbol
    );
  }
};
Object.freeze(StockUpdateService);
export default StockUpdateService;