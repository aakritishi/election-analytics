import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const MayorVoteComaprison = () => {
  // Total vote counts for 2074 and 2079
  const total2074 = {
    congress: 2898,
    uml: 2674,
    maoist: 3418,
  };
  const total2079 = {
    congress: 652,
    uml: 3626,
    maoist: 5599,
  };

  // Chart data configuration
  const data = {
    labels: ['Congress', 'UML', 'Maoist'],
    datasets: [
      {
        label: 'Year 2074',
        data: [total2074.congress, total2074.uml, total2074.maoist],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
      },
      {
        label: 'Year 2079',
        data: [total2079.congress, total2079.uml, total2079.maoist],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
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
          text: 'Total Vote Count',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Political Party',
        },
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center w-full mx-auto p-6 my-4">
      <div className="w-full md:w-1/2" style={{ maxWidth: '100%', height: 'auto' }}>
        <h2 className="text-center text-lg font-bold mb-4 text-black">
          Vote Comparison of the Parties ( Mayor Standings)
        </h2>
        <div className="h-80 w-full sm:h-96 md:h-[400px]">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-justify mt-6 md:mt-0">
        <h2 className="text-lg font-bold mb-4">Explanation</h2>
        <p className="text-base">
          The line graph compares the total vote counts of three major political parties (Congress, UML, and Maoist)
          across two election years: 2074 and 2079. Each line represents votes for Mayor positions.
        </p>
        <p className="text-base mt-4">
          For example, congress experienced a significant drop in vote count from 2074 to 2079, while Maoist saw an increase.
          This visualization helps to understand the changing political support over the past 5 years.
        </p>
      </div>
    </div>
  );
};

export default MayorVoteComaprison;
