import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import CreateStudent from "./CreateStudent";
import StudentList from "./StudentList";
import EditStudent from "./EditStudent";
import SearchStudent from "./SearchStudent";
import React, {useState} from "react";


function NavBarComp() {

    const [searchValue, setValue ] = useState(()=>"");

    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Student Management</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/create-student"}>Create Student</Nav.Link>
                                <Nav.Link as={Link} to={"/student-list"}>Student List</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action3">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            {/*<Nav.Link as={Link} to={"/search/:name"}>*/}
                                <Form className="d-flex" >
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        value={searchValue}
                                        onChange={e => setValue(e.target.value )}
                                    />
                                    {/*<Button variant="outline-success" type="submit"*/}
                                    {/*        class="btn btn-success">Search</Button>*/}
                                    <Link className="search-student"
                                          to={"/search/" + searchValue}>
                                        Search
                                    </Link>
                                </Form>
                            {/*</Nav.Link>*/}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route path="/create-student" element={<CreateStudent/>}>
                    </Route>

                    <Route path="/student-list" element={<StudentList/>}>
                    </Route>

                    <Route path="/update/:name" exact element={<EditStudent/>}>
                    </Route>

                    <Route path="/search/:name" element={<SearchStudent/>}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default NavBarComp;