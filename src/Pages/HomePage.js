import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Main from '../Components/Main';
import '../App.css'
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <>
            <div className='app-container'>
                <Nav />
                <Header />
                <Main />
                <Footer/>
            </div>
        </>
    );
};

export default HomePage;
