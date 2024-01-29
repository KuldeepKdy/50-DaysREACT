import React from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import ForeCast from './components/ForeCast'

const App = () => {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons/>
      <Inputs/>

      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <ForeCast title ="Hourely Forecast"/>
      <ForeCast title ="Daily Forecast"/>
    </div>
  )
}

export default App