import React from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {
  const blog = useSelector((item)=>item.blog)
  console.log(blog)
  return (
    <div>
      {/* {blog.map((item)=>
      <h1>{item.name}</h1>
      
      )} */}
    </div>
  )
}

export default Contact