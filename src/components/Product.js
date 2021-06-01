import React from 'react'
import "../Product.css"
import { useStateValue } from '../StateProvider';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
function Product({id, title, image, price, rating}) {

  const [{ basket }, dispatch] = useStateValue()

  // console.log("This is the basket", basket)

  const addToBasket = () => {
    // dispathc the item in data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id:id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })

    toast.dark(`${title} has been added successfully ✔ `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce,
      newestOnTop: true
    });
  }

    return (
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
        <img src={image} alt="the lean startup" />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    );
}

export default Product
