import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import './Home.css' 

function Home() {
  return (
    <> 

    <div className="container-fluid d-flex justify-content-between align-items-center mt-5">
<Add/>
<Link id='link'>Watch History</Link>
    </div>
    <div className='container-fluid d-flex justify-content-center align-items-center w-100'>
      <div className='col-md-9' >
        <h4>All Videos</h4>
        <View/>
      </div>
      <div className ='col-md-3'>
        <Category/>
      </div>
    </div>
    </>
  )
}

export default Home