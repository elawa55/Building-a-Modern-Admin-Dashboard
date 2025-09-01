import React from 'react'
import StartsGrid from './StartsGrid'
import ChartSection from './ChartSection'
import TableSection from './TableSection'
import Activityfeed from './Activityfeed'

export default function Dashboard() {
  return (
    <div className='space-y-6' >

<StartsGrid />      
<ChartSection />

<div className="grid grid-cols-1 xl:grid-cols-3  gap-6">
<div className="xl:col-span-2">
  <TableSection />
</div>
 <div className="">
  <Activityfeed />
 </div>
</div>
    </div>
  )
}