import "./Pokemon.css";

function Pokemon(props) {
    return (
        <div className="pokemon-card">
            <div>{props.name}</div>
            <div><img src={props.image}/></div>
        </div>
    )
}

export default Pokemon;