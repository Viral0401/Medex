import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const LineChart = () => {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Living Donors",
        data: [14, 10, 8, 7, 6, 4, 8, 23],
        borderColor: "rgba(225, 23, 255, 1)",
        backgroundColor: "rgba(225, 23, 255, 0.2)",
        fill: true,
      },
      {
        label: "Deceased Donors",
        data: [5, 14, 13, 25, 35, 37, 25, 30],
        borderColor: "rgba(45, 125, 230, 1)",
        backgroundColor: "rgba(45, 125, 230, 0.2)",
        fill: true,
      },
      {
        label: "Pledged Donors",
        data: [18, 23, 27, 20, 19, 30, 32, 41],
        borderColor: "rgba(255, 20, 30, 1)",
        backgroundColor: "rgba(255, 20, 30, 0.2)",
        fill: true,
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Organ Donors",
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
      <Line data={data} options={options} className="mx-16 "></Line>
    </div>
  );
};

export default LineChart;
