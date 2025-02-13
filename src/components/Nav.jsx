const navItems = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];


export default function Navbar() {
    return (
        <ul className="nav">
            {navItems.map((navItem, index) => (
                <li key={index} className="nav-item">
                    <a className="nav-link text-dark fw-bold" href="#">{navItem}</a>
                </li>
            ))}

        </ul>
    );
}



