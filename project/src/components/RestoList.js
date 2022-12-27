import React,{Component} from "react"
import {Link} from "react-router-dom"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {Table} from "react-bootstrap"
class RestoList extends Component{
    constructor(){
        super();
        this.state={
            list:null
        }
    }
    componentDidMount(){
    this.getData()
    }
    getData(){
        fetch("http://localhost:3000/Resto").then((Response)=>{
            Response.json().then((result)=>{
// console.log(result);
this.setState({list:result})
            })
        })
    }

delete(id){
    fetch('http://localhost:3000/Resto/'+id,{
        method:"DELETE"
    }).then((result)=>{
result.json().then((res)=>{
alert('data delete');
this.getData()
})
    })
}


    render(){
        //  console.log(this.state.list);
        return(
         <div>
    {
       this.state.list?
       <Table striped bordered hover>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Address</th>
           <th>Rating</th>
           <th>Email</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
        {
            this.state.list.map((item)=>{
               return <tr>
                <td>{item.id}</td>
<td>{item.name}</td>
<td>{item.address}</td>
<td>{item.rating}</td>
<td>{item.email}</td>
<td><Link to={"/update/"+item.id}><AiFillEdit/></Link></td>
<span onClick={()=>this.delete(item.id)}><AiFillDelete/></span>
                    </tr>
            })
        }
         </tbody>
    </Table>:<p>wait....</p> 
    }
         </div>
        )
    }
}
export default RestoList