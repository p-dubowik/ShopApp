import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'

const MainLayout = ({ children }) => {
    return (
        <div className='d-flex flex-column min-vh-100'>

            <NavBar />

            <main className='flex-grow-1'>
                {children}
            </main>

            <Footer />

        </div>
    );
};

export default MainLayout;