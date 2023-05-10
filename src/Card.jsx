function Card(props) {
    return (
        <div className="article">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p>{2 + 2 }</p>
        </div>

    )
}

export default Card;