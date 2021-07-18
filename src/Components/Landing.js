import { Link } from 'react-router-dom'
import LottieAnimation from '../Lottie';
import camping from '../Animation/camping.json';

const About = () => {
    return (
        <div class='landing'>
            <div class='cta'>
                <h1 class=''>Welcome to Campy</h1>
                <p>Don't forget a thing on your next camping trip</p>
                <a href="/" class="btn-landing">Create a List</a>
            </div>
            <div className='landing-lottie'>
            <LottieAnimation lotti={camping} height={400} width={740} /> 
            </div>
            
            
        </div>
        //<div>
            //<h4>Version 1.0.0</h4>
            //<Link to='/'>Go Back</Link>
        //</div>
        
    )
}

export default About
