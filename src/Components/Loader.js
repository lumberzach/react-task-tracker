import spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <h1>Fetching Wildfire Data!</h1>
            <img src={spinner} alt="loading" />
            
        </div>
    )
}

export default Loader
