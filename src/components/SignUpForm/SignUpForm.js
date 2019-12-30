/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import shortid from 'shortid';
// import isEmail from 'validator/lib/isEmail';

const styles = {
  display: 'flex',
  flexDirection: 'column',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    agreed: false,
    gender: null,
    age: '',
  };

  inputIds = {
    nameId: shortid.generate(),
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
    checkboxId: shortid.generate(),
  };

  handleChange = e => {
    // console.dir(e.target);
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, agreed } = this.state;

    // const validateEmail = isEmail(email);
    // console.log('validateEmail :', validateEmail);
    // if (!validateEmail) {
    //   alert('Email is incorrect');
    // }

    console.log(`
      Login: ${name}
      Email: ${email}
      Password: ${password}
      Agreed: ${agreed}
    `);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      password: '',
      agreed: false,
      gender: null,
    });
  };

  render() {
    const { name, email, password, agreed, gender, age } = this.state;
    const { nameId, emailId, passwordId, checkboxId } = this.inputIds;
    return (
      <form style={styles} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId}>
          Name
          <input
            name="name"
            onChange={this.handleChange}
            value={name}
            id={nameId}
            type="text"
          />
        </label>

        <label htmlFor={emailId}>
          Email
          <input
            name="email"
            onChange={this.handleChange}
            value={email}
            id={emailId}
            type="email"
          />
        </label>

        <label htmlFor={passwordId}>
          Password
          <input
            name="password"
            onChange={this.handleChange}
            value={password}
            id={passwordId}
            type="password"
          />
        </label>

        <label htmlFor={checkboxId}>
          Agree to terms
          <input
            name="agreed"
            id={checkboxId}
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <section role="group">
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignUpForm;
