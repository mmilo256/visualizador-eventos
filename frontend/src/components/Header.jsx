import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg='primary' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">eventApp</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;