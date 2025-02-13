export default function Footer() {
    return (
        <footer>
            {/* px-5 classe bootstrap ma personalizzata */}
            <div className="sfondo px-5 text-white">
                <div className="d-flex justify-content-between align-items-center container-logo">
                    <div className="d-flex gap-5 text-white mt-5 mb-5">
                        <div>
                            <h5>DC COMICS</h5>
                            <ul className="list-unstyled">
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                            <h5>SHOP</h5>
                            <ul className="list-unstyled">
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                        </div>


                        <div>
                            <h5>DC</h5>
                            <ul className="list-unstyled">
                                <li>Terms Of Use</li>
                                <li>Privacy policy (New)</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>


                        <div>
                            <h5>SITES</h5>
                            <ul className="list-unstyled">
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center logo-grande">
                        {/* <img src="./src/assets/img/dc-logo-bg.png" alt="dc" srcset="" /> */}
                    </div>
                </div>
            </div>
            <div className="d-flex px-5 pt-4 pb-4 bg-dark">
                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-primary text-white">SIGN-UP NOW!</button>
                </div>
                <div className="d-flex align-items-center ms-auto gap-4">
                    <p className="text-primary mb-0">FOLLOWS US</p>
                    <div className="d-flex align-items-center gap-4">
                        <img src="../src/assets/img/footer-facebook.png" alt=""></img>
                        <img src="../src/assets/img/footer-periscope.png" alt=""></img>
                        <img src="../src/assets/img/footer-twitter.png" alt=""></img>
                        <img src="../src/assets/img/footer-youtube.png" alt=""></img>
                    </div>
                </div>
            </div>
        </footer>
    );
}