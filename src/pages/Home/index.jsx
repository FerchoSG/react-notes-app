import React from 'react';
import Navbar from '../../components/Navbar';
import NotesList from '../../components/NotesList';
import './Home.css';


const Home = () => {

    return (
        <div className="">
            <Navbar />
            <NotesList/>
        </div>
    );
}

export default Home;