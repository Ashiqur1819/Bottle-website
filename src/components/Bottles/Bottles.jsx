import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [addToCart, setAddToCart] = useState([])

    useEffect(() => {
        fetch("bottles.json")
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const handleAddToCartBtn = bottle => {
        const newAddToCart = [...addToCart, bottle]
        setAddToCart(newAddToCart)
    }

    return (
      <div>
        <h1>Beautiful Bottle Website</h1>
        <h2>Bottles: {bottles.length}</h2>
        <h3>Add To Cart: {addToCart.length}</h3>

        <div className="bottle-container">
          {bottles.map((bottle) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handleAddToCartBtn={handleAddToCartBtn}
            ></Bottle>
          ))}
        </div>
      </div>
    );
};

export default Bottles;