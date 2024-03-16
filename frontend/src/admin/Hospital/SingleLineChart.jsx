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

const SingleLineChart = () => {
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
    ],
  });

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Transplant this year",
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} className="mx-5"></Line>
    </div>
  );
};

export default SingleLineChart;
