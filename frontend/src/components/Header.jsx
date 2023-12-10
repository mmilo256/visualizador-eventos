import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg='primary' data-bs-theme="dark">
            <Container>
                <Navbar.Brand className='fw-bold' href="#home">EventApp</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;