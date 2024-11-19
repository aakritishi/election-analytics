import React from 'react';

const ElectionForecast = () => {
  return (
    <div className="text-gray-800 p-6 text-justify">
      <h2 className="text-xl md:text-2xl my-2 text-gray-900 font-bold">Forecast for Election 2081</h2>
      <p className="text-lg font-bold">
        In 2079, the total eligible voters were 16,504, and in 2081, the total eligible voters increased to 16,598.
        So, the percentage increase in the total eligible voters is approximately 0.57%.
      </p>
      
      <p className="text-lg font-semibold mt-4">
        In 2074, the percentage of voter participation out of the total eligible voters is:
      </p>
      <ul className="text-lg ml-5">
        <li>• Mayor election: 72.45%</li>
        <li>• Deputy Mayor election: 70.8%</li>
      </ul>

      <p className="text-lg font-semibold mt-4">
        In 2079, the percentage of voter participation out of the total eligible voters is:
      </p>
      <ul className="text-lg ml-5">
        <li>• Mayor election: 63.98%</li>
        <li>• Deputy Mayor election: 54.17%</li>
      </ul>

      <p className="text-lg mt-4">
        A decline of approximately 8.47 percentage points was observed in the voter participation for the Mayor election 
        whilst a decline of approximately 16.63 percentage points for the Deputy Mayor election.
      </p>

      <p className="text-lg font-semibold mt-4">
        Assuming the decline in voter participation rates (percentages) occurs at similar rates, the forecast for the 2081 election is:
      </p>

      <ul className="text-lg ml-5">
        <li>• Mayor Election:</li>
        <ul className="text-lg ml-5">
          <li>• Total Votes = ~10,057</li>
          <li>• Percentage = 60.59%</li>
        </ul>
        <li>• Deputy Mayor Election:</li>
        <ul className="text-lg ml-5">
          <li>• Total Votes = ~7,891</li>
          <li>• Percentage = 47.52%</li>
        </ul>
      </ul>
    </div>
  );
};

export default ElectionForecast;
