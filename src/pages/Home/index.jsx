import './index.css'

import { useState, memo } from 'react';
import Card from './Card';
import Button222 from './Button222';


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
                    <input type="text" id='input' autoComplete='off' placeholder='Digite seu nome para simular seu cartão!' className='input-write' maxLength={24} onKeyPress={handleSubmit} onChange={(e) => setName(e.target.value)} />
                    <Button222 title='Salvar' lstorage={lstorage} />
                </div>
            </main>

        </>
    );
}

export default memo(Home);
