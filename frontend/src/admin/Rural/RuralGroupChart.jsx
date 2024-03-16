import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RuralGroupedChart = () => {
  const years = Array.from({ length: 8 }, (_, i) => 2014 + i);

  const data = {
    labels: years.map((year) => year.toString()),
    datasets: [
      {
        label: "Liver Centres",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [20, 25, 22, 29, 34, 39, 20, 28],
        barPercentage: 0.2,
      },
      {
        label: "Kidney Centres",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [15, 23, 27, 36, 50, 51, 42, 56],
        barPercentage: 0.2,
      },
      {
        label: "Heart Centres",
        backgroundColor: "rgba(75, 255, 67, 0.2)",
        borderColor: "rgba(75, 255, 67, 1)",
        borderWidth: 1,
        data: [10, 9, 12, 14, 5, 16, 14, 24],
        barPercentage: 0.2,
      },
      {
        label: "Lung Centres",
        backgroundColor: "rgba(225, 23, 255, 0.2)",
        borderColor: "rgba(225, 23, 255, 1)",
        borderWidth: 1,
        data: [24, 20, 12, 34, 45, 55, 47, 60],
        barPercentage: 0.2,
      },
      {
        label: "Pancreas Centres",
        backgroundColor: "rgba(13, 23, 135, 0.2)",
        borderColor: "rgba(13, 23, 135, 1)",
        borderWidth: 1,
        data: [5, 3, 10, 11, 9, 7, 15, 20],
        barPercentage: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: years.map((year) => year.toString()),
        grid: {
          offset: true,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        stepSize: 10,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Number of Transplant Centres from 2014-2021",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RuralGroupedChart;
