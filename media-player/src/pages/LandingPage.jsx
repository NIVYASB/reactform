import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {

const navigateByUrl = useNavigate()


  return (
  <>

<Row className='d-flex justify-content-center align-items-center mt-5 mb-5'>

<Col lg={1}></Col> 
<Col lg={5}>
  <h1>Welcome to <span>Media Player</span></h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis qui sed necessitatibus recusandae eius nam voluptate doloremque nesciunt facere soluta consequatur eos iure reiciendis voluptatibus quod obcaecati, nemo magnam saepe!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae impedit ipsum a! Voluptates necessitatibus quisquam mollitia repellendus, cum natus impedit quae molestiae recusandae labore deleniti, voluptatum, tenetur magnam placeat explicabo.</p>
  <button onClick={()=>navigateByUrl('./home')} className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right"></i></button>
  </Col> 
<Col lg={1}></Col> 
<Col lg={5}>
  <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="img1" />
  </Col> 


</Row>

<div className='container d-flex justify-content-center align-items-center mt-5 flex-column'> 
<h3>Features</h3>

<div className='d-flex justify-content-center align-items-center mt-5 '>
<Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}}  src="https://th.bing.com/th/id/OIP.PZBbsL4x1Ww_HaihQc3czAHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card p-4 m-3 style={{ width: '22rem' }}>
      <Card.Img variant="top"  style={{width:'100%',height:'300px'}} src="https://www.bing.com/th/id/OGC.8ce2349b181ea5ea02456466f804b4bc?pid=1.7&rurl=https%3a%2f%2fthatdrop.com%2fwp-content%2fuploads%2f2014%2f09%2ftumblr_n4o1ohptsp1rtutkqo1_500.gif&ehk=1wJNORBuZmnnqPyo4p0BYzljmHMxXw7rPQ1KayPnOjY%3d" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card p-4 m-3 style={{ width: '22rem' }}>
      <Card.Img variant="top"  style={{width:'100%',height:'300px'}} src="https://media.giphy.com/media/t4DcI9P3dNVoA/giphy.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <div className="w-100 d-flex justify-content-center align-items-center mt-5 ">
      <div className="row w-100">
      <div className="col-md-1">
        <div className="col-md-10">
          <div className=" row border-2 w-100 p-5 " style={{borderColor:'white'}}>
<div className=" col-md-5">
  {/*
  */}
  <h3 style={{fontSize:'36px',fontWeight:'600'}} className='text warning'>Simple Fast And Powerful</h3>
  <h6 className='mt-5'> <span style={{fontSize:'28px'}}>Play Everything</span>:Lorem hguygui gugiuy guiguiy guiyi8y t786 frytyutu yuiyiy uyuiyuySome quick example text to build on the card title guh</h6>
  <h6 className='mt-5'> <span style={{fontSize:'28px'}}>Play Everything</span>:Lorem hguygui gugiuy guiguiy guiyi8y t786 frytyutu yuiyiy uyuiyuySome quick example text to build on the card title guh</h6>
  <h6 className='mt-5'> <span style={{fontSize:'28px'}}>Play Everything</span>:Lorem hguygui gugiuy guiguiy guiyi8y t786 frytyutu yuiyiy uyuiyuySome quick example text to build on the card title guh</h6>
  </div>
  <div className="col-md-1"> </div>
  <div className="col-md-6">
    <iframe width="100%" height={'400px'}  src="https://www.youtube.com/embed/iAIBF2ngbWY" title="ANIMAL:Pehle Bhi Main(Full Video) | Ranbir Kapoor,Tripti Dimri |Sandeep V |Vishal M,Raj S |Bhushan K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
  </div>
  </div>

  </div>
      </div>
    </div>
</div>
</div>


    </>
  )
}


export default LandingPage