import Cards from './Cards';
import './index.css'

const Payments = () => {


    return (
        <>
            <div className="payments container">
                <h2>Área de pagamentos</h2>
                <p>Olá, <span className='capitalize'>{localStorage.getItem('name')} </span> , qual será a forma de pagamento? </p>
                <Cards/>
            </div>
        </>
    );
}

export default Payments;