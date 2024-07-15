import React from "react";
import "../Cart/Cart.scss";

const Cart = () => {
  const food_item = [
    {
      food_id: 1,
      food_url:
        "https://images.unsplash.com/photo-1478749485505-2a903a729c63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 2,
      menu_name: "Pho",
      rating: 5,
      price: "$30",
      description:
        "Pho is a Vietnamese noodle soup consisting of broth, linguine-shaped",
    },
    {
      food_id: 2,
      food_url:
        "https://images.unsplash.com/photo-1533450823749-791a21b4692a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 3,
      menu_name: "Spaghetti",
      rating: 4.5,
      price: "$40",
      description: "Spaghetti is a long, thin, solid, cylindrical pasta.",
    },
  ];

  return (
    <div>
      <h1>Cart</h1>

      {food_item.map((item, i) => {
        return (
          <div className="food-cart" key={i}>
            <section>
              <div className="food-cart__name">{item.menu_name}</div>
              <img
                className="food-cart__img"
                src={item.food_url}
                alt="Food image"
              />
            </section>
            <section className="food-cart__priceDiv">
              <div>Price: {item.price}</div>
              <div>Description: {item.description}</div>
              <button className="food-cart__btn">Remove</button>
            </section>
          </div>
        );
      })}
      <section className="bill">
        <div className="bill__tax">Tax: {"$5"}</div>
        <div className="bill__tax">Delivery: {"$5"}</div>
        <div className="bill__tax">Total: {"$70"}</div>
        <button>Pay via COD</button>
      </section>
    </div>
  );
};

export default Cart;
