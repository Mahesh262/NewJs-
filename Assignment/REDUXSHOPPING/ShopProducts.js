import React from 'react'
import { Data } from './ShopData'
import { GiShoppingBag } from "react-icons/gi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ShopProducts = () => {
    const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <>
   <div className="productConatiner">
      <div className="navigation">
        <p>
          <HiOutlineMenuAlt4 />
        </p>
        <Link to="/cart">
          <GiShoppingBag />
        </Link>
      </div>
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product" key={item.id}>
              <img src={item.img} alt="cart" />
              <h4>{item.name}</h4>
              <p>$ {item.price}</p>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
    
    </>
  )
}

export default ShopProducts