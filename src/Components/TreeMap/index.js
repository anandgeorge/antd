import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Treemap } from "@ant-design/plots";

const TreemapChart = () => {
  const data = {
    name: "root",
    children: [
      {
        name: "BTC",
        value: 600,
      },
      {
        name: "ETH",
        value: 250,
      },
      {
        name: "BAT",
        value: 150,
      },
      {
        name: "XRP",
        value: 140,
      },
      {
        name: "BNB",
        value: 180,
      },
      {
        name: "MATIC",
        value: 95,
      },
      {
        name: "SOL",
        value: 190,
      },
      //   {
      //     name: "ADA",
      //     value: 75,
      //   },
      //   {
      //     name: "AVAX",
      //     value: 98,
      //   },
      //   {
      //     name: "TRX",
      //     value: 16,
      //   },
      //   {
      //     name: "分类 11",
      //     value: 45,
      //   },
      //   {
      //     name: "分类 12",
      //     value: 40,
      //   },
      //   {
      //     name: "分类 13",
      //     value: 40,
      //   },
      //   {
      //     name: "分类 14",
      //     value: 35,
      //   },
      //   {
      //     name: "分类 15",
      //     value: 40,
      //   },
      //   {
      //     name: "分类 16",
      //     value: 40,
      //   },
      //   {
      //     name: "分类 17",
      //     value: 40,
      //   },
      //   {
      //     name: "分类 18",
      //     value: 30,
      //   },
      //   {
      //     name: "分类 19",
      //     value: 28,
      //   },
      //   {
      //     name: "分类 20",
      //     value: 16,
      //   },
    ],
  };
  const config = {
    data,
    colorField: "name",
    height: 200,
  };
  return <Treemap {...config} />;
};

export default TreemapChart;
