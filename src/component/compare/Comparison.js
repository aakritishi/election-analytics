import React from 'react'
import TotalPChange from './TotalPChange'
import VotersComparison from './VotersComparison'
import MayorVoteComparison from './MayorVoteComparison'
import DeputyMayorVoteComparison from './DeputyMayorVoteComparison'
import WardPreComparison from './WardPreComparison'
import KeyObservations from './WardPreExp'
// import MaoistCentreWinningProbability from './ProbabilityTable'
import VotesMayorComparison from './VotesMayorComparision'
import VotesDeputyComparison from './VotesDeputyComaprison'
// import EligibleComparison from './EligibleComparison'
// import VoteComparison from './VoteComaprision'

const Comparison = () => {
  return (
    <div className='w-[98%] mx-auto p-4'>
        <TotalPChange/>
        <VotersComparison/>
        <MayorVoteComparison/>
        <DeputyMayorVoteComparison/>
        <VotesMayorComparison/>
        <VotesDeputyComparison/>
        <WardPreComparison/>
        <KeyObservations/>
        {/* <MaoistCentreWinningProbability/> */}
        {/* <EligibleComparison/>  */}
        {/* <VoteComparison/> */}
    </div>
  )
}

export default Comparison