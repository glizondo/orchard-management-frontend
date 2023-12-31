import Apple from './images/apple.jpg';
import { Link } from 'react-router-dom';


function Header({ onPopUpClick, onBodyChange}) {

    return (
        <div>
            <header className="header">
                <Link onClick={() => onBodyChange("Dashboard")} className="header-title" to="/orchard-management-frontend/">The Orchards' Home</Link>
                <span className='header-tree-count'>
                    <h3 className='header-tree-count-text'>William's Trees: 10</h3>
                </span>
                <img onClick={onPopUpClick} className="image-icon-header" src={Apple} />
            </header>
        </div>
    );

}

export default Header;