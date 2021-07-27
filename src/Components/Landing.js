import LottieAnimation from '../Lottie';
import camping from '../Animation/camping.json';

const Landing = () => {
    return (
        <div className='landing'>
            <div className='cta'>
                <h1 className='welcome'>Welcome to Campy</h1>
                <p>Don't forget a thing on your next camping trip</p>
                <a href="/" className="btn-landing">Create a List</a>
            </div>
            <div className='landing-lottie'>
            <LottieAnimation lotti={camping} height={400} width={740} /> 
            </div>
            
            
        </div>
        
    )
}

export default Landing
