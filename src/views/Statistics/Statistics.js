import React from 'react'
import StatisticsBreadCrumb from './statisticsBreadCrumb/statisticsBreadCrumb'
import StatisticsHome from './statisticsHome/statisticsHome'

export default function Statistics() {
  return (
    <div className='w-full h-[100vh] overflow-y-auto'>
        <StatisticsBreadCrumb />
        <StatisticsHome />
    </div>
  )
}
