import React from 'react';

const AgeGroup = ({ ageGroups }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="table-auto w-full border border-gray-300 text-center">
        <caption  className="text-left text-lg font-semibold mb-2">Age Group Distribution</caption>
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border bg-slate-200">Age Group</th>
            <th className="px-4 py-2 border bg-slate-200">Gender</th>
            <th className="px-4 py-2 border bg-slate-200">Count</th>
          </tr>
        </thead>
        <tbody>
          {ageGroups.map((group) => (
            <React.Fragment key={group.ageGroup}>
              <tr>
                <td className="border px-4 py-2" rowSpan={2}>{group.ageGroup}</td>
                <td className="border px-4 py-2">Male</td>
                <td className="border px-4 py-2">{group.maleCount}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Female</td>
                <td className="border px-4 py-2">{group.femaleCount}</td>
              </tr>
            </React.Fragment>
          ))}
          {/* Total count*/}
          <tr>
            <td className="border px-4 py-2 bg-slate-400" colSpan={2}>Total</td>
            <td className="border px-4 py-2 bg-slate-400">
              {ageGroups.reduce((total, group) => total + group.maleCount + group.femaleCount, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AgeGroup;
