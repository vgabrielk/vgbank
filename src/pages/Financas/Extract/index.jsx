import { memo, useState } from 'react';
import './index.css'
const Extract = () => {
    const [search, setSearch] = useState('')
    const values = [
        {
            id: 1,
            title: 'Mercado de seu zé',
            buys: ['Pão', 'Água', 'Refrigerante'],
            date: '22/02/2022',
            value: '22,90'
        },
        {
            id: 2,
            title: 'Boteco',
            buys: ['2 Baldes de cerveja', 'P. batata frita', 'Drink'],
            date: '28/02/2022',
            value: '92,00'
        },
        {
            id: 3,
            title: 'Mercado Livre',
            buys: ['Notebook', 'teclado', 'mousepad', 'RGB led', 'Webcam'],
            date: '02/03/2022',
            value: '3434,00'
        },
        {
            id: 4,
            title: 'Ferreira costa',
            buys: ['Tapete'],
            date: '05/03/2022',
            value: '25,90'
        },
    ]


    return (
        <>
            {values.map(val => (
                <div className="extract" key={val.id}   >
                    <div className='content-extract'>
                        <p>{val.title}</p>
                        <p className='date-buy'>{val.date}</p>
                        <div className="values">
                            <span className='total'>{val.value}</span>
                            {val.buys.map(buy => (
                                <>
                                    <p key={buy}>{buy} <hr /> </p>
                                </>
                            ))}
                        </div>
                    </div>

                </div>
            ))
            }
        </>
    );
}

export default memo(Extract);