import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Nav from '../Components/Nav';

function ConfirmationPage() {
    return (
        <section className='app-container'>
            <Nav />
            <article className="confirmation-grid">
                <h2 style={{fontFamily:'Karla'}}>Your reservation has been successfully confirmed!</h2>
                <img src="./restaurant.jpg" alt="restaurant room" />
                <div className="button-group">
                    <Link to="/booking">
                        <button className="confirm-button">Reserve another Table</button>
                    </Link>
                    <Link to="/">
                        <button className="confirm-button">Back Home</button>
                    </Link>
                </div>
            </article>
        </section>
    );
}

export default ConfirmationPage;
