import Image from './Image'

function DogCard(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <img src={props.Image} />
            <p>This is a cute dog</p>
        </>
    )
}

export default DogCard;