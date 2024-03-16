import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const RuralBarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Donations (in thousand)",
        data: [90, 130, 115, 150, 180, 121, 85, 101, 75, 0, 0, 0],
        backgroundColor: "#f55da9",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Fundraiser for Organ Transplant",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16, 
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={250} options={options} className="mx-5"></Bar>
    </div>
  );
};

export default RuralBarChart;
