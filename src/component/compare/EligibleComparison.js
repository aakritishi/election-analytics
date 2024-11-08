import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EligibleComparison = () => {
  // Data for 2074 and 2079
  const data2074 = {
    male: 6634,
    female: 5709,
    total: 12501,
  };

  const data2079 = {
    male: 8724,
    female: 7780,
    total: 16504,
  };

  // Calculate the percentage change
  const calculateChangeRatio = (initial, final) => (((final - initial) / initial) * 100).toFixed(2);

  const changes = {
    male: calculateChangeRatio(data2074.male, data2079.male),
    female: calculateChangeRatio(data2074.female, data2079.female),
    total: calculateChangeRatio(data2074.total, data2079.total),
  };

  // Bar chart data
  const barChartData = {
    labels: ["Male Eligible Voters", "Female Eligible Voters", "Total Eligible Voters"],
    datasets: [
      {
        label: "Year 2074",
        data: [data2074.male, data2074.female, data2074.total],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Year 2079",
        data: [data2079.male, data2079.female, data2079.total],
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Light pink for 2079 data
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
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
        <div className="flex-grow md:w-1/2 w-full" style={{ maxWidth: "600px", height: "400px" }}>
          <h2 className="text-center text-lg font-bold mb-4 text-black">Eligible Voters Population Comparison</h2>
          <Bar data={barChartData} options={barChartOptions} />
        </div>

        {/* Explanation Section */}
        <div className="flex-grow md:w-1/2 w-full mt-16 md:mt-3">
          <h3 className="text-lg font-bold mb-2 text-black">Explanation</h3>
          <p className="mb-2">
            <strong>Total Eligible Voters:</strong> The total eligible voters increased from <strong>{data2074.total}</strong> in 2074 to <strong>{data2079.total}</strong> in 2079, representing a <strong>{changes.total}%</strong> increase.
          </p>
          <p className="mb-2">
            <strong>Male Eligible Voters:</strong> The male eligible voters rose from <strong>{data2074.male}</strong> in 2074 to <strong>{data2079.male}</strong> in 2079, resulting in a <strong>{changes.male}%</strong> increase.
          </p>
          <p className="mb-2">
            <strong>Female Eligible Voters:</strong> The female eligible voters grew from <strong>{data2074.female}</strong> in 2074 to <strong>{data2079.female}</strong> in 2079, marking a <strong>{changes.female}%</strong> increase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EligibleComparison;
