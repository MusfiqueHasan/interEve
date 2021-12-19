import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import Sidebar from '../Sidebar/Sidebar';
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed="top" className=' md:h-20  bg-gray-50 z-10 '>
            <Container className=''>
                <p>interEve</p>
                <Nav className="ms-auto w-full flex justify-end items-center">
                    <div className=' flex mr-10'>
                        <p className='mr-10 text-xs font-extrabold'><span className='text-gray-500 mr-3'>call: </span>+8801312141184</p>
                        <p className='mr-10 text-xs font-extrabold'><span className='text-gray-500 mr-3'>email: </span>musfiquehasan08@gmail.com</p>
                    </div>
                    <Sidebar/>
                </Nav>
            </Container>
        </Navbar>
    );
};
 

export default NavBar;