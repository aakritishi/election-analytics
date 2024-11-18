import React from 'react';

const EligibleVoters81 = () => {
  // Data for the table
  const tableData = [
    { wards: '1', vote_center: 'Ward Office, Anapani', eligiblevoters: 1506 },
    { wards: '2', vote_center: 'Janak Aa. B., Dandagaun', eligiblevoters: 1211 },
    { wards: '3', vote_center: 'Suryadoya Ma .B. Kaina, Tatta', eligiblevoters: 646 },
    { wards: '3', vote_center: 'Kailash Kanya Aa . B., Katke', eligiblevoters: 997 },
    { wards: '4', vote_center: 'Bhanubhakta Ma. B., Laha', eligiblevoters: 1204 },
    { wards: '5', vote_center: 'Himalchuli Pra. B., Khantakura', eligiblevoters: 657 },
    { wards: '5', vote_center: 'Juni Ma. B., Sirke', eligiblevoters: 937 },
    { wards: '6', vote_center: 'Birendra Aa. B., Bhaargaun', eligiblevoters: 1124 },
    { wards: '7', vote_center: 'Tribhuvan Ma. B., Dalli', eligiblevoters: 1397 },
    { wards: '8', vote_center: 'Panchabhayaar Ma. B., Jikuwa', eligiblevoters: 1097 },
    { wards: '8', vote_center: 'Ganesh Pra. B., Maluwatara', eligiblevoters: 643 },
    { wards: '9', vote_center: 'Tribhuvan Ma. B., Taatra', eligiblevoters: 997 },
    { wards: '10', vote_center: 'Janabikas Aa. B., Rautgaun', eligiblevoters: 954 },
    { wards: '11', vote_center: 'Ganesh Pra. B., Chaukhgaun', eligiblevoters: 934 },
    { wards: '12', vote_center: 'Birendra Himalaya Ma. B., Tallu', eligiblevoters: 1212 },
    { wards: '13', vote_center: 'Bhagwati Aa. B., Khaatigurta', eligiblevoters: 1082 },
  ];

  // Calculate rowSpan for each ward
  const calculateRowSpans = () => {
    const rowSpans = {};
    tableData.forEach((data, index) => {
      if (!rowSpans[data.wards]) {
        const count = tableData.filter((item) => item.wards === data.wards).length;
        rowSpans[data.wards] = count;
      }
    });
    return rowSpans;
  };

  const rowSpans = calculateRowSpans();

  // Function to calculate total eligible voters
  const totalEligibleVoters = tableData.reduce((total, item) => total + item.eligiblevoters, 0);

  return (
    <div className="overflow-x-auto w-full px-6 my-4">
      <h2 className="font-bold text-xl mb-2">YEAR 2081 DATA</h2>
      {/* Table section */}
      <table className="table-auto w-full border border-gray-500 text-center bg-gray-800 text-gray-100 shadow-lg rounded-lg">
        <caption className="text-left text-lg mb-2 font-bold text-black">Total eligible voters per ward:</caption>
        <thead className="bg-gray-700 text-gray-200">
          <tr>
            <th className="px-4 py-2 border border-gray-600">Wards</th>
            <th className="px-4 py-2 border border-gray-600">Vote Center</th>
            <th className="px-4 py-2 border border-gray-600">Eligible Voters</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            const isFirstOccurrence =
              index === 0 || tableData[index].wards !== tableData[index - 1].wards;

            return (
              <tr key={index} className="bg-gray-900 text-gray-100">
                {/* Merge ward cell */}
                {isFirstOccurrence && (
                  <td
                    className="border border-gray-600 px-4 py-2 font-bold"
                    rowSpan={rowSpans[data.wards]}
                  >
                    {data.wards}
                  </td>
                )}
                <td className="border border-gray-600 px-4 py-2">{data.vote_center}</td>
                <td className="border border-gray-600 px-4 py-2">{data.eligiblevoters}</td>
              </tr>
            );
          })}
          <tr className="bg-gray-800 text-gray-100">
            <td className="border border-gray-600 px-4 py-2 font-bold" colSpan="2">
              Total
            </td>
            <td className="border border-gray-600 px-4 py-2 font-bold">{totalEligibleVoters}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EligibleVoters81;
