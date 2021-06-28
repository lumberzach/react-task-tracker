import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Copyright &copy; 2021</p>
            <Link to="/">Home {' '}</Link>
            <Link to="/about">About</Link>
            
        </footer>
    )
}

export default Footer
