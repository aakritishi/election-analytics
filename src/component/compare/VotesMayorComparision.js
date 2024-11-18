import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const VotesMayorComparison = () => {
  // Raw vote data for the year 2074
  const votes2074 = [2898, 2674, 3418, 71];
  const totalVotes2074 = votes2074.reduce((sum, val) => sum + val, 0);
  const percentages2074 = votes2074.map(
    (vote) => ((vote / totalVotes2074) * 100).toFixed(1) // Calculate percentage
  );

  // Raw vote data for the year 2079
  const votes2079 = [5599, 3626, 665, 652, 17];
  const totalVotes2079 = votes2079.reduce((sum, val) => sum + val, 0);
  const percentages2079 = votes2079.map(
    (vote) => ((vote / totalVotes2079) * 100).toFixed(1)
  );

  // Data for the year 2074
  const data2074 = {
    labels: [
      `Congress (${percentages2074[0]}%)`,
      `CPN-UML (${percentages2074[1]}%)`,
      `Maoist Center (${percentages2074[2]}%)`,
      `Ra Pra Pa (${percentages2074[3]}%)`,
    ],
    datasets: [
      {
        label: "Vote Percentage",
        data: percentages2074,
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
  const data2079 = {
    labels: [
      `Maoist Center (${percentages2079[0]}%)`,
      `CPN-UML (${percentages2079[1]}%)`,
      `Independent (${percentages2079[2]}%)`,
      `Congress (${percentages2079[3]}%)`,
      `Janata Samajwadi (${percentages2079[4]}%)`,
    ],
    datasets: [
      {
        label: "Vote Percentage",
        data: percentages2079,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable default aspect ratio
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
        Percentage share of vote distribution for mayors of Nalgad Municipality (2074 and 2079)
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

export default VotesMayorComparison;
