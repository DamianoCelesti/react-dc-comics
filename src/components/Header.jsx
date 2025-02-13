// importo il logo
import Logo from "./Logo.jsx";

// importo nav
import Navbar from "./Nav.jsx";

export default function Header() {
    return (
        <header>
            <nav className="navbar px-5">
                <Logo />
                <Navbar />

                {/* <ul className="nav">
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">CHARACTERS</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">COMICS</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">MOVIES</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">TV</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">GAMES</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">COLLECTIBLES</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">VIDEOS</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">FANS</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">NEWS</a></li>
                    <li className="nav-item"><a className="nav-link text-dark fw-bold" href="#">SHOP</a></li>
                </ul> */}
            </nav >
        </header >
    );
}