import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const ElectionStatistics = () => {
  const data = {
    labels: ["Year 2074", "Year 2079", "Year 2081 (Forecast)"],
    datasets: [
      {
        label: "Total Eligible Voters",
        data: [12501, 16504, 16598],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: "Total Votes for Mayor Election",
        data: [9061, 10559, 10057],
        borderColor: "rgba(29, 130, 73, 1)",
        backgroundColor: "rgba(29, 130, 73, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(29, 130, 73, 1)",
      },
      {
        label: "Total Votes for Deputy Mayor Election",
        data: [8850, 8941, 7891],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Votes",
          font: {
            size: 14,
          },
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="flex flex-col p-4">
      <div className="w-full max-w-4xl mx-auto md:ml-0 lg:ml-0 h-[300px] md:h-[400px] lg:h-[500px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ElectionStatistics;
