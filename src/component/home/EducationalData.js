import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const EducationalData = () => {
  // Data for the table and chart
  const tableData = [
    { level: 'Uneducated', female: 4511, male: 4073 },
    { level: 'Below SLC', female: 613, male: 1293 },
    { level: 'SLC or Above SLC', female: 647, male: 1364 },
  ];

  // Calculate totals
  const totalUneducated = tableData[0].female + tableData[0].male; 
  const totalBelowSLC = tableData[1].female + tableData[1].male; 
  const totalSLC = tableData[2].female + tableData[2].male; 
  const overallTotal = totalUneducated + totalBelowSLC + totalSLC; 

  // Data for the pie chart (summed up)
  const pieChartData = {
    labels: ['Uneducated', 'Below SLC', 'SLC or Above SLC'],
    datasets: [
      {
        label: 'Population by Education Level',
        data: [totalUneducated, totalBelowSLC, totalSLC],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', 
          'rgba(54, 162, 235, 0.6)', 
          'rgba(75, 192, 192, 0.6)', 
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)'
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
          <caption className="text-left text-lg mb-2 font-bold text-black">Education Level Distribution</caption>
          <thead className="bg-gray-700 text-gray-200">
            <tr>
              <th className="px-4 py-2 border border-gray-600">Education Level</th>
              <th className="px-4 py-2 border border-gray-600">Gender</th>
              <th className="px-4 py-2 border border-gray-600">Count</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="border border-gray-600 px-4 py-2" rowSpan={2}>{data.level}</td>
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
              <td className="border border-gray-600 px-4 py-2">{overallTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pie chart section */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center md:mt-4">
        <div style={{ width: '300px', height: '300px' }}>            
          <h2 className="text-center text-lg font-bold mb-4 text-black">Educational Data</h2>
          <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default EducationalData;
