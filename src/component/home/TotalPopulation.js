import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const VoterData = () => {
  // Data for the table
  const totalPopulation = 25590;
  const males = 12741;
  const females = 12849;
  const eligibleVoters = 12501;

  // Data for the pie chart
  const pieData = {
    labels: ['Males', 'Females', 'Eligible Voters'],
    datasets: [
      {
        label: 'Voter Distribution',
        data: [males, females, eligibleVoters],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)', 
          'rgba(255, 99, 132, 0.6)',  
          'rgba(75, 192, 192, 0.6)',  
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Table */}
        <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <table className="table-auto w-full border border-gray-300 text-center">
          <caption className="text-left text-lg font-semibold mb-2">
              Voters Description
            </caption>
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border bg-slate-200">Voters Description Count</th>
                <th className="px-4 py-2 border bg-slate-200">Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Male</td>
                <td className="border px-4 py-2">{males}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Female</td>
                <td className="border px-4 py-2">{females}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Total Eligible Voters</td>
                <td className="border px-4 py-2">{eligibleVoters}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 bg-slate-400">Total Population</td>
                <td className="border px-4 py-2 bg-slate-400">{totalPopulation}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pie Chart */}
        <div className="lg:w-1/2 w-full flex justify-center items-center" style={{ height: '300px' }}>
          <div className="max-w-lg mx-auto" style={{ height: '100%' }}>
            <h2 className="text-center text-lg font-bold">Voters Distribution</h2>
            <Pie data={pieData} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoterData;
