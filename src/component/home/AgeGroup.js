import React from 'react';
import AgeGroupTable from './AgeGroupTable';
import AgeGroupPieChart from './AgeGroupPieChart';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

const ageGroupsData = [
  { ageGroup: 'Below 18', maleCount: 96, femaleCount: 62 },
  { ageGroup: 'Below 24', maleCount: 1157, femaleCount: 795 },
  { ageGroup: 'Below 40', maleCount: 2597, femaleCount: 2366 },
  { ageGroup: 'Below 60', maleCount: 2130, femaleCount: 1822 },
  { ageGroup: 'Below 75', maleCount: 671, femaleCount: 630},
  { ageGroup: 'Above 75', maleCount: 79, femaleCount: 96 },
];

const AgeGroup = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-start my-10'>
      <div className='w-full md:w-1/2'>
        <AgeGroupTable ageGroups={ageGroupsData} />
      </div>
      <div className='w-full md:w-1/2'>
        <AgeGroupPieChart ageGroups={ageGroupsData} />
      </div>
    </div>
  );
};

export default AgeGroup;
