import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useState } from 'react'

function ItemCard({imgSrc,name,ratings,price,itemId}) {

    const [isFavourite,setFavourite] = useState(false);
    const[currentValue,setCureentvalue] = useState(Math.floor(ratings));

    const handleClick =(value) => {
      setCureentvalue(value);
    }

    return (
        <div className="itemCard" id={itemId}>
            <div className={`isFavourite ${isFavourite ? "active" : "" }`} 
            onClick = {()=> setFavourite(!isFavourite)}>
                <Favorite />
            </div>

            <div className="imgBox">
                <img src={imgSrc} alt="" className="itemImg"/>
            </div>
            <div className="itemContent">
                <h3 className="itemName">{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null,{length: 5}).map((e,i) =>(
                            <i key={i} className={`rating ${currentValue > i ? "orange" : "grey"}`}
                            onClick ={()=> handleClick(i + 1)}>
                            <StarRounded/>
                            </i>
                        ))}
                        <h3 className="price">
                        <span>$ </span>
                        {price}
                        </h3>
                    </div>
                    <i className="addToCart">
                    <AddRounded/>
                </i>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
