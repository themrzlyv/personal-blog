import React from 'react'
import Body from './partials/Body'
import Header from './partials/Header'

const Home = () => {
  return (
    <div className='flex flex-col p-3 '>
      <Header />
      <Body />
    </div>
  )
}

export default Home