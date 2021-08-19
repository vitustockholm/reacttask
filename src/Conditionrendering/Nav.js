import React, { Component } from 'react';

class Nav extends Component {
  //rconst - state
  constructor(props) {
    super(props);

    this.state = { auth: false, productsInCart: 0 };
  }
  logIn() {
    this.setState({ auth: !this.state.auth });
  }

  logOut() {
    this.setState({ auth: !this.state.auth });
  }

  render() {
    let cart;
    switch (this.state.productsInCart) {
      case 0:
        cart = <li>You Have no items in cart</li>;
        break;
      case 1:
        cart = <li>You Have 1 item in cart</li>;
        break;
      case 2:
        cart = <li>You Have 2 items in cart</li>;
        break;
      case 3:
        cart = <li>You Have 3 items in cart</li>;
        break;
      case 4:
        cart = <li>You Have 4 items in cart</li>;
        break;
      default:
        cart = <li>You have many items</li>;
    }
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          {/*  when choosing to render one element of two element  */}
          {this.state.auth ? (
            <>
              <li>M y account</li>
              {cart}
            </>
          ) : (
            <li onClick={() => this.logIn()}>Login</li>
          )}
          {/*  when choosing to render element or not if true  && =>render */}
          {this.state.auth && <li onClick={() => this.logOut()}>Logout</li>}
          {/*  when choosing to render one of many element s(using switch/else ...if) */}
        </ul>
      </nav>
    );
  }
}

export default Nav;
