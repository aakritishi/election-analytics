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

const VoteComparison = () => {
  // Data for Mayor vote counts
  const mayorData2074 = { congress: 2898, uml: 2674, maoist: 3418 };
  const mayorData2079 = { congress: 652, uml: 3626, maoist: 5599 };

  // Data for Deputy Mayor
  const deputyMayorData2074 = { congress: 1987, uml: 2274, maoist: 2813 };
  const deputyMayorData2079 = { congress: 812, uml: 3345, maoist: 4211 };

  // Chart data configuration
  const data = {
    labels: ['2074', '2079'],
    datasets: [
      // Mayor Vote Counts
      {
        label: 'Congress - Mayor',
        data: [mayorData2074.congress, mayorData2079.congress],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
      },
      {
        label: 'UML - Mayor',
        data: [mayorData2074.uml, mayorData2079.uml],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
      {
        label: 'Maoist - Mayor',
        data: [mayorData2074.maoist, mayorData2079.maoist],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      // Deputy Mayor Vote Counts
      {
        label: 'Congress - Deputy Mayor',
        data: [deputyMayorData2074.congress, deputyMayorData2079.congress],
        borderColor: 'rgba(245, 39, 39, 1)',
        backgroundColor: 'rgba(245, 39, 39, 0.2)',
        fill: false,
      },
      {
        label: 'UML - Deputy Mayor',
        data: [deputyMayorData2074.uml, deputyMayorData2079.uml],
        borderColor: 'rgba(13, 96, 13, 1)',
        backgroundColor: 'rgba(13, 96, 13, 0.2)',
        fill: false,
      },
      {
        label: 'Maoist - Deputy Mayor',
        data: [deputyMayorData2074.maoist, deputyMayorData2079.maoist],
        borderColor: 'rgba(255, 216, 10, 1)',
        backgroundColor: 'rgba(255, 216, 10, 0.2)',
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
          text: 'Vote Count',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center w-full mx-auto p-6 my-4">
      <div className="w-full md:w-1/2" style={{ maxWidth: '100%', height: 'auto' }}>
        <h2 className="text-center text-lg font-bold mb-4 text-black">
          Vote Comparison of the Parties
        </h2>
        <div className="h-80 w-full sm:h-96 md:h-[400px]">
          <Line data={data} options={options} />
        </div>
      </div>
      <div className="w-full md:w-1/2 text-justify mt-6 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">Explanation</h2>
        <p className="text-base">
          The line graph above compares the vote counts of three major political parties (Congress, UML, and Maoist)
          for both Mayor and Deputy Mayor positions across two years: 2074 and 2079. Solid lines represent Mayor votes,
          while dashed lines show Deputy Mayor votes, allowing clear differentiation between the two positions.
        </p>
        <p className="text-base mt-4">
          Each color-coded line traces how each party's support changed over time. For instance, Congress experienced a
          significant decline in Mayor votes, while Maoist saw an increase. Similarly, Deputy Mayor data show different
          trends, with UML gaining votes in both positions over the years.
        </p>
      </div>
    </div>
  );
};

export default VoteComparison;
