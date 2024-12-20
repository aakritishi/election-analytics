import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TotalVoters = () => {
  // Data for the table
  const totalPopulation = 28858;
  const males = 14359;
  const females = 14499;

  // Data for the pie chart
  const pieData = {
    labels: ['Males', 'Females'],
    datasets: [
      {
        label: 'Voter Distribution',
        data: [males, females],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', 
          'rgba(255, 99, 132, 0.6)',   
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Table */}
        <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <table className="min-w-full border border-gray-500 text-center bg-gray-800 text-gray-100">
            <caption className="text-left text-lg mb-2 font-bold text-black">
              Total Population of 2079
            </caption>
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-600">Voters</th>
                <th className="px-4 py-2 border border-gray-600">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2">Male</td>
                <td className="border border-gray-600 px-4 py-2">{males}</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2">Female</td>
                <td className="border border-gray-600 px-4 py-2">{females}</td>
              </tr>
              <tr className="bg-gray-900">
                <td className="border border-gray-600 px-4 py-2 font-bold">Total Population</td>
                <td className="border border-gray-600 px-4 py-2 font-bold">{totalPopulation}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pie Chart */}
        <div className="lg:w-1/2 w-full flex justify-center items-center" style={{ height: '300px' }}>
          <div className="max-w-lg mx-auto" style={{ height: '100%' }}>
            <h2 className="text-center text-lg font-bold text-black mb-4">Total Population of 2079</h2>
            <Pie data={pieData} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalVoters;
