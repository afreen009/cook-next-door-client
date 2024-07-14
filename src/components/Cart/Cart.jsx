import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycart: [],
      total: 0,
    };
  }
  componentDidMount = async () => {
    const mycarts = products;
    const mycart = [];
    mycarts.forEach((cart) => {
      cart["amount"] = 100;
      cart["quantity"] = 1;
      mycart.push(cart);
    });
    const total = this.totalAmount(mycart);
    this.setState({ mycart, total });
  };
  decrement = (e, id) => {
    const { mycart } = this.state;
    const selectedCartIndex = mycart.findIndex((cart) => cart.id === id);
    const selectedCart = mycart[selectedCartIndex];
    const myquantity = selectedCart.quantity - 1;
    if (myquantity !== 0) {
      selectedCart["quantity"] = myquantity;
      mycart[selectedCartIndex] = selectedCart;
      const total = this.totalAmount(mycart);
      this.setState({ mycart, total });
    }
  };
  increment = (e, id) => {
    const { mycart } = this.state;
    const selectedCartIndex = mycart.findIndex((cart) => cart.id === id);
    const selectedCart = mycart[selectedCartIndex];
    const myquantity = selectedCart.quantity + 1;
    selectedCart["quantity"] = myquantity;
    mycart[selectedCartIndex] = selectedCart;
    const total = this.totalAmount(mycart);
    this.setState({ mycart, total });
  };
  totalAmount = (cart) => {
    const total = cart.reduce((a, b) => {
      return a + b["amount"] * b["quantity"];
    }, 0);
    return total;
  };
  render() {
    const { mycart, total } = this.state;
    return (
      <div>
        <h1>Orders</h1>
        <section className="cart__section">
          <div className="cart__section__item">
            <div className="cart__section__item__image">
              {/* <img src="https://images.unsplash.com/photo-1600277836167-6c"/> */}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{"cart.title"}</h5>
                <p>₹ {"cart.amount"}</p>
                <label className="form-label">Quantity</label>
                <input
                  className="form-control mb-3"
                  type="text"
                  value={"cart.quantity"}
                  readOnly
                />
                <button
                  className="btn btn-info"
                  style={{ marginRight: "5px" }}
                  onClick={(e) => this.decrement(e, "cart.id")}
                >
                  -
                </button>
                <button
                  className="btn btn-info"
                  onClick={(e) => this.increment(e, "cart.id")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
