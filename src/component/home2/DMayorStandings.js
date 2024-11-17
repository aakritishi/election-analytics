import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import congress from '../media/congress.png';
import uml from '../media/uml.png';
import independent from '../media/independent.png';
import rrp from '../media/rrp.png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DMayorStanding = () => {
  
  const candidates = [
    { name: "Sarita Singh", age: 33, party: "Nepali Congress", votes: 5406, logo: congress },
    { name: "Sunita Bohora", age: 43, party: "CPN-UML", votes: 3393, logo: uml },
    { name: "Sushila Kumari Shahi", age: 43, party: "Rastriya Swatantra Party", votes: 94, logo: independent },
    { name: "Dammar Kumari Baniya", age: 52, party: "Rastriya Prajatantra Party(RPP)", votes: 48, logo: rrp },
  ];

  // Calculate total votes
  const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

  // Calculate the percentage of total votes for each candidate
  const candidatesWithPercentage = candidates.map(candidate => ({
    ...candidate,
    percentage: ((candidate.votes / totalVotes) * 100).toFixed(1), 
  }));

  // Find the highest vote
  const highestVotes = Math.max(...candidatesWithPercentage.map(candidate => candidate.votes));

  // Bar chart data
  const barChartData = {
    labels: candidatesWithPercentage.map(candidate => candidate.name),
    datasets: [
      {
        label: null,
        data: candidatesWithPercentage.map(candidate => candidate.votes),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",  
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Bar chart options with smaller label font size
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
    <div className="p-4 my-8">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Table */}
        <div className="flex-grow mb-6 lg:mb-0 overflow-x-auto w-full md:w-1/2">
          <table className="table-auto min-w-full border border-gray-500 text-center bg-gray-800 text-gray-100">
            <caption className="text-left text-lg mb-2 font-bold text-black">Deputy Mayor Standings</caption>
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-600">Age</th>
                <th className="px-4 py-2 border border-gray-600">Party</th>
                <th className="px-4 py-2 border border-gray-600">Votes</th>
                <th className="px-4 py-2 border border-gray-600">% of Total Votes (8941)</th> 
              </tr>
            </thead>
            <tbody>
              {candidatesWithPercentage.map((candidate, index) => (
                <tr
                  key={index}
                  className={`border border-gray-600 text-center ${
                    candidate.votes === highestVotes ? "bg-yellow-300 text-black" : ""
                  }`}
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
        <div className="flex-grow md:w-1/2 w-full" style={{ maxWidth: "600px", height: "400px" }}>
          <h2 className="text-center text-lg font-bold mb-4 text-black">Votes Distribution for Deputy Mayor Standings</h2>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default DMayorStanding;
