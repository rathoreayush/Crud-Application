
import React, { Component } from 'react'
import withRouter from './withrouter'

import Card from 'react-bootstrap/Card';

 class RestoUpdate extends Component {
  constructor(props)
{
    super(props);
    this.state={
        name:null,
        address:null,
        rating:null,
        email:null

    }
} 
componentDidMount(){
  fetch('http://localhost:3000/Resto/'+this.props.params.id).then((response)=>{
    response.json().then((result)=>{
      // console.log(result);
      this.setState({name:result.name,
        address:result.address,
        rating:result.rating,
        email:result.email})
    })
  })
}
update(){
  fetch('http://localhost:3000/Resto/'+this.props.params.id,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(this.state)
  }).then((res)=>{
res.json().then((result)=>{
alert('data update');
})
  })
}

  render() {
    console.log(this.state);
    // console.log('Props:', this.props.params.id)
    return (
      <>
     <div>
     <center>
     <h1 style={{marginTop:"2rem",marginBottom:"2rem", color:"green",fontFamily:"cursive",fontWeight:"bolder",fontSize:"3rem"}}>Resto Update Form</h1>
 <div>
 <Card style={{ width: '18rem' }}>
      <Card.Body>
    <p style={{fontSize:"1.2rem",color:"red",fontFamily:"cursive",fontWeight:"bolder"}}>Enter Resturant Name:</p>
    <input type="text" placeholder="Name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
    <br/><br/>
    <p style={{fontSize:"1.2rem",color:"red",fontFamily:"cursive",fontWeight:"bolder"}}>Enter Resturant Address:</p>
    <input type="text" placeholder="Address" onChange={(e)=>{this.setState({address:e.target.value})}}/>
    <br/><br/>
    <p style={{fontSize:"1.2rem",color:"red",fontFamily:"cursive",fontWeight:"bolder"}}>Enter Resturant Rating:</p>
    <input type="text" placeholder="Rating" onChange={(e)=>{this.setState({rating:e.target.value})}}/>
    <br/><br/>
    <p style={{fontSize:"1.2rem",color:"red",fontFamily:"cursive",fontWeight:"bolder"}}>Enter Resturant Email:</p>
    <input type="text" placeholder="Email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
    <br/><br/>
    <button onClick={()=>this.update()}style={{backgroundColor:"blue",width:"7rem",color:"white"}}>Update</button>
      </Card.Body>
    </Card>
   
 </div>
 </center>
     </div>
      </>
    )
  }
}
export default withRouter(RestoUpdate);