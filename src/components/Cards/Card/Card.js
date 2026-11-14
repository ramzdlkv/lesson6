
import loc from "./icons/location.png"
import size from "./icons/size.png"
import roms from "./icons/rooms.png"
import "./Card.css"

function Card({ elem }) {



    return (
        <div className="card">
            <div className="card-top">
                <img src={elem.image} />
            </div>

            <div className="card-bottom">
                <div className="card-title">
                    <img src={loc}/>
                    <h3>{elem.location}</h3>
                </div>
                <div className="card-desc">
                    <img src={roms}/>
                    <p>{elem.rooms}</p>
                    <img src={size}/>
                    <p>{elem.area}</p>
                </div>
                <div className="card-buttton">
                    <p>{elem.price}</p>
                    <button> {elem.action}</button>
                </div>
            </div>



        </div>
    )
}

export default Card