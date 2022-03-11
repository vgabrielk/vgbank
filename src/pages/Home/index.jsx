import './index.css'

import { useState, memo } from 'react';
import Card from './Card';


const Home = () => {

    const [name, setName] = useState('')
    const lstorage = (e) => {
        localStorage.setItem('name', name)
        location.reload()
    }

    const handleSubmit = (e) => {
        if (e.key == 'Enter') {
            localStorage.setItem('name', name)
            location.reload()
        }
    }
    return (
        <>
            <main className="home container">
                <Card name={name} />
                <div className="home-inputs">
                    <input type="text" id='input' placeholder='Digite seu nome para simular seu cartão!' className='input-write' maxLength={24} onKeyPress={handleSubmit} onChange={(e) => setName(e.target.value)} />
                    <button className='home-button' onClick={lstorage} >Salvar</button>
                </div>
            </main>

        </>
    );
}

export default memo(Home);
