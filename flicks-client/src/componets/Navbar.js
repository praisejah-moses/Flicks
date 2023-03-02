import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

let logo = 'assets/images/flicksTransparent.png'

const Navbar = () => {
    return ( 
        <nav className ='navbar'>

            <div className = 'navbar-container'>
            <Link to='/'>
            <motion.img className = 'logo' src= {logo} alt="Flicks Logo"
            /> 
            </Link>
            <div className = 'avatar'></div>

            </div>

        </nav>
    );
};

export default Navbar;