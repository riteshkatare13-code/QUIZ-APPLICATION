import "./QuizCard.css"

export  const QuizCard = ({category}) => {
    return(

        <div className="container d-flex direction-column">
            <div className="img-box">
                <img className="img" src={category.image} alt="quizCard"></img>
            </div>

            <div className="details">
                <h3 className="title">{category.type}</h3>
                <span>{category.description} </span>
            </div>

            <button className="button play-now-btn btn-primary cursor">Play Now</button>
        </div>
    )
}