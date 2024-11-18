import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const VotesDeputyComparison = () => {
  // Data for the year 2074
  const rawData2074 = [2912, 2623, 3241, 74];
  const total2074 = rawData2074.reduce((a, b) => a + b, 0);
  const percentage2074 = rawData2074.map((value) =>
    ((value / total2074) * 100).toFixed(1)
  );

  const data2074 = {
    labels: [
      `Congress (${percentage2074[0]}%)`,
      `CPN-UML (${percentage2074[1]}%)`,
      `Maoist Center (${percentage2074[2]}%)`,
      `Ra Pra Pa (${percentage2074[3]}%)`,
    ],
    datasets: [
      {
        label: "Votes (%)",
        data: percentage2074,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
      },
    ],
  };

  // Data for the year 2079
  const rawData2079 = [3393, 94, 5406, 48];
  const total2079 = rawData2079.reduce((a, b) => a + b, 0);
  const percentage2079 = rawData2079.map((value) =>
    ((value / total2079) * 100).toFixed(1)
  );

  const data2079 = {
    labels: [
      `CPN-UML (${percentage2079[0]}%)`,
      `Independent (${percentage2079[1]}%)`,
      `Congress (${percentage2079[2]}%)`,
      `Ra Pra Pa (${percentage2079[3]}%)`,
    ],
    datasets: [
      {
        label: "Votes (%)",
        data: percentage2079,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
        ],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 20,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-around p-6">
      <h1 className="text-lg font-bold mb-4 text-center md:text-left">
        Percentage share of vote distribution for deputy mayors of Nalgad Municipality (2074 and 2079)
      </h1>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-around">
        {/* Pie chart for 2074 */}
        <div className="flex flex-col items-center w-full max-w-[400px]">
          <h2 className="text-lg font-semibold text-center mb-4">Year 2074</h2>
          <div className="w-full h-auto aspect-square">
            <Pie data={data2074} options={options} />
          </div>
        </div>

        {/* Pie chart for 2079 */}
        <div className="flex flex-col items-center w-full max-w-[400px] mt-6 md:mt-0">
          <h2 className="text-lg font-semibold text-center mb-4">Year 2079</h2>
          <div className="w-full h-auto aspect-square">
            <Pie data={data2079} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotesDeputyComparison;
