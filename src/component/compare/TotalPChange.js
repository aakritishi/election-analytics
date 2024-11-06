import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalPChange = () => {
  const data = {
    labels: ["Males", "Females","Total Population"],
    datasets: [
      {
        label: 'Year 2074',
        data: [12741, 12849, 25590],
        backgroundColor: 'rgba(135, 206, 235, 0.6)',
        borderColor: 'rgba(135, 206, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Year 2079',
        data: [14359, 14499, 28858],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Population Count',
        },
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 space-y-4 lg:space-y-0 w-full  mx-auto mt-6 p-4">
      <div className="w-full lg:w-[60%]">
        <h2 className="text-center text-2xl font-semibold mb-4">Population Comparison of Year 2074 and 2079</h2>
        <Bar data={data} options={options} />
      </div>
      <div className="w-full lg:w-[40%]">
        <h3 className="text-2xl font-semibold mb-2">Explanation</h3>
        <p className="text-gray-900 text-justify text-xl md:text-xl">
          This bar chart compares the population data for the years 2074 and 2079 across three categories: total population, 
          male population, female population, and eligible voters. The data illustrates a growth in each category over the 
          five-year period reflecting demographic and policy changes.
        </p>
      </div>
    </div>
  );
};

export default TotalPChange;
