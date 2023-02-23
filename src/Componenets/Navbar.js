import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
 
} from 'mdb-react-ui-kit';
import logo from '../Assets/TradExpress.svg'
import '../Style/Navbar.css'
import { Link } from 'react-router-dom';



export default function Navbar() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar id='navbar' expand='lg'>
      <MDBContainer fluid>
        <Link to="/"><img src={logo} alt="" /></Link>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse  navbar show={showNavRight}>
          <MDBNavbarNav  right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink id='navtag' active aria-current='page' href='#'>
              Instant Buy/Sell
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink id='learn' href='#'>Learn</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><button id='btn-log'>Log in</button></MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='Getstartedpage'><button id='btn-get'>Get Started</button></Link>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}