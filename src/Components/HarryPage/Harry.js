import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Harry() {
    const [harry, setHarry] = useState();
    const [vaiAparecer, setVaiaparecer] = useState(false);


    function getHarry() {
        axios.get('http://hp-api.herokuapp.com/api/characters').then((response) => {
            console.log(response.data.message);
            setHarry(response.data.message);
            setVaiaparecer(true);
        });
    }

    return (
        <>
            <h1>Personagens Harry Potter</h1>
            <Link style={{ textdecoration: 'none' }} to='/'>Vá para Hogwarts</Link>
            <hr />
            <button onClick={() => {
                getHarry();
            }}>
                Alohomora
            </button>
            {vaiAparecer && <img src={harry} alt='Ilustração personagens' />}
        </>
    );
}