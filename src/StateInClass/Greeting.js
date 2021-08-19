import React, { Component } from 'react';
import './Greeting.css';

class Greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      age: '',
    };
  }

  submitHandler(e) {
    e.preventDefault();

    const { name, surname, age } = this.state;
    console.log(name, surname, age);
    // console.log(this.state.name, this.state.surname, this.state.age);

    if (name && surname && +age >= 18) {
      this.setState({
        message: `Welcome ${name} ${surname}, your registration was succesfull!`,
        name: '',
        surname: '',
        age: '',
      });
    } else if (name && surname && age && +age < 18) {
      this.setState({
        message: 'Registration failed, you are under age',
        name: '',
        surname: '',
        age: '',
      });
    } else {
      this.setState({ message: 'Please provide all info' });
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to dating site!</h2>
        <p>Please Enter Your information:</p>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <div className='form-control'>
            <label htmlFor=''>Your name:</label>
            <input
              type='text'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className='form-control'>
            <label htmlFor=''>Your surname</label>
            <input
              type='text'
              value={this.state.surname}
              onChange={(e) => this.setState({ surname: e.target.value })}
            />
          </div>
          <div className='form-control'>
            <label htmlFor=''>Your age:</label>
            <input
              type='text'
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />

            <div className='form-control'>
              <br />
              <input type='submit' />
            </div>
          </div>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Greeting;
