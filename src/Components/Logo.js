import LottieAnimation from '../Lottie';
import campfire from '../Animation/campfire.json';

const Logo = () => {
    return (
        <div className='logo'>
          <LottieAnimation lotti={campfire} height={300} width={300} />   
        </div>
    )
}

export default Logo
