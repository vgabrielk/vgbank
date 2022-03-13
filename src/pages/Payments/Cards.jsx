import './index.css'
import Card from '../Home/Card'
import Button222 from '../Home/Button222';

const Cards = () => {
    return (
        <>
            <div className="cards">
                <div className="cards-content">
                    <div className="card">
                        <Card />
                        <Button222 title='Pagar fatura'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;