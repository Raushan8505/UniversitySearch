import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SingleCard from './SingleCard';
import { Link, useNavigate } from 'react-router-dom';


function NavbarUp({data, setData}) {
 
    const [search , setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(
            `http://universities.hipolabs.com/search?country=${search}&limit=10`
          );
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
        // console.log(search);
      };
    console.log(search);
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#"><h2>University</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
            <Link to='fav'>Fav</Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>setSearch(e.target.value)}
                />
                <Button onClick={handleSubmit}  variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
}

export default NavbarUp