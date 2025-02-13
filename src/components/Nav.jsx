// const navItems = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];
// const navItems = [
//     { id: 1, text: "CHARACTERS", url: "#" },
//     { id: 2, text: "COMICS", url: "#" },
//     { id: 3, text: "MOVIES", url: "#" },
//     { id: 4, text: "TV", url: "#" },
//     { id: 5, text: "GAMES", url: "#" },
//     { id: 6, text: "COLLECTIBLES", url: "#" },
//     { id: 7, text: "VIDEOS", url: "#" },
//     { id: 8, text: "FANS", url: "#" },
//     { id: 9, text: "NEWS", url: "#" },
//     { id: 10, text: "SHOP", url: "#" }
// ];

export default function Navbar(props) {
    return (
        <ul className="nav">
            {props.headerProps.map((link) => (
                <li key={link.id} className="nav-item">
                    <a className="nav-link text-dark fw-bold" href={link.url}>{link.text}</a>
                </li>
            ))}

        </ul>
    );
}




