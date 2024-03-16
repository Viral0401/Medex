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

const GroupedChart = () => {
  const years = Array.from({ length: 8 }, (_, i) => 2014 + i);

  const data = {
    labels: years.map((year) => year.toString()),
    datasets: [
      {
        label: "Liver Centres",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [39, 42, 92, 132, 140, 180, 134, 234],
        barPercentage: 0.2,
      },
      {
        label: "Kidney Centres",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [189, 265, 330, 390, 445, 523, 449, 561],
        barPercentage: 0.2,
      },
      {
        label: "Heart Centres",
        backgroundColor: "rgba(75, 255, 67, 0.2)",
        borderColor: "rgba(75, 255, 67, 1)",
        borderWidth: 1,
        data: [39, 59, 78, 94, 125, 153, 121, 189],
        barPercentage: 0.2,
      },
      {
        label: "Lung Centres",
        backgroundColor: "rgba(225, 23, 255, 0.2)",
        borderColor: "rgba(225, 23, 255, 1)",
        borderWidth: 1,
        data: [19, 35, 48, 45, 55, 84, 47, 115],
        barPercentage: 0.2,
      },
      {
        label: "Pancreas Centres",
        backgroundColor: "rgba(13, 23, 135, 0.2)",
        borderColor: "rgba(13, 23, 135, 1)",
        borderWidth: 1,
        data: [20, 24, 39, 43, 49, 74, 65, 119],
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
        max: 600,
        stepSize: 100,
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

export default GroupedChart;
