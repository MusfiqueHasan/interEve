import React from 'react';
import NavBar from '../../Header/Navbar/NavBar';
import './Home.css'
import CommonPage from '../../SharedPages/CommonPage/CommonPage';
import HomePage from '../HomePage/HomePage';
import Servises from '../Servises/Servises';

const Home = () => {
    return (
        <>
            <CommonPage title='Home'>
                <NavBar />
                <HomePage />
                <Servises />
                
            </CommonPage>
        </>
    );
};

export default Home;