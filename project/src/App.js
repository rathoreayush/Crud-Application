
import {BrowserRouter,Route, Routes,Link} from "react-router-dom"
import {Container,Navbar,Nav} from "react-bootstrap"
import RestoCreate from "./components/RestoCreate"
import RestoList from "./components/RestoList"
import RestoSearch from "./components/RestroSearch"
import RestoUpdate from "./components/RestoUpdate"
function App(){
  return(
     <div className="App">
      <BrowserRouter>
      <Navbar style={{backgroundColor:"#5f27cd"}} expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{color:"#fff",fontFamily:"fantasy",fontSize:"1.1rem",fontWeight:"bolder"}}>Resturant Rating Application</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link >
            <Link to="/">List</Link>
            </Nav.Link>
            <Nav.Link><Link to="/create">Create</Link></Nav.Link>
            <Nav.Link><Link to="/update/:id">Update</Link></Nav.Link>
            <Nav.Link ><Link to="/search">Search</Link></Nav.Link>
         
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       <Routes>
 
     <Route path="/" element={<RestoList/>}/>
     <Route path="/create" element={<RestoCreate/>}/>
     <Route path="/search" element={<RestoSearch/>}/>
     <Route path="/update/:id" element={<RestoUpdate/>}/> 


     </Routes>
      </BrowserRouter>
     </div>
  )
}
export default App
