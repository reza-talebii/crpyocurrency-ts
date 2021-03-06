import React from "react";

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

import { ITradingviewChartProps } from "./interfaces";

const ChartCom: React.FC<ITradingviewChartProps> = ({ symbol }) => {
  return (
    <div style={{ width: "100%", height: "60vh" }}>
      <AdvancedRealTimeChart
        theme="light"
        autosize
        style={"3"}
        hide_side_toolbar
        interval="D"
        symbol={symbol + "usd"}
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default ChartCom;
