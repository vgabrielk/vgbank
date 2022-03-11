import './index.css'

import { useState, memo } from 'react';
import Card from './Card';


const Home = () => {

    const [name, setName] = useState('')
    const lstorage = (e) => {
        localStorage.setItem('name', name)
        location.reload()
    }

    return (
        <>
            <main className="home container">
                <Card name={name} />
                <input type="text" id='input' placeholder='Digite seu nome para simular seu cartão!' onBlur={lstorage} className='input-write' maxLength={24} onChange={(e) => setName(e.target.value)} />
            </main>

        </>
    );
}

export default memo(Home);
