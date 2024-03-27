import React, { useReducer } from "react";

function ReduceHookAddToCartUlLi() {
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, { id: action.payload.id, name: action.payload.name, price: action.payload.price }];
      case 'REMOVE_CART':
        return state.filter(item => item.id !== action.payload);
      default:
        return state;
    }
  }

  var [cart, dispatch] = useReducer(reducer, []);

  var products = [
    { id: 1, name: "nitish", price: 56000 },
    { id: 2, name: "lavish", price: 33000 },
    { id: 3, name: "khatri", price: 9870 },
  ];

  var totalCost = cart.reduce((acc, item) => acc + item.price, 0);

  function AddToCart(product) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  function RemoveFromCart(itemId) {
    dispatch({ type: 'REMOVE_CART', payload: itemId });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7 bg-info-subtle">
            <h1 className="text-center">Shopping Cart Example</h1>
            <ul>
              {products.map((d) => (
                <li key={d.id}>
                  id: {d.id} {d.name} Rs: {d.price}
                  <button onClick={() => AddToCart(d)}>AddToCart</button>
                </li>
              ))}
            </ul>
            <h2>Cart</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.id} {item.name} = Rs {item.price}
                  <button onClick={() => RemoveFromCart(item.id)}>RemoveFromCart</button>
                </li>
              ))}
            </ul>
            <p>Total Cost: ${totalCost}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReduceHookAddToCartUlLi;
