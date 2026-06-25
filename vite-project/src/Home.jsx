import React from 'react'

const Home = ({Name, Type, LifeSpan}) => {
    // console.log(props)
  return (
    <div>{Name}{Type},{LifeSpan}</div>
  )
}

export default Home