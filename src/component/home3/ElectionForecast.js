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
        In 2074, the percentage of votes registered out of the total eligible is:
      </p>
      <ul className="text-lg ml-5" style={{ listStyleType: 'disc' }}>
        <li> Mayor election: 72.45%</li>
        <li> Deputy Mayor election: 70.8%</li>
      </ul>

      <p className="text-lg font-semibold mt-4">
        In 2079, the percentage of votes registered out of the total eligible is:
      </p>
      <ul className="text-lg ml-5" style={{listStyleType: 'disc'}}>
        <li> Mayor election: 63.98%</li>
        <li> Deputy Mayor election: 54.17%</li>
      </ul>

      <p className="text-lg mt-4">
        A decline of approximately 8.47 percentage points was observed in the votes registered for the Mayor election,
         while a decline of approximately 16.63 percentage points was observed for the Deputy Mayor election.
      </p>

      <p className="text-lg font-semibold mt-4">
      Assuming the decline in vote-registered rates (percentages) is similar to the rates observed in the past two election cycles, forecast for the 2081 election:
      </p>

      <ul className="text-lg ml-5" style={{listStyleType:'disc'}}>
        <li> Mayor Election Forecast:</li>
        <ul className="text-lg ml-5">
          <li> Total Votes = ~10,057</li>
          <li> Percentage = 60.59%</li>
        </ul>
        <li>Deputy Mayor Election Forecast:</li>
        <ul className="text-lg ml-5">
          <li> Total Votes = ~7,891</li>
          <li> Percentage = 47.52%</li>
        </ul>
      </ul>
    </div>
  );
};

export default ElectionForecast;
