// importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
// import './App.css'

function App() {
  const navItems = [
    { id: 1, text: "CHARACTERS", url: "#" },
    { id: 2, text: "COMICS", url: "#" },
    { id: 3, text: "MOVIES", url: "#" },
    { id: 4, text: "TV", url: "#" },
    { id: 5, text: "GAMES", url: "#" },
    { id: 6, text: "COLLECTIBLES", url: "#" },
    { id: 7, text: "VIDEOS", url: "#" },
    { id: 8, text: "FANS", url: "#" },
    { id: 9, text: "NEWS", url: "#" },
    { id: 10, text: "SHOP", url: "#" }
  ];

  return (
    <>
      <Header appLink={navItems} />
      <Main />
      <Footer />
    </>
  );
}

export default App
