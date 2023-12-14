import { Link } from 'react-router-dom';


function Popup({ onBodyChange }) {
    return (
        <div className="popup-container">
            <div className="popup-body">
                <h3><Link style={{ textDecoration: 'none', color: 'black', font: '' }} onClick={() => onBodyChange("Trees")} to="/Trees">My Trees</Link></h3>
                <h3><Link style={{ textDecoration: 'none', color: 'black' }} onClick={() => onBodyChange("Account")} to="/Account">My Account</Link></h3>
                <h3><Link style={{ textDecoration: 'none', color: 'black' }} to="/orchard-management-frontend">Help</Link></h3>
                <h3><Link style={{ textDecoration: 'none', color: 'black' }} to="/orchard-management-frontend">Logout</Link></h3>
            </div>
        </div>
    )
}

export default Popup;