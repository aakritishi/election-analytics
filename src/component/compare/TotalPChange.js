import React from 'react';
import { Bar } from 'react-chartjs-2';

const TotalPChange = () => {
  const data = {
    labels: ["Total Population", "Males", "Females", "Eligible Voters"],
    datasets: [
      {
        label: 'Year 2074',
        data: [25590, 12741, 12849, 12501],
        backgroundColor: 'rgba(135, 206, 235, 0.6)', // Skyblue
        borderColor: 'rgba(135, 206, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Year 2079',
        data: [28858, 14359, 14499, 16504],
        backgroundColor: 'rgba(250, 128, 114, 0.6)', // Salmon
        borderColor: 'rgba(250, 128, 114, 1)',
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
    <div className="w-full max-w-xl mx-auto mt-6">
      <h2 className="text-center text-2xl font-semibold mb-4">Population Comparison of Year 2074 and 2079</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalPChange;
