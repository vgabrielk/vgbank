import './index.css'

import { BsEyeFill } from 'react-icons/bs'
import { useState } from 'react'
import Extract from './Extract'
const Financas = () => {
    const [hideBalance, setHideBalance] = useState(false)
    const hide = () => {
        setHideBalance(!hideBalance)
    }
    return (
        <>
            <div className="finances container">
                <div className="finances-balance">
                    <h2>Seu extrato</h2>
                    <button onClick={hide}> <BsEyeFill /></button>

                    {hideBalance ?
                        <div>
                            <p className='balance'> 00,00</p>
                        </div>
                        :
                        <p className='balance'>*****</p>
                    }
                </div>
                <Extract />
            </div>
        </>
    );
}   

export default Financas;