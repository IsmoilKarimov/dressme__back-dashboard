import React from 'react'
import StatisticsBreadCrumb from './statisticsBreadCrumb/statisticsBreadCrumb'
import StatisticsHome from './statisticsHome/statisticsHome'

export default function Statistics() {
  return (
    <div className='w-full h-fit'>
        <StatisticsBreadCrumb />
        <StatisticsHome />
    </div>
  )
}
