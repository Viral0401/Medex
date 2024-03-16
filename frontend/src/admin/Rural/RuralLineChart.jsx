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

const RuralLineChart = () => {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Living Donors",
        data: [5, 6, 2, 10, 13, 15, 10, 19],
        borderColor: "rgba(225, 23, 255, 1)",
        backgroundColor: "rgba(225, 23, 255, 0.2)",
        fill: true,
      },
      {
        label: "Deceased Donors",
        data: [12, 9, 16, 20, 21, 25, 30, 28],
        borderColor: "rgba(45, 125, 230, 1)",
        backgroundColor: "rgba(45, 125, 230, 0.2)",
        fill: true,
      },
      {
        label: "Pledged Donors",
        data: [20, 25, 24, 27, 20, 33, 39, 36],
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

export default RuralLineChart;
