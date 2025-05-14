import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer'


function ConfirmationPage() {
    return (
        <section className="app-container">
            <Nav />
            <article className="confirmation-container">
                <div className="confirmation-text">
                    <h2>Your reservation has been successfully confirmed!</h2>
                    <div className="button-group">
                        <Link to="/booking">
                            <button className="confirm-button">Reserve another Table</button>
                        </Link>
                        <Link to="/">
                            <button className="confirm-button">Back Home</button>
                        </Link>
                    </div>
                </div>
                <div className="confirmation-image">
                    <img src="./restaurant.jpg" alt="restaurant room" />
                </div>
            </article>
            <Footer/>
        </section>
    );
}

export default ConfirmationPage;
