import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DisabilityData = () => {
  // Data for the table and chart
  const tableData = [
    { category: 'Visual Impairment', female: 15, male: 13 },
    { category: 'Amputation', female: 0, male: 1 },
    { category: 'Speech Impairment', female: 2, male: 7 },
    { category: 'Hearing Impairment', female: 14, male: 17 },
    { category: 'Others', female: 19, male: 14 },
  ];

  // Calculate totals
  const totalVisual = tableData[0].female + tableData[0].male;
  const totalAmputation = tableData[1].female + tableData[1].male;
  const totalSpeech = tableData[2].female + tableData[2].male;
  const totalHearing = tableData[3].female + tableData[3].male;
  const totalOthers = tableData[4].female + tableData[4].male;
  const total = totalVisual + totalAmputation + totalSpeech + totalHearing + totalOthers;

  // Data for the pie chart
  const pieChartData = {
    labels: tableData.map(data => data.category),
    datasets: [
      {
        label: 'Population by Disability Category',
        data: tableData.map(data => data.female + data.male),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:space-x-4 my-6">
      {/* Table section */}
      <div className="overflow-x-auto w-full md:w-1/2 p-4">
        <table className="table-auto w-full border border-gray-500 text-center bg-gray-800 text-gray-100 shadow-lg rounded-lg">
          <caption className="text-left text-lg mb-2 font-bold text-black">Disability Distribution</caption>
          <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-600">Disability Category</th>
              <th className="px-4 py-2 border border-gray-600">Gender</th>
              <th className="px-4 py-2 border border-gray-600">Count</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="border border-gray-600 px-4 py-2" rowSpan={2}>{data.category}</td>
                  <td className="border border-gray-600 px-4 py-2">Female</td>
                  <td className="border border-gray-600 px-4 py-2">{data.female}</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Male</td>
                  <td className="border border-gray-600 px-4 py-2">{data.male}</td>
                </tr>
              </React.Fragment>
            ))}
            {/* Total Row */}
            <tr className="bg-gray-900 text-gray-100 font-bold">
              <td colSpan={2} className="border border-gray-600 px-4 py-2">Total</td>
              <td className="border border-gray-600 px-4 py-2">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pie chart section */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center md:mt-4">
        <div style={{ width: '300px', height: '300px' }}>
          <h2 className="text-center text-lg font-bold mb-4 text-black">Disability Data</h2>
          <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default DisabilityData;
