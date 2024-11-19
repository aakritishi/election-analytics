import React from 'react'
import EligibleVoters81 from './EligibleVoters81'
import ElectionForecast from './ElectionForecast'
import ElectionStatistics from './ElectionStatLine'
import MaoistCentreWinningProbability from './ProbabilityTable'

const Home3 = () => {
  return (
    <div className='w-[98%] mx-auto p-4'>
        <EligibleVoters81/>
        <ElectionForecast/>
        <ElectionStatistics/>
        <MaoistCentreWinningProbability/>
    </div>
  )
}

export default Home3