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
  { ageGroup: 'Below 75', maleCount: 671, femaleCount: 630 },
  { ageGroup: 'Above 75', maleCount: 79, femaleCount: 96 },
];

const AgeGroup = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center my-12 space-y-6 lg:space-y-0">
      <div className="w-full lg:w-1/2 p-4">
        <AgeGroupTable ageGroups={ageGroupsData} />
      </div>
      <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
        <div className="flex justify-center items-center w-full"> 
          <AgeGroupPieChart ageGroups={ageGroupsData} />
        </div>
      </div>
    </div>
  );
};

export default AgeGroup;
