
import { reviews } from "../../../reviewsData"

import Review from "../Review/Review"

import "./ReviewList.css"
import right from "./icons/right.png"
import left from "./icons/left.png"

function ReviewList() {
    return (
        <div className="boxr">
            <h1 className="title">What People Say About Dwello</h1>
            <div className="reviewList">
                {reviews.map((elem) => {
                    return <Review key={elem.id} elem={elem} />
                })}



            </div>

            <div className="slider">
                <div><img src={left} /></div>
                <div><img src={right} /></div>

            </div>
        </div>
    )

}


export default ReviewList