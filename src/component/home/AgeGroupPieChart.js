import React from 'react';
import { Pie } from 'react-chartjs-2';

const AgeGroupPieChart = ({ ageGroups }) => {
  const data = {
    labels: ageGroups.map(group => group.ageGroup),
    datasets: [{
      label: 'Population by Age Group',
      data: ageGroups.map(group => group.maleCount + group.femaleCount),
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
      borderColor: 'rgba(0, 0, 0, 0.2)',
      borderWidth: 1,
    }],
  };

  return (
    <div className="w-full md:w-1/2 mx-auto p-4 items-center justify-center md:mt-12" style={{ height: '400px' }}>
      <h2 className="text-center font-bold mb-4">Age Group Distribution Pie Chart</h2>
      <Pie data={data} />
    </div>
  );
};

export default AgeGroupPieChart;
