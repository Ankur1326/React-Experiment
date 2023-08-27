import { Link } from "react-router-dom";
import "./Pokemon.css";

function Pokemon(props) {
    return (
        <div className="pokemon-card">
            <Link to="/pokemon/2">
                <div>{props.name}</div>
                <div><img src={props.image}/></div>
            </Link>
        </div>
    )
}

export default Pokemon;