import React from 'react'
import { NavDropdown, Navbar, Nav } from 'react-bootstrap'

function NaviBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/women">Women</Nav.Link>

        <NavDropdown title="My Account" id="basic-nav-dropdown">
          <NavDropdown.Item href="/signin">Sign in</NavDropdown.Item>
          <NavDropdown.Item href="/account">Create Account</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Collapse className="justify-content-end">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl12ZPeZYQ-6Qslu8apHh-E8zw3T1JyG4KqA&usqp=CAU/10/" width="50" />
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NaviBar;