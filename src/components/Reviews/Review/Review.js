
import "./Review.css"

function Review({ elem }) {



    return (
        <div className="review">
            <div className="review-top">
                <img src={elem.propertyImage} />
            </div>
            <div className="review-bottom">
                <div className="user-profile">
                    <img src={elem.author.avatar} />
                    <div className="user-info">
                        <h3 className="user-name">{elem.author.name}</h3>
                        <p className="user-location">{elem.author.location}</p>
                    </div>
                    <div className="user-rating">
                        <span className="review-star">★</span>
                        <span>{elem.rating}</span>
                    </div>
                </div>

                <div className="user-review">
                    <p>{elem.text}</p>
                </div>

            </div>
        </div>
    )
}

export default Review