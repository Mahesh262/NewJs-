import React from 'react'
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from '@mui/material';

const Cart = () => {
    const cart = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();
    const addition = (acc, currentvalue) => {
      return acc + currentvalue.price * currentvalue.quantity;
    };
    const total = cart.reduce(addition, 0);
  return (
    <>
     <div className="cartcontainer">
      <Link to="/">
        <TiArrowBack />
      </Link>
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cartcad" key={item.id}>
              <div>
                <img src={item.image} alt="cart" />
                <h4>{item.title}</h4>
                <p> price: $ {item.price}</p>
                <p>amount : total ${item.price * item.quantity}</p>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  Remove
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  Add
                </button>
                <p>{item.quantity}</p>
                <Button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {total > 0 && <h2>total:{total}</h2>}
    </div>
    
    
    
    </>
  )
}

export default Cart