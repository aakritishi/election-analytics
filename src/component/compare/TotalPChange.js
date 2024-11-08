import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalPChange = () => {
  // Population data for 2074 and 2079
  const data2074 = {
    male: 12741,
    female: 12849,
    total: 25590,
  };

  const data2079 = {
    male: 14359,
    female: 14499,
    total: 28858,
  };

  // Calculate percentage changes
  const calculateChangeRatio = (initial, final) => (((final - initial) / initial) * 100).toFixed(2);

  const changes = {
    male: calculateChangeRatio(data2074.male, data2079.male),
    female: calculateChangeRatio(data2074.female, data2079.female),
    total: calculateChangeRatio(data2074.total, data2079.total),
  };

  // Bar chart data
  const data = {
    labels: ["Males", "Females", "Total Population"],
    datasets: [
      {
        label: 'Year 2074',
        data: [data2074.male, data2074.female, data2074.total],
        backgroundColor: 'rgba(135, 206, 235, 0.6)',
        borderColor: 'rgba(135, 206, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Year 2079',
        data: [data2079.male, data2079.female, data2079.total],
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

  return (
    <div className="p-6 my-5">
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Bar Chart */}
        <div className="flex-grow md:w-1/2 w-full" style={{ maxWidth: "600px", height: "360px" }}>
          <h2 className="text-center text-lg font-bold mb-4 text-black">Population Comparison of Year 2074 and 2079</h2>
          <Bar data={data} options={options} />
        </div>

        {/* Explanation Section */}
        <div className="flex-grow md:w-1/2 w-full mt-16 md:mt-3">
          <h3 className="text-lg font-bold mb-2 text-black">Explanation</h3>
          <p className="text-gray-900 text-justify text-xl md:text-xl mb-4">
            This bar chart compares the population data for the years 2074 and 2079 across three categories: male, female, and total population.
          </p>
          <p className="text-gray-900 text-justify text-lg md:text-lg mb-2">
            <strong>Total Population:</strong> The population grew from <strong>{data2074.total}</strong> in 2074 to <strong>{data2079.total}</strong> in 2079, indicating a <strong>{changes.total}%</strong> increase.
          </p>
          <p className="text-gray-900 text-justify text-lg md:text-lg mb-2">
            <strong>Male Population:</strong> The male population rose from <strong>{data2074.male}</strong> in 2074 to <strong>{data2079.male}</strong> in 2079, marking a <strong>{changes.male}%</strong> increase.
          </p>
          <p className="text-gray-900 text-justify text-lg md:text-lg mb-2">
            <strong>Female Population:</strong> The female population increased from <strong>{data2074.female}</strong> in 2074 to <strong>{data2079.female}</strong> in 2079, representing a <strong>{changes.female}%</strong> increase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalPChange;
