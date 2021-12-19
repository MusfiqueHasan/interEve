

import React, { useState } from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
    return (
        <section >
            <button onClick={toggleShow} className=" ">

                <i class="fas fa-bars"></i>
            </button>
            <div>
                <Offcanvas show={show} onHide={handleClose} placement='end'  className='mt-20 bg-gray-100'>

                    <Offcanvas.Body  className=''>
                        <Nav className="flex flex-column justify-evenly h-1/2">
                            <NavLink
                                to='/home'
                                className=' text-black no-underline uppercase tracking-widest hover:text-gray-400   mr-10 text-sm'
                                activeStyle={{ color: 'orange' }}
                            >
                                Home
                            </NavLink>

                        </Nav>
                    </Offcanvas.Body>

                </Offcanvas>
            </div>
        </section>
    );
};






export default Sidebar;

