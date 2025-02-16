const shopBox = [
    {
        id: 1,
        img: "./src/assets/img/buy-comics-digital-comics.png",
        text: "DIGITAL COMICS"
    },
    {
        id: 2,
        img: "./src/assets/img/buy-comics-merchandise.png",
        text: "DC MERCHANDISE"
    },
    {
        id: 3,
        img: "./src/assets/img/buy-comics-shop-locator.png",
        text: "SHOP LOCATOR"
    },
    {
        id: 4,
        img: "./src/assets/img/buy-comics-subscriptions.png",
        text: "SUBSCRIPTION"
    },
    {
        id: 5,
        img: "./src/assets/img/buy-dc-power-visa.svg",
        text: "POWER VISA"
    }
];



export default function Shop() {
    return (
        <div className="py-3 bg-primary text-white d-flex flex-row justify-content-center">
            {shopBox.map((box) => (
                <div key={box.id} className="d-flex flex-row align-items-center">
                    <img src={box.img} alt="shop" srcset="" />
                    <h5 className="ps-3 pe-3">{box.text}</h5>
                </div>
            ))}
        </div>

    );
}

