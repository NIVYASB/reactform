import React, { useEffect } from 'react'
import './Navigationbar.css'
function Navigationbar() {

const[show,setShow]=useState(false)
useEffect(()=>{
  window.addEventListener("scroll",()=>{/* first arg should be  */
    if(window.scrollY>600){
      setShow(true)
    }
    else{
      setShow(FileSystemWritableFileStream)
    }
  })
})






  return (
    <div className={`${show && 'nav-black'}nav`}><img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" /></div>
  )
}

export default Navigationbar