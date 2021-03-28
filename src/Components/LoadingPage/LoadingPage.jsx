import React from 'react'

const LoadingPage = (props) => (
  props.inline ? 
  (
    <div className='loading'>
      <p>Loading...</p>
    </div>
  ) :
  (
    <main className='section__loading'>
      <p>Loading...</p>
    </main>
  )
)

export default LoadingPage