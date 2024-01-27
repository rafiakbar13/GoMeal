"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

import { Line } from "react-chartjs-2";
type Props = {};

const OrderRate = (props: Props) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "dataset1",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "dataset2",
        data: [12, 23, 32, 45, 21, 34, 12],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "#FF6384",
        fill: "start",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      point: {
        radius: 5,
        hitRadius: 50,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };
  return <Line data={data} width={100} height={40} options={options} />;
};

export default OrderRate;
