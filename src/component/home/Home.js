import React from 'react'
import TotalPopulation from './TotalPopulation'
import AgeGroup from './AgeGroup'
import EducationData from './EducationalData'
import DisabilityData from './DisabilityData'
import Mayor from './Mayor'

const Home = () => {
  return (
    <div className='w-[98%] mx-auto p-4'>
        <TotalPopulation/>
        <AgeGroup/>
        <EducationData/>
        <DisabilityData/>
        <Mayor/>
    </div>
  )
}

export default Home