import NavBar from '../../components/NavBar/NavBar'

const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default MainLayout;