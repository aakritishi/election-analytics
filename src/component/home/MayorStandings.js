import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import congress from "../media/congress.png";
import uml from "../media/uml.png";
import maoist from "../media/maoist.png";
import rrp from "../media/rrp.png";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MayorStanding = () => {
  const totalVotes = 8850;

  const candidates = [
    { name: "Dhanmaya Sahi", age: 21, party: "Nepali Congress", votes: 2912, logo: congress },
    { name: "Sunita Bohora", age: 39, party: "CPN-UML", votes: 2623, logo: uml },
    { name: "Balkumari Basnet", age: 34, party: "Maoist Center", votes: 3241, logo: maoist },
    { name: "Dammar Kumari Baniya", age: 48, party: "Rastriya Prajatantra Party(RPP)", votes: 74, logo: rrp },
  ];

  const candidatesWithPercentage = candidates.map((candidate) => ({
    ...candidate,
    percentage: ((candidate.votes / totalVotes) * 100).toFixed(1),
  }));

  const sortedCandidates = [...candidatesWithPercentage].sort((a, b) => b.votes - a.votes);
  const highestVotes = sortedCandidates[0]?.votes || 0;

  const barChartData = {
    labels: candidates.map((candidate) => candidate.name),
    datasets: [
      {
        label: "Votes",
        data: candidates.map((candidate) => candidate.votes),
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="p-6 mt-5">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Table */}
        <div className="flex-grow mb-6 lg:mb-0 overflow-x-auto w-full md:w-1/2">
          <table className="table-auto min-w-full border border-gray-500 text-center bg-gray-800 text-gray-100">
            <caption className="text-left text-lg font-bold text-black mb-2">Deputy Mayor Standings</caption>
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-600" scope="col">Name</th>
                <th className="px-4 py-2 border border-gray-600" scope="col">Age</th>
                <th className="px-4 py-2 border border-gray-600" scope="col">Party</th>
                <th className="px-4 py-2 border border-gray-600" scope="col">Votes</th>
                <th className="px-4 py-2 border border-gray-600" scope="col">% of Total Votes (8850)</th>
              </tr>
            </thead>
            <tbody>
              {sortedCandidates.map((candidate, index) => (
                <tr
                  key={index}
                  className={`border border-gray-600 text-center ${candidate.votes === highestVotes ? "bg-yellow-300 text-black" : ""}`}
                >
                  <td className="px-4 py-2 border border-gray-600">{candidate.name}</td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.age}</td>
                  <td className="px-4 py-2 flex items-center justify-center">
                    <img src={candidate.logo} alt={`${candidate.party} logo`} className="w-6 h-6 mr-2" />
                    {candidate.party}
                  </td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.votes}</td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar Chart */}
        <div className="flex-grow md:w-1/2 w-full max-w-[600px] h-[400px] lg:h-[500px]">
          <h2 className="text-center text-lg font-bold mb-4 text-black">Votes Distribution for Deputy Mayor Standings</h2>
          <div className="flex justify-center h-full">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MayorStanding;
