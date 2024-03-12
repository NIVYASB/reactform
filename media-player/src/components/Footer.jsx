import React from 'react'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook,faInstagram,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faFilm } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    
    <div style={{height:'300px'}}className='w-100 justify-content-center align-items-center  d-flex flex-column'>
      <div className='w-100 justify-content-evenly d-flex'>
       
     
<div className='website' style={{width:'400px'}}>
<FontAwesomeIcon icon={faVideo} style={{color:'orange',fontSize:'30px'}}/>
<span className='ms-3' style={{fontSize:'30px',color:'white'}}>Video Player</span>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi natus voluptatem ab, voluptates obcaecati illum sint amet perspiciatis atque suscipit iste nihil tempore commodi, nostrum praesentium debitis quas ipsa. Laborum.</p>
</div>

<div className='links'>
  <p className='mt-3'><Link to={'/'}>Landing Page</Link></p>
<h4>Links</h4>
<p><Link to={'/home'}>Home</Link></p>

<p><Link to={'/WatchHistory'}>WatchHistory</Link></p>
    </div>
    <div className='guides'>
      <h4>Guides</h4>
      <p>React</p>
      <p>ReactBootsrap</p>
      <p>BootsWatch</p>
      <p></p>
    </div>
    <div className='contact'>
    <h4>Contacts</h4>
    <div className='d-flex mt-3'> 
    <input type="text" className='form-control' placeholder='Enter your Email ID'/>
    <button className='btn btn-warning ms-2'>Subscribe</button>
    </div>
    <div className='d-flex justify-content-around mt-3 pt-2'>
    <FontAwesomeIcon icon={faFacebook} size='2xl' />
    <FontAwesomeIcon icon={faInstagram} size='2xl'/>
    <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
    <FontAwesomeIcon icon={faTwitter} size='2xl' />
    </div>
      </div>
      </div>
      </div>
      
  )
}

export default Footer