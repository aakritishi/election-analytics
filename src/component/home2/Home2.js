import React from 'react'
import DMayorStanding from './DMayorStandings'
import Mayors from './Mayors'
import TotalVoters from './TotalVoters'

const Home2 = () => {
  return (
    <div className='w-[98%] mx-auto p-4'>
      <TotalVoters/>
      <Mayors/>
      <DMayorStanding/>
    </div>
  )
}

export default Home2