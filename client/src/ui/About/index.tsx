import React from 'react'
import PreLoader from '../../components/PreLoader'
import Body from './partials/Body'
import Header from './partials/Header'

const About = () => {
  return (
    <div className='flex flex-col p-3'>
      <Header />
      <Body />
    </div>
  )
}

export default About