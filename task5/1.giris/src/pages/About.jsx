import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr/>
      <Link style={{marginRight:'10px'}} to="employee">Isciler haqqinda</Link>
      <Link to="company">Sirket haqqinda</Link>

      <Outlet/>


    </div>
  )
}

export default About
