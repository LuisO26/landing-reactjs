import React, {Component} from 'react'
import {Navbar,Header,NavItem,Nav,Collapse,Brand,MenuItem,NavDropdown} from 'react-bootstrap'

class NavbarMenu extends Component{
    render = ()=>(
                <div className="row carusel">
                    <Navbar className="container-fluid navegador"  inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                            <a href="#brand">HACKBANERO</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                            HACKATION
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                            CURSOS
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                            TALLERES
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                            CARRIERS
                            </NavItem>
                            </Nav>
                            
                        </Navbar.Collapse>
                        </Navbar>
                </div>

    )
}
export default NavbarMenu;