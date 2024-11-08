import React from 'react';
import { Bar } from 'react-chartjs-2';

const VotersComparison = () => {
  // Voter data for 2074 and 2079
  const data = {
    labels: ["Male Voters", "Female Voters", "Total Eligible Voters"],
    datasets: [
      {
        label: 'Year 2074',
        data: [6634, 5709, 12501],
        backgroundColor: 'rgba(135, 206, 235, 0.6)', 
        borderColor: 'rgba(135, 206, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Year 2079',
        data: [8724, 7780, 16504],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', 
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
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

  // Calculations for the explanation
  const calculateChangeRatio = (oldValue, newValue) => ((newValue - oldValue) / oldValue * 100).toFixed(2);

  const changes = {
    male: calculateChangeRatio(6634, 8724),
    female: calculateChangeRatio(5709, 7780),
    total: calculateChangeRatio(12501, 16504),
  };

  return (
    <div className='p-6 my-5'>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
      {/* Bar Chart */}
      <div className="w-full md:w-1/2 max-w-xl" style={{ maxWidth: "600px", height: "400px" }}>
        <h2 className="text-center text-lg font-semibold mb-4">Voters Distribution Comparison of 2074 and 2079</h2>
        <Bar data={data} options={options} />
      </div>

      {/* Explanation Section */}
      <div className="flex-grow md:w-1/2 w-full mt-16 md:mt-3">
        <h3 className="text-lg font-semibold mb-2">Explanation</h3>
        <p className="mb-2 text-justify">
          This bar chart illustrates the change in eligible voter populations between the years 2074 and 2079.
          We observe growth in all categories: male voters, female voters, and total eligible voters.
        </p>
        <ul className="list-disc pl-4 text-justify">
          <li><strong>Male Voters:</strong> There was an increase of 2,090 male voters from 2074 to 2079, representing a growth rate of {changes.male}%.</li>
          <li><strong>Female Voters:</strong> The number of eligible female voters increased by 2,071, with a growth rate of {changes.female}%.</li>
          <li><strong>Total Eligible Voters:</strong> Overall, the total eligible voter population grew by 4,003, a change of {changes.total}%.</li>
        </ul>
        <p className="mt-2 text-justify">
          These changes reflect a steady increase in voter eligibility across both genders over the five-year period.
        </p>
      </div>
    </div>
    </div>
  );
};

export default VotersComparison;
