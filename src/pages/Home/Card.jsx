import React from 'react';
import VgCard from '../../assets/images/vgcard.svg'

const Card = (props) => {

    return (
        <>
            <div className="card-bank">
                <img className='bank-logo-finances' src={VgCard} alt="" />
                <p className='type-name'>
                    {localStorage.getItem('name')}
                </p>
                <p className='number-card'>
                    8888 8888 88888 8888
                </p>
                <div className="visa-mark" style={{ width: '50px' }}>
                    <img className='visa-logo' src='https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' alt="" />
                </div>
            </div>
        </>
    );
}

export default Card;