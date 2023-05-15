import { NavLink } from 'react-router-dom';
import "../Styles/Navbar.scss";

const Navbar = () => {
    return (
        <nav>
        <div className="logo">
            <h1>Cheapest games</h1>
        </div>

        <div className="links">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/browse">Browse</NavLink>
        </div>
        </nav>
    )
}

export default Navbar;