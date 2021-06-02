import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import "../Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "../reducer";
import CreditCardInput from "react-credit-card-input";
import {db} from '../firebase';
import { v4 as uuidv4 } from "uuid";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";

toast.configure()
function Payment() {

  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [cardNumber, setCardNumber] = useState("")
  const [cvcNumber, setcvcNumber] = useState("")
  const [cardDate, setCardDate] = useState("")

  const handleSubmit =  (event) => {
      event.preventDefault()
      setProcessing(true)

    setTimeout(() => {
        toast.success(` Payment Successfull `, {
          position: "top-center",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Bounce,
        });
      
       
      const paymentId = uuidv4(); 
      

      db.collection('users').doc(user?.uid).collection('orders').doc(paymentId).set({
        basket: basket,
        amount: getBasketTotal(basket),
        created: new Date()
      })

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')

      },3000)
  
  }

 

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        {/* Payment srction - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123, React Lane</p>
            <p>India, Maharashtra</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CreditCardInput
                cardNumberInputProps={{
                  onChange: (e) => setCardNumber(e.target.value),
                  onError: (err) => setError(`Card Number Error ${err}`),
                }}
                cardExpiryInputProps={{
                  onChange: (e) => setCardDate(e.target.value),
                  onError: (err) => setError(`Card Number Error ${err}`),
                }}
                cardCVCInputProps={{
                  onChange: (e) => setcvcNumber(e.target.value),
                  onError: (err) => setError(`Card Number Error ${err}`),
                }}
                fieldClassName="input"
              />

              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={'Rs. '}
                />
                <button
                  disabled={
                    cardNumber && cardDate && cvcNumber
                      ? false
                      : true
                  }>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
