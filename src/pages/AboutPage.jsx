import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>
          This a React Feedback App it can be used for a product or a service
        </p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
