/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import classnames from 'classnames';

class AddUserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.addUser(name);
      this.setState({ name: '' });
    }
  };

  render() {
    return (
      <input
        type="text"
        className={classnames('form-control')}
        placeholder="Type the name of the user to add"
        value={this.state.name}
        onChange={(e) => this.handleChange(e)}
        onKeyDown={(e) => this.handleSubmit(e)}
      />
    );
  }
}

export default AddUserInput;
