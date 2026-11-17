
import {cards} from "../../../data"

import Card  from "../Card/Card"

import "./CardList.css"

function CardList(){
return(
    <div>
        <h1 className="title">Our Popular Residences</h1>
        <div className="cardList">
            {cards.map((elem)=>{
                return <Card key={elem.id} elem = {elem}/>  
            })}

            
        </div>
    </div>
)

}


export default CardList