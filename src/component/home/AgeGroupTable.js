import React from 'react';

const AgeGroup = ({ ageGroups }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-400 text-center bg-gray-800 text-gray-100">
        <caption className="text-left text-lg mb-2 font-bold text-black">
          Age Group Distribution
        </caption>
        <thead className="bg-gray-700 text-gray-200">
          <tr>
            <th className="px-4 py-2 border border-gray-600">Age Group</th>
            <th className="px-4 py-2 border border-gray-600">Gender</th>
            <th className="px-4 py-2 border border-gray-600">Count</th>
          </tr>
        </thead>
        <tbody>
          {ageGroups.map((group) => (
            <React.Fragment key={group.ageGroup}>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2" rowSpan={2}>{group.ageGroup}</td>
                <td className="border border-gray-600 px-4 py-2">Male</td>
                <td className="border border-gray-600 px-4 py-2">{group.maleCount}</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="border border-gray-600 px-4 py-2">Female</td>
                <td className="border border-gray-600 px-4 py-2">{group.femaleCount}</td>
              </tr>
            </React.Fragment>
          ))}
          {/* Total count */}
          <tr className="bg-gray-900">
            <td className="border border-gray-600 px-4 py-2 font-bold" colSpan={2}>Total</td>
            <td className="border border-gray-600 px-4 py-2 font-bold">
              {ageGroups.reduce((total, group) => total + group.maleCount + group.femaleCount, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AgeGroup;
