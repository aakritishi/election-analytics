import React from 'react'
import TotalPopulation from './TotalPopulation'
import AgeGroup from './AgeGroup'
import EducationData from './EducationalData'
import DisabilityData from './DisabilityData'
import Mayor from './Mayor'
import MayorStanding from './MayorStandings'
import Voters74 from './Voters74'
import WardPresident2074 from './WardPre74'

const Home = () => {
  return (
    <div className='w-[98%] mx-auto p-4'>
        <TotalPopulation/>
        <Voters74/>
        <AgeGroup/>
        <EducationData/>
        <DisabilityData/>
        <Mayor/>
        <MayorStanding/>
        <WardPresident2074/>
    </div>
  )
}

export default Home