
const FireInfo = ({ fireInfo }) => {
    return (
        <div className="fire-info">
            <h2>Fire Info</h2>
            <ul>
                <li>ID: <strong>{ fireInfo.id }</strong></li>
                <li>Wildfire Name: <strong>{ fireInfo.title }</strong></li>
            </ul>
            
        </div>
    ) 
}

export default FireInfo
