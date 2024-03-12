
import './App.css'
import { TextField } from '@mui/material'
import { Button } from 'bootstrap'
import{useState} from 'react'
function App() {
  //js code
  /* states to store the data from the input fields */
const [principle,setPrinciple]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)
const[isPrinciple,setIsPrinciple]=useState(true)
const[isRate,setIsRate]=useState(true)
const[isYear,setIsYear]=useState(true)

const validate = (e)=>{const {name, value}=e.target 
console.log(name);
  console.log(value)
  if(!!value.match(/^[0-9]*&/)){if(name==='principle')
  {setPrinciple(value)
  setIsPrinciple(true)
}
else if (name==='rate'){
  setRate(value)
setIsRate(true)
}
else{
  setYear(value)
  setIsYear(true)
}
}else{
  if(name===)
}
}

  return (
    <>
    <div style={{height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
    <div className='bg-light p-5 rounded' style={{width:'500px'}}>
     <h1>Simple interest App</h1>
     <p>Calculate your Simple interest Easily</p>
     <div style={{height:'150px'}}className='bg-warning rounded mt-5 d-flex justify-content-center align-items-center flex-column'> 
     <h1>₹ 200</h1>
     <p>Total simple interest</p>
     </div>
    
     <form className="mb-3 mt-5">
     <TextField id="outlined-basic" name='principle'onChange={(e)=>validate(e)} label="₹ Principal amount" variant="outlined" className="w-100" />
     </div>
     <div className="mb-3">
     <TextField id="outlined-basic" name='rate'onChange={(e)=>validate(e)} label="Rate of Interest(p.a)%" variant="outlined" className="w-100" />
     </div>
     <div className="mb-3">
     <TextField id="outlined-basic" name='year'onChange={(e)=>validate(e)} label="₹ Principal amount" variant="outlined" className="w-100" />
     </div>

     </form>
     
    
     </div>
    </>

  )
}

export default App
