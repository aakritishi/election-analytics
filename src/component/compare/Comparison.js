import React from 'react'
import TotalPChange from './TotalPChange'
import VotersComparison from './VotersComparison'

const Comparison = () => {
  return (
    <div className='w-[98%] mx-auto p-4'>
        <TotalPChange/>
        <VotersComparison/>
    </div>
  )
}

export default Comparison