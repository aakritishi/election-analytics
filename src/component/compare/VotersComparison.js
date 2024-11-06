import React from 'react';
import { Bar } from 'react-chartjs-2';

const VotersComparison = () => {
  const data = {
    labels: ["Male Voters", "Female Voters","Total Eligible Voters"],
    datasets: [
      {
        label: 'Year 2074',
        data: [6634, 5709,12501],
        backgroundColor: 'rgba(135, 206, 235, 0.6)', 
        borderColor: 'rgba(135, 206, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Year 2079',
        data: [16504, 8724, 7780],
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
    <div className="w-full max-w-xl mx-auto mt-6">
      <h2 className="text-center text-2xl font-semibold mb-4">Voters Distribution Comparison of Year 2074 and 2079</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VotersComparison;
