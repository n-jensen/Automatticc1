import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // mobile view
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize',showButton);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img className="photo" src={"../../images/tit1.png"} />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ?'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                                Inventory
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                                Finance
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/TradeSale' className='nav-links' onClick={closeMobileMenu}>
                                Trade/Sell
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
