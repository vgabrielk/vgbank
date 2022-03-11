import { Link } from 'react-router-dom';
import './index.css'
import { FaHome } from 'react-icons/fa'
import { GrMoney } from 'react-icons/gr'
import { FaProductHunt } from 'react-icons/fa'

import BankLogo from '../../assets/images/banklogo.svg'

const SideBar = () => {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-nav">
                    <Link to='/'><FaHome /> </Link>
                    <Link to='/financas'><GrMoney /> </Link>
                    <Link to='/payments'><FaProductHunt /> </Link>
                </div>
                <img className='bank-logo' src={BankLogo} alt="" />
            </aside>
        </>
    );
}

export default SideBar;