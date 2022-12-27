
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';


export default class RestoCreate extends Component {
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
create=()=>{
    fetch('http://localhost:3000/Resto',{
        method:'post',
        headers:{
'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
result.json().then((res)=>{
console.log(res);
})
    })
}
  render() {
    return (
        <>
        <center>
 <h1 style={{marginTop:"2rem",marginBottom:"2rem", color:"green",fontFamily:"cursive",fontWeight:"bolder",fontSize:"3rem"}}>Resto Create Form</h1>
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
    <button onClick={this.create}style={{backgroundColor:"blue",width:"7rem",color:"white"}}>Submit</button>
      </Card.Body>
    </Card>
   
 </div>
 </center>
        </>
    )
  }
}
