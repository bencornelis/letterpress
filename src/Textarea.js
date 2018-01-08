import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.handleOnInput = this.handleOnInput.bind(this);
  }

  componentDidMount() {
    this.handleOnInput();
  }

  handleOnInput() {
    const { handleInput } = this.props;
    const newInput = this.textarea.value;
    handleInput(newInput);
  }

  render() {
    const { defaultValue, rows } = this.props;

    return (
      <textarea
        defaultValue={defaultValue}
        ref={el => { this.textarea = el; }}
        rows={rows}
        onInput={this.handleOnInput}
      />
    );
  }
}

export default Textarea;