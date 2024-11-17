import React from 'react';

const MaoistCentreWinningProbability = () => {
  // Data for the table
  const tableData = [
    { category: 'Mayoral Performance', description: 'Maoist Centre won 37.7% in 2074 and increased to 53.0% in 2079 for the Mayor. High voter trust boosts Maoist Centre’s chances.' },
    { category: 'Ward-Level Support', description: 'Moderate, with strength in 5 wards; strategic campaigns could tilt the balance in competitive wards.' },
    { category: 'Overall Probability', description: '50%-60% (Moderate): Maoist Centre has a realistic chance of reclaiming the deputy mayor seat if they field a strong candidate and focus on wards lost in 2079.' },
  ];

  return (
    <div className="overflow-x-auto w-full px-6 my-4">
      {/* Table section */}
      <table className="table-auto w-full border border-gray-500 text-center bg-gray-800 text-gray-100 shadow-lg rounded-lg">
        <caption className="text-left text-lg mb-2 font-bold text-black">Maoist Centre Winning Probability Factors</caption>
        <thead className="bg-gray-700 text-gray-200">
          <tr>
            <th className="px-4 py-2 border border-gray-600">Factor</th>
            <th className="px-4 py-2 border border-gray-600">Likelihood</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className="bg-gray-900 text-gray-100">
              <td className="border border-gray-600 px-4 py-2">{data.category}</td>
              <td className="border border-gray-600 px-4 py-2">{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaoistCentreWinningProbability;
