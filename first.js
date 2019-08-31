import React,{Component} from 'react';
import './App1.css';
import { Button,Nav,NavbarBrand,NavDropdown,Navbar,FormControl } from 'react-bootstrap';
import {Form,Col,Card} from 'react-bootstrap';
import Image from './ak.jpg';

class First extends React.Component {
  render()
  { 
   
  
    return (
        
        <div className="App1" align="center" >
            <Navbar bg="secondary" expand="lg" variant="dark">
      <Navbar.Brand  align="center"><h1 >  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;HOME</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
       <div>       <Form inline>
        <Button bg="danger">Login</Button>
        <h1>&nbsp;</h1>
          <Button bg="danger">Signup</Button>
        </Form>
        </div>
 
         
      </Navbar.Collapse>
    </Navbar>
  
    
<p><h3>Exam Hall Seating Arrangement System is developed
for the college to simplify examination hall allotment and
seating arrangement. It facilitates to access the examination
information of a particular student in a particular class. The
purpose of developing exam hall seating arrangement system is
to computerized the traditional way of conducting exams.
Another purpose for developing this software is to generate the
seating arrangement report automatically during exams at the
end of the session or in between the session. The scope of the
project is the system on which the software is installed, i.e. the
project is developed as a web based application, and it will
work for a particular institute. Mostly students are facing many
problem for finding the exam hall and their seats respectively</h3> </p> 
</div>   
   
        
    );
  }
}


 

export default First;