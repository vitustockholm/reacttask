import React, { Component } from 'react';

export class User extends Component {
  render() {
    const { name, email } = this.props.user;
    return (
      <ul>
        <li>{name}</li>
        <li>{email}</li>
      </ul>
    );
  }
}

export default User;
