import React from 'react'
import './Ranking.css'
import ChartRanking from '../ChartRanking/ChartRanking'
const Ranking = () => {
  return (
    <>

      <div className='ranking-box text-white'>
        <div className="row">
          <div className="col lg-6">
            <h5 className='ranking-heading'>Total Earning</h5>
            <h1 className='ranking-sub-heading'>ZAR 2.5M</h1>
          </div>
          <div className="col lg-6 chart-container">
            <ChartRanking />
          </div>
        </div>
      </div>

    </>
  )
}

export default Ranking