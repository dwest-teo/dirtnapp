// @flow
/* eslint jsx-a11y/label-has-associated-control: 0 jsx-a11y/label-has-for: 0 */
import React, { PureComponent } from 'react';
import Router from 'next/router';

type State = {
  name: ?string,
};

export default class Form extends PureComponent<*, State> {
  state = {
    name: '',
  };

  onChange = (e: SyntheticEvent<*>) =>
    this.setState({ name: e.currentTarget.value });

  onSubmit = (e: SyntheticEvent<*>) => {
    e.preventDefault();
    const { name } = this.state;
    Router.push({
      pathname: '/results',
      query: { name },
    });
  };

  render() {
    const { name } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label htmlFor="name">
          enter a name to see if they&apos;re alive or dead:
        </label>
        <input id="name" type="text" onChange={this.onChange} value={name} />
        <button type="submit" disabled={!name}>
          Submit
        </button>
        <style jsx>{`
          .form {
            padding: 2rem 1rem;
            max-width: 30em;
            text-align: center;
          }
          label {
            font-size: 0.875rem;
            display: block;
            margin-bottom: 0.5rem;
          }
          input {
            -webkit-appearance: none;
            -moz-appearance: none;
            border-style: solid;
            border-width: 1px;
            border-color: rgba(0, 0, 0, 0.2);
            padding: 0.5rem;
            display: block;
            width: 100%;
          }
          input::-moz-focus-inner {
            border: 0;
            padding: 0;
          }
          button {
            cursor: pointer;
            font-weight: bold;
            padding: 0.5rem 1rem;
            margin-top: 1rem;
            color: #fff;
            border: none;
            background-color: rgba(0, 0, 0, 0.8);
            -moz-osx-font-smoothing: grayscale;
            backface-visibility: hidden;
            transform: translateZ(0);
            transition: transform 0.25s ease-out;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
          button:hover,
          button:focus {
            transform: scale(1.05);
          }
          button:active {
            transform: scale(0.9);
          }
          button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </form>
    );
  }
}
