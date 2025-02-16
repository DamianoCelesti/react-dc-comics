// importo lo shop riga blu
import Shop from "./Shop.jsx";

import ComicsList from "./ComicsList.jsx";

export default function Main() {
    return (
        <main>
            <div className="jumbo"></div>
            <ComicsList />
            <Shop />

        </main>);
}