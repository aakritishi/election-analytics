import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import congress from '../media/congress.png';
import uml from '../media/uml.png';
import maoist from '../media/maoist.png';
import independent from '../media/independent.png';
import jsp from '../media/jsp.png';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Mayors = () => {
  // Candidates data
  const candidates = [
    { name: "डम्मर बहादुर रावत", age: "५२", party: "माओवादी", votes: 5599, logo: maoist },
    { name: "धर्म बहादुर शाही", age: "५३", party: "नेकपा एमाले", votes: 3626, logo: uml },
    { name: "बिन बहादुर सिंह", age: "५९", party: "राष्ट्रिय स्वतन्त्र", votes: 665, logo: independent },
    { name: "छब्बी पन्त", age: "३१", party: "नेपाली कांग्रेस", votes: 652, logo: congress },
    { name: "सत्यलाल गौतम", age: "६४", party: "जनता समाजवादी", votes: 17, logo: jsp },
  ];

  // Sort candidates by votes in descending order
  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);
  
  // Find the highest vote count
  const highestVotes = sortedCandidates[0].votes;

  // Bar chart section
  const barChartData = {
    labels: sortedCandidates.map(candidate => candidate.name),
    datasets: [
      {
        label: null,
        data: sortedCandidates.map(candidate => candidate.votes),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
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
    <div className="p-6">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Table */}
        <div className="flex-grow mb-6 lg:mb-0 overflow-x-auto w-full md:w-1/2">
          <table className="table-auto min-w-full border border-gray-500 text-center bg-gray-800 text-gray-100 shadow-md">
            <caption className="text-left text-lg mb-2 font-bold text-black">Mayor Standings</caption>
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-600">Age</th>
                <th className="px-4 py-2 border border-gray-600">Party</th>
                <th className="px-4 py-2 border border-gray-600">Votes</th>
              </tr>
            </thead>
            <tbody>
              {sortedCandidates.map((candidate, index) => (
                <tr
                  key={index}
                  className={`border border-gray-600 text-center ${
                    candidate.votes === highestVotes ? "bg-yellow-300 text-black" : ""
                  }`}
                >
                  <td className="px-4 py-2 border border-gray-600">{candidate.name}</td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.age}</td>
                  <td className="px-4 py-2  flex items-center justify-center">
                    <img src={candidate.logo} alt={`${candidate.party} logo`} className="w-6 h-6 mr-2" />
                    {candidate.party}
                  </td>
                  <td className="px-4 py-2 border border-gray-600">{candidate.votes}</td>
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

export default Mayors;
