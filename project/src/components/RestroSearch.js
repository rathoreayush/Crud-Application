
import React, { Component } from 'react'
import {Table} from "react-bootstrap"
export default class RestroSearch extends Component {
constructor(){
    super()
    this.state={
        searchData:null
    }
}
search(key){
    
 
    fetch('http://localhost:3000/Resto?q='+key).then((data)=>{
data.json().then((res)=>{
   this.setState({searchData:res})
})
    })
   
}
  render() {
    return (
      <>
      <center>
      <div>
        <h2>Data Search</h2>
        <input type="text" onChange={(e)=>this.search(e.target.value)}/>
      </div>
      { <div>
        {
            this.state.searchData?
            <Table striped bordered hover>
      <thead>
        <tr>
          <th> Name</th>
          <th>Address</th>
          <th>rating</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
                {
                 this.state.searchData.map((item)=>{
return <tr>
<td>{item.name}</td>
<td>{item.address}</td>
<td>{item.rating}</td>
<td>{item.email}</td>
    </tr>
                 })   
                }
             </tbody>
    </Table>:<p></p>
        }
      </div> }
      </center>
      </>
    )
  }
}
