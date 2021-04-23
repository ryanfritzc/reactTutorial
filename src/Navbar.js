import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Ryans youtube tutoriapenisl</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: '8px',
                }}>New blog</Link>
            </div>
        </nav>
     );
}
//swapped the hyperlinke tag from a href to Link to             Video 23
export default Navbar;