import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useContext, useEffect, useState } from 'react';
import { getStockDataToday as getDailyStockPrice } from '../../data/Stocks.Service';
import { ActiveContext } from '../../context/StocksContext'; 


const StockGraph = () => {
  const [stockData, setStockData] = useState<any>([])
  const [period, setPeriod] = useState("today");
  const [stockprices, setStockPrices] = useState({
    detailed: [],
    aggregated: [],
  }); 
  const {symbol, changeSymbol} = useContext(ActiveContext);
  useEffect(() => {
    const fetchPrice = async () => {
      const result = await getDailyStockPrice(
        symbol//state.selected
      );
      setStockPrices(result);
    };
    fetchPrice();
  },[symbol]);

  //console.log(state);
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: symbol,//state.selected,
    },
    subtitle: {
      text: "",
    },
    xAxis: { type: "datetime" },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: false,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: "detailed",
        data: stockprices.detailed.map((item: any) => ({
          date: item.date,
          y: item.price,
        })),
      },
      {
        name: "aggregated",
        data: stockprices.aggregated.map((item: any) => ({
          date: item.date,
          y: item.price,
        })),
      },
    ],
  };

  return (
    <div>
      <h2>Period</h2>
      <div id='stockGraphContainer' className="stock-graph__container">
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      </div>
    </div>
  );
}

export default StockGraph;