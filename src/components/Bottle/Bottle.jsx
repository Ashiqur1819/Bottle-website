import "./Bottle.css"

const Bottle = ({ bottle, handleAddToCartBtn }) => {

  const { name, img, price} = bottle;
  return (
    <div className="bottle">
      <h3>Name: {name}</h3>
      <img src={img} alt="" />
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCartBtn(bottle)}>Add To Cart</button>
    </div>
  );
};

export default Bottle;