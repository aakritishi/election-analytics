import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Mayor = () => {
  
  const candidates = [
    { name: "A", age: 30, party: "Party A", votes: 250 },
    { name: "B", age: 35, party: "Party B", votes: 300 },
    { name: "C", age: 28, party: "Party C", votes: 450 },
    { name: "D", age: 28, party: "Party D", votes: 550 },
  ];

  // Find the highest vote 
  const highestVotes = Math.max(...candidates.map(candidate => candidate.votes));

  // Bar chart data
  const barChartData = {
    labels: candidates.map(candidate => candidate.name),
    datasets: [
      {
        label: "Bar Diagram representing mayor standing votes",
        data: candidates.map(candidate => candidate.votes),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Bar chart options with smaller label font size
  const barChartOptions = {
    maintainAspectRatio: false,
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
    <div className="p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Table */}
        <div className="flex-grow mb-6 lg:mb-0 overflow-x-auto w-full md:w-1/2">
          <table className="table-auto min-w-full border border-gray-500 text-center bg-gray-800 text-gray-100 shadow-lg rounded-lg">
            <caption className="text-left text-lg mb-2 font-bold text-black">Mayor Standings</caption>
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-600">Age</th>
                <th className="px-4 py-2 border border-gray-600">Party</th>
                <th className="px-4 py-2 border border-gray-600">Votes</th>
                <th className="px-4 py-2 border border-gray-600">Winner or Not</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index} className="border border-gray-600 text-center">
                  <td className="px-4 py-2 border border-gray-600">{candidate.name}</td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.age}</td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.party}</td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.votes}</td>
                  <td className="px-4 py-2 border border-gray-600 text-center">
                    {candidate.votes === highestVotes ? <FaCheck /> : <ImCross />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bar Chart */}
        <div className="flex-grow md:w-1/2 w-full" style={{ maxWidth: "600px", height: "400px" }}>
          <h2 className="text-center text-lg font-bold mb-4 text-black">Votes Distribution</h2>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Mayor;
